"use client";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { supabase } from "@/lib/supabase";
import Link from "next/link";
import PostCard from "@/components/postCard";
import { useRouter } from "next/navigation";

type Post = {
  id: number;
  title: string;
  slug: string;
  created_at: string;
  content: string;
  updated_at?: string;
  cover_image?: string;
};

const Blog = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase.from("posts").select("*");

      if (error) {
        console.error("Error fetching posts:", error);
      } else {
        setPosts(data);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="w-full max-w-5xl mx-auto p-4">
      <div className="relative text-3xl font-bold mb-8 md:mb-12 text-center">
        My Blog
        <motion.button
          onClick={() => router.push("/")}
          whileHover={{
            scale: 1.3,
            transition: { type: "spring", damping: 15 },
          }}
          whileTap={{ scale: 0.9 }}
          className="absolute left-0 p-2 rounded-full cursor-pointer"
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <motion.path
              d="M15 18l-6-6 6-6"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5 }}
            />
          </motion.svg>
        </motion.button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link href={`/blog/${post.slug}`} key={post.id}>
            <PostCard
              title={post.title}
              time={new Date(post.created_at).toLocaleDateString()}
              imgUrl={post.cover_image || "/pics/default-cover.jpg"}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog;
