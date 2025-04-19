import { LinkProps } from "@/@custom-types";
import { Alert } from "@/components/alert";
import { ERROR_API_MESSAGE } from "@/constants/app/message";
import AppContext from "@/contexts/app";
import { useLanguage } from "@/contexts/language";
import { GET_TOPICS } from "@/graphql/queries/blog";
import useClickAway from "@/hooks/use-click-away";
import { formatDataGraphql } from "@/utils";
import { useLazyQuery } from "@apollo/client";
import { useContext, useEffect, useRef, useState } from "react";
import HeaderDesktop from "./header-desktop";
import HeaderMobile from "./header-mobile";
import { HeaderWrapper } from "./styled";

interface HeaderProps {}

const Header = () => {
  const { t } = useLanguage();
  const [show, setShow] = useState(false);
  const { setTopics, topics } = useContext(AppContext);

  const ref = useRef<HTMLDivElement>(null);
  const [showInput, setShowInput] = useState(false);

  const [getTopics] = useLazyQuery<any>(GET_TOPICS, {
    fetchPolicy: "network-only",
  });

  const listMenu: LinkProps[] = [
    // { value: "/", label: t("header.menu_1"), href: "/", type: "link" },
    { value: "ve-homeease", label: "VỀ HOMEEASE", href: "/ve-homeease", type: "link" },
    {
      value: "dang-ky-thong-tin",
      label: "ĐĂNG KÝ THÔNG TIN",
      href: "/dang-ky-thong-tin/dang-ky-chu-nha",
      type: "button",
      children: [
        {
          value: "dang-ky-chu-nha",
          label: "ĐĂNG KÝ CHỦ NHÀ",
          href: "/dang-ky-thong-tin/dang-ky-chu-nha",
          type: "link",
        },
        {
          value: "dang-ky-giup-viec",
          label: "ĐĂNG KÝ GIÚP VIỆC",
          href: "/dang-ky-thong-tin/dang-ky-giup-viec",
          type: "link",
        },
      ],
    },
    { value: "chu-nha", label: "Chủ nhà", href: "/chu-nha", type: "link" },
    { value: "giup-viec", label: "GIÚP VIỆC", href: "/giup-viec", type: "link" },

    {
      value: "tin-tuc",
      label: "TIN TỨC",
      href: "#",
      type: "button",
      children: [
        { value: "noi-bat", label: "NỔI BẬT", href: "/tin-tuc/noi-bat", type: "link" },
        // { value: "tuyen-dung", label: "TUYỂN DỤNG", href: "/tin-tuc/tuyen-dung", type: "link" },
      ],
    },
    { value: "lien-he", label: "LIÊN HỆ", href: "/lien-he", type: "link" },
    // { value: "faqs", label: t("header.menu_4"), href: "/faqs", type: "link" }, main
  ];

  const [listFilterMenu, setListFilterMenu] = useState<any>(() => listMenu);

  useEffect(() => {
    getTopics()
      .then(({ data }) => {
        const formatData = formatDataGraphql(data, "topics");

        setTopics(formatData);
      })
      .catch((e) => {
        Alert("ERROR", ERROR_API_MESSAGE);
        console.log(e);
      });
  }, []);

  useEffect(() => {
    if (topics) {
      setListFilterMenu(
        listMenu.map((item: LinkProps) => {
          if (item.value == "tin-tuc") {
            item.children = topics.map((e: any) => ({
              value: e.slug,
              label: e.title,
              href: `/tin-tuc/noi-bat?topic=${e.slug}`,
              type: "link",
            }));

            return item;
          } else {
            return item;
          }
        })
      );
    }
  }, [topics]);

  useClickAway(ref, () => {
    setShow(false);
  });

  return (
    <HeaderWrapper>
      <HeaderDesktop data={listFilterMenu} showInput={showInput} setShowInput={setShowInput} />
      <HeaderMobile data={listFilterMenu} showInput={showInput} setShowInput={setShowInput} />
    </HeaderWrapper>
  );
};

export default Header;
