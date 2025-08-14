"use client";
import { Tabs, Tab } from "@heroui/react";
import { useState } from "react";
type TabListProps = {
  onChange: (val: string) => void;
};
const TabList: React.FC<TabListProps> = ({ onChange }) => {
  const [currentTab, setCurrentTab] = useState("home");
  return (
    <Tabs
      key="full"
      aria-label="Tabs"
      radius="full"
      classNames={{
        cursor: "shadow-none",
        tabList:
          "bg-gray-100 dark:bg-darkBg border-2 border-transparent dark:border-knight",
      }}
      className="mb-8"
      motionProps={{
        initial: { scale: 0.8 },
        animate: { scale: 1 },
        exit: { scale: 0.8 },
        transition: { type: "spring", stiffness: 300, damping: 15 },
      }}
      onSelectionChange={(key) => {
        setCurrentTab(String(key));
        onChange(String(key));
      }}
    >
      <Tab key="home" title="Home" />
      <Tab key="about" title="About" />
      <Tab key="blog" title="Blog" />
    </Tabs>
  );
};

export default TabList;
