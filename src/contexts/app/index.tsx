"use !!client";

import { usePathname } from "next/navigation";
import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";

const AppContext = createContext<{
  initJs?: boolean;
  setInitJs?: any;
  loading?: boolean;
  setLoading?: Dispatch<SetStateAction<boolean | undefined>>;
  topics?: any;
  setTopics?: any;
  plHeader?: string;
  setPlHeader?: any;
  personalState?: string;
  setpersonalState?: any;
}>({
  loading: false,
});

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const [loading, setLoading] = useState<boolean>();
  const [initJs, setInitJs] = useState<boolean>();
  const [topics, setTopics] = useState([]);
  const [plHeader, setPlHeader] = useState<string>(); //state này để biết lấy được pl của Header từ đó render ra plBanner cho thẳng hàng
  const [personalState, setpersonalState] = useState<string>("Overview"); // state này cho personal header
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
        setpersonalState,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
