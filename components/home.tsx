"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import TabList from "./tabList";
import HomeGrid from "./homeGrid";
import About from "./about";

const Home = () => {
  const [isHome, setIsHome] = useState(true);
  const router = useRouter();
  const handleTabChange = (tab: string) => {
    if (tab === "blog") {
      router.push("/blog");
      return;
    }
    tab === "home" ? setIsHome(true) : setIsHome(false);
  };
  return (
    <div className="flex justify-center flex-col items-center">
      <TabList onChange={handleTabChange}></TabList>
      {isHome ? <HomeGrid></HomeGrid> : <About></About>}
    </div>
  );
};

export default Home;
