"use client";
import { LinkProps } from "@/@custom-types";
import Modal from "@/components/modal";
import useWindowResize from "@/hooks/use-window-resize";
import { ButtonIcon } from "@/styles/button";
import { Container } from "@/styles/common";
import Link from "next/link";
import { Dispatch, Fragment, SetStateAction, useEffect, useState } from "react";
import Icons from "../../icons";
import {
  ButtonMenu,
  HeaderMobileContent,
  HeaderMobileWrapper,
  ItemMenuProduct,
  MenuItem,
  MenuList,
  ProductMenuList,
} from "./styled";
import IconDropdownExpend from "../header-desktop/dropdown-menu/triangle-down";
import { usePathname, useRouter } from "next/navigation";
import { AuthorOutput } from "@/@custom-types/graphql";
import { GET_AUTHOR } from "@/graphql/queries/blog";
import { formatDataGraphql } from "@/utils";
import { ERROR_API_MESSAGE } from "@/constants/app/message";
import { Alert } from "@/components/alert";
import { useLazyQuery } from "@apollo/client";

export type HeaderMobileProps = {
  data: LinkProps[] | undefined;
  showInput: boolean;
  setShowInput: Dispatch<SetStateAction<boolean>>;
};

const HeaderMobile = ({ data, showInput, setShowInput }: HeaderMobileProps) => {
  const pathname = usePathname();
  const router = useRouter();

  const size = useWindowResize();
  const [show, setShow] = useState(false);
  const [showLang, setShowLang] = useState(false);
  const [showMenuProduct, setShowMenuProduct] = useState<any>(
    data
      ?.filter((item) => item.children)
      .map((el) => ({
        show: false,
        key: el.value,
      }))
  );

  const handleShowProductMenu = (value: string) => {
    setShowMenuProduct({
      show: !showMenuProduct?.show,
      key: value,
    });
  };

  const [author, setAuthor] = useState<AuthorOutput>();

  const [getAuthor] = useLazyQuery<AuthorOutput>(GET_AUTHOR, {
    fetchPolicy: "cache-first",
  });

  useEffect(() => {
    getAuthor()
      .then(({ data }) => {
        const formatData = formatDataGraphql(data, "authors");
        if (formatData) {
          setAuthor(formatData[0]);
        }
      })
      .catch((e) => {
        Alert("ERROR", ERROR_API_MESSAGE);
        console.log(e);
      });
  }, []);

  return (
    <HeaderMobileWrapper className="hide-desktop">
      <HeaderMobileContent>
        <ButtonIcon onClick={() => setShow(true)}>
          <Icons icon="hamburger" />
        </ButtonIcon>

        <Link href={"/"}>
          <img width={90} src={`${process.env.basePath}/img/logo_homeease.png`} alt="" />
        </Link>

        <Modal
          bg="#37ABF4"
          title=""
          show={Number(size.width) >= 786 ? false : show}
          onClose={() => {
            setShow(false);
            setShowLang(false);
          }}
        >
          {/* use tailwind */}
          <div>
            <div
              className="flex items-center    border-b border-white border-opacity-25 pointer"
              onClick={() => {
                router.push("/");
                setShow(false);
              }}
            >
              <img
                className="w-20 h-20 rounded-full ml-0 mr-0"
                src={`${process.env.NEXT_PUBLIC_API_ENDPOINT}${author?.avatar.data.attributes.url}`}
              />
              <div className="text-sm">
                <h3 className="text-white leading-none">{author?.name}</h3>
                <p className="text-white body-3">{author?.self_bio}</p>
              </div>
            </div>
          </div>

          <MenuList $gapMb={16}>
            {data?.map((item, index) =>
              item.type === "link" ? (
                <Link href={item.href ?? ""} key={index} passHref legacyBehavior>
                  <MenuItem $active={pathname == item.href} onClick={() => setShow(false)}>
                    {item.label}
                  </MenuItem>
                </Link>
              ) : item.children ? (
                <Fragment key={index}>
                  <ButtonMenu
                    onClick={() => handleShowProductMenu(item.value as string)}
                    open={showMenuProduct?.show && showMenuProduct?.key == item.value}
                  >
                    {item.label}
                    <IconDropdownExpend />
                  </ButtonMenu>
                  {showMenuProduct.show && showMenuProduct?.key == item.value ? (
                    <ProductMenuList>
                      {item.children.map((child, childIndex) => (
                        <ItemMenuProduct
                          key={childIndex}
                          href={`${child.href}`}
                          passHref
                          shallow
                          onClick={(e) => {
                            setShow(false);
                          }}
                        >
                          <p className="body-2">{child.label}</p>
                        </ItemMenuProduct>
                      ))}
                    </ProductMenuList>
                  ) : null}
                </Fragment>
              ) : null
            )}
          </MenuList>
        </Modal>
      </HeaderMobileContent>
    </HeaderMobileWrapper>
  );
};

export default HeaderMobile;
