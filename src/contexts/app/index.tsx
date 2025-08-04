"use !!client";

import { fakeDataNewsVer2 } from "@/data";
import { sortNewsList } from "@/utils/blog-utils";
import { usePathname } from "next/navigation";
import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";

const AppContext = createContext<{
  initJs?: boolean;
  product?: any;
  setProduct?: any;
  setInitJs?: any;
  loading?: boolean;
  setLoading?: Dispatch<SetStateAction<boolean | undefined>>;
  topics?: any;
  setTopics?: any;
  plHeader?: string;
  setPlHeader?: any;
  personalState?: string;
  setPersonalState?: any;
  sortedNews?: any;
}>({
  loading: false,
});

//Sort lại danh sách tin tức từ raw data
const sortedNews = sortNewsList(fakeDataNewsVer2);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const [product, setProducts] = useState<any>();
  const [loading, setLoading] = useState<boolean>();
  const [initJs, setInitJs] = useState<boolean>();
  const [topics, setTopics] = useState([]);
  const [plHeader, setPlHeader] = useState<string>(); //state này để biết lấy được pl của Header từ đó render ra plBanner cho thẳng hàng
  const [personalState, setPersonalState] = useState<string>("overview"); // state này cho personal header
  return (
    <AppContext.Provider
      value={{
        loading,
        setLoading,
        topics,
        setTopics,
        initJs,
        setInitJs,
        plHeader,
        setPlHeader,
        personalState,
        setPersonalState,
        sortedNews,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
