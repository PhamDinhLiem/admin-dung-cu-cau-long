import useClickAway from "@/hooks/use-click-away";
import { map } from "lodash";
import { useEffect, useMemo, useRef, useState } from "react";
import { ButtonItem, DropDownWrapper, SelectWrapper, WrapperTitle } from "./styled";
import IconDropdownExpend from "./triangle-down";
import { ButtonIcon } from "@/styles/button";

const DropdownMenu = ({ value, data, onChange, title, showDropdown, setShow }: any) => {
  const [focus, setFocus] = useState<any>();

  const focusRref = useRef<HTMLDivElement>();
  const dropdownRef = useRef<any>();
  const ref = useRef<any>();

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
      <DropDownWrapper show={Boolean(showDropdown == value)} ref={dropdownRef}>
        {map(data, (d) => (
          <ButtonItem key={d.value} href={`${d.href}`}>
            <h5 className="body-2">{d.label}</h5>
          </ButtonItem>
        ))}
      </DropDownWrapper>
    ),
    [onChange, data, value]
  );

  return (
    <SelectWrapper ref={ref}>
      <WrapperTitle show={showDropdown == value}>
        <h4
          className="text-lg"
          onClick={(e) => {
            setShow(value);
          }}
        >
          {title}
        </h4>
        <ButtonIcon>
          <IconDropdownExpend />
        </ButtonIcon>
      </WrapperTitle>

      {showDropdown == value && dropDown}
    </SelectWrapper>
  );
};

export default DropdownMenu;
