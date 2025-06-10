import useClickAway from "@/hooks/use-click-away";
import { map } from "lodash";
import { useContext, useEffect, useMemo, useRef, useState } from "react";
import { ButtonItem, DropDownWrapper, SelectWrapper, WrapperTitle } from "./styled";
import IconDropdownExpend from "./triangle-down";
import { ButtonIcon } from "@/styles/button";
import AppContext from "@/contexts/app";
import { useRouter } from "next/navigation";

const DropdownMenu = ({ value, data, onChange, title, showDropdown, setShow, pathName }: any) => {
  const ref = useRef<any>();
  const router = useRouter();
  const dropdownRef = useRef<any>();
  const [focus, setFocus] = useState<any>();
  const focusRref = useRef<HTMLDivElement>();
  const { setPersonalState } = useContext(AppContext);

  // Hàm xử lý khi click vào
  const handleClick = (e: any, link: string, state?: string) => {
    e.preventDefault();

    //Xủ lý riêng cho các phần trong menu personal
    if (state) {
      setPersonalState(state);
    }

    if (pathName != "/blog/personal") {
      router.push(link);
    }
  };

  useEffect(() => {
    if (pathName) {
      console.log(pathName);
    }
  }, [pathName]);

  useEffect(() => {
    dropdownRef.current?.children[focus]?.focus();
    focusRref.current = focus;
  }, [focus]);

  useClickAway(ref, () => {
    if (showDropdown == value) {
      setShow("");
    }
  });

  const dropDown = useMemo(
    () => (
      <DropDownWrapper
        onMouseOver={(e) => {
          setShow(value);
        }}
        show={Boolean(showDropdown == value)}
        ref={dropdownRef}
      >
        {map(data, (d) => (
          <ButtonItem
            key={d.value}
            onClick={(e) => {
              handleClick(e, "/blog/personal", d.value);
            }}
          >
            <p className="body-2 cursor-pointer">{d.label}</p>
          </ButtonItem>
        ))}
      </DropDownWrapper>
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [onChange, data, value, pathName]
  );

  return (
    <SelectWrapper ref={ref}>
      <WrapperTitle show={showDropdown == value}>
        <p
          className="text-lg text-gray-500 cursor-pointer"
          onMouseOver={(e) => {
            setShow(value);
          }}
        >
          {title}
        </p>
        <ButtonIcon>
          <IconDropdownExpend />
        </ButtonIcon>
      </WrapperTitle>

      {showDropdown == value && dropDown}
    </SelectWrapper>
  );
};

export default DropdownMenu;
