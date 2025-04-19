import InputSearch from "@/components/input-search";
import useClickAway from "@/hooks/use-click-away";
import { useRef, useState } from "react";
import { HeaderInputWrapper } from "./styled";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface HeaderInputProps {
  setShowInput: any;
}

const HeaderInput = ({ setShowInput }: HeaderInputProps) => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState("");

  const refInput = useRef<HTMLDivElement>(null);

  // useClickAway(refInput, () => {
  //   if (!searchValue) {
  //     setShowInput(false);
  //   }
  // });

  const onChange = (e: any) => {
    setSearchValue(e.target.value);
  };

  return (
    <HeaderInputWrapper ref={refInput}>
      <InputSearch
        onClose={() => {
          setShowInput(false);
          router.push(`/`);
        }}
        value={searchValue}
        onChange={onChange}
        type="text"
        placeholder="Tìm kiếm"
        onSubmit={() => router.push(`/?search=${searchValue}`)}
      />
    </HeaderInputWrapper>
  );
};

export default HeaderInput;
