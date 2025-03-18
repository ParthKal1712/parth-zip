import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ReactNode, useState, JSX } from "react";

type TabType = {
  title: string;
  content: ReactNode;
};

type TabsProps<T extends readonly TabType[]> = {
  tabs: T;
  defaultTabTitle?: T[number]["title"];
};

type TabsReturnType<T extends readonly TabType[]> = {
  activeTab: T[number]["title"];
  setActiveTab: React.Dispatch<React.SetStateAction<T[number]["title"]>>;
  TabsGroupComponent: ({ className }: { className?: string }) => JSX.Element;
};

export const useTabs = (
  props: TabsProps<TabType[]>,
): TabsReturnType<TabType[]> => {
  const defaultTabTitle = !!props.defaultTabTitle
    ? props.defaultTabTitle
    : props.tabs[0].title;

  const [activeTab, setActiveTab] =
    useState<TabType[][number]["title"]>(defaultTabTitle);

  const TabsGroupComponent = ({ className }) => {
    return (
      <Tabs defaultValue={defaultTabTitle} className={className}>
        <TabsList>
          {props.tabs.map((tab) => (
            <TabsTrigger
              key={tab.title}
              value={tab.title}
              className="px-6 md:px-8"
            >
              {tab.title}
            </TabsTrigger>
          ))}
        </TabsList>
        {props.tabs.map((tab) => (
          <TabsContent
            key={tab.title}
            value={tab.title}
            className="my-4 flex flex-col gap-4"
          >
            {tab.content}
          </TabsContent>
        ))}
      </Tabs>
    );
  };
  return {
    activeTab,
    setActiveTab,
    TabsGroupComponent,
  };
};

// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { ReactNode, JSX, useState } from "react";

// // type TabType = {
// //   title: string;
// //   content: ReactNode;
// // };

// // type TabGroupType = TabType[];

// type TabsProps<T extends readonly { title: string; content: ReactNode }[]> = {
//   tabs: T;
//   defaultTabTitle?: T[number]["title"];
//   activeTab: T[number]["title"];
//   setActiveTab: React.Dispatch<React.SetStateAction<T[number]["title"]>>;
// };

// type TabsReturnType = {
//   activeTab: TabGroupType[number]["title"];
//   setActiveTab: React.Dispatch<
//     React.SetStateAction<TabGroupType[number]["title"]>
//   >;
//   TabsGroupComponent: () => JSX.Element;
// };

// export const useTabs = (props: TabsProps): TabsReturnType => {
// const defaultTabTitle = !!props.defaultTabTitle
//   ? props.defaultTabTitle
//   : props.tabs[0].title;
//   //   const [activeTab, setActiveTab] =
//   //     useState<TabGroupType[number]["title"]>(defaultTabTitle);
// const TabsGroupComponent = () => {
//   return (
//     <Tabs defaultValue={defaultTabTitle} className="w-[400px]">
//       <TabsList>
//         {props.tabs.map((tab) => (
//           <TabsTrigger value={tab.title}>{tab.title}</TabsTrigger>
//         ))}
//       </TabsList>
//       {props.tabs.map((tab) => (
//         <TabsContent value={tab.title}>{tab.content}</TabsContent>
//       ))}
//     </Tabs>
//   );
// };
// return {
//   activeTab,
//   setActiveTab,
//   TabsGroupComponent,
// };
// };
