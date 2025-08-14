"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import MarkdownRenderer from "@/components/markdownRenderer";
import { useParams } from "next/navigation";
import { fontEnjoy } from "@/config/fonts";
import { motion } from "motion/react";

type Post = {
  title: string;
  created_at: string;
  cover_image?: string;
  content: string;
};

const Artical = () => {
  const params = useParams<{ slug: string }>();
  const slug = params.slug;
  const [post, setPost] = useState<Post | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchPost = async () => {
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .eq("slug", slug)
        .single();

      if (error) {
        console.error("Error fetching post:", error);
      } else {
        setPost(data);
      }
    };

    if (slug) fetchPost();
  }, [slug]);

  if (!post)
    return (
      <div className="w-full h-screen flex justify-center items-center -translate-y-[10%]">
        <div
          className={`text-2xl text-center text-blue-500 ${fontEnjoy.className}`}
        >
          Loading...
        </div>
      </div>
    );

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <div className="flex  items-center mb-4">
        <motion.button
          onClick={() => router.push("/blog")}
          whileHover={{
            scale: 1.3,
            transition: { type: "spring", damping: 15 },
          }}
          whileTap={{ scale: 0.9 }}
          className="rounded-full cursor-pointer flex"
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
          <span className={`${fontEnjoy.className} `}>back</span>
        </motion.button>

      </div>

      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-500 mb-8">
        {new Date(post.created_at).toLocaleDateString()}
      </p>

      {post.cover_image && (
        <img
          src={post.cover_image}
          alt={post.title}
          className="w-full h-64 object-cover mb-8 rounded-lg"
        />
      )}

      <MarkdownRenderer content={post.content} />
    </div>
  );
};

export default Artical;
