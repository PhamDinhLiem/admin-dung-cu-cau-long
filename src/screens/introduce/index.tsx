"use client";

import Banner from "@/components/banner";
import { Container, Flex } from "@/styles/common";
import { IntroduceScreenWrapper } from "./styled";
import { Typography } from "@material-tailwind/react";

const IntroduceScreen = () => {
  // const [author, setAuthor] = useState<AuthorOutput>();

  // const [getAuthor] = useLazyQuery<AuthorOutput>(GET_AUTHOR, {
  //   fetchPolicy: "cache-first",
  // });

  // useEffect(() => {
  //   getAuthor()
  //     .then(({ data }) => {
  //       const formatData = formatDataGraphql(data, "authors");
  //       if (formatData) {
  //         setAuthor(formatData[0]);
  //       }
  //     })
  //     .catch((e) => {
  //       Alert("ERROR", ERROR_API_MESSAGE);
  //       console.log(e);
  //     });
  // }, []);

  return (
    <IntroduceScreenWrapper>
      <Banner />

      <section className="lg:px-8 py-4 lg:py-16">
        <div className="container mx-auto text-center">
          <h2 className="mb-4 text-primary">THÔNG TIN THƯƠNG HIỆU</h2>
          <p className="mb-24 sm-mb-16 font-normal !text-lg lg:mb-20 mx-auto max-w-3xl !text-gray-500">
            HomeEase - Nền tảng kết nối việc làm toàn quốc
          </p>

          <div className="grid grid-cols-1 gap-x-6 gap-y-6 lg:grid-cols-2 items-start">
            <div className="w-full h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.821223562739!2d106.75945537610255!3d10.82498948932683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752653cbaf93bb%3A0x81caa172f87b131b!2zOSDEkMaw4budbmcgU-G7kSAyNiwgUGjGsOG7m2MgTG9uZyBBLCBRdeG6rW4gOSwgSOG7kyBDaMOtIE1pbmgsIFZpZXRuYW0!5e0!3m2!1sen!2sus!4v1725467130632!5m2!1sen!2sus"
                className="w-full"
                height={450}
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="flex flex-col gap-4 text-left my-auto">
              <p className="body-1">
                Nhiều thương hiệu cho rằng việc để lộ thông tin của người đứng đầu doanh nghiệp sẽ dẫn đến những phiền
                toái không đáng có, nhưng tại HomeEase thì không như vậy. Chúng tôi công khai và minh bạch mọi thông
                tin, thậm chí là thông tin của CEO để có thể tiếp nhận những phản hồi từ khách hàng một cách nhanh nhất.
              </p>

              <ul>
                <li>
                  <b>Hotline:</b> 09.067.98765
                </li>
                <li>
                  <b>Địa chỉ</b>: Số 9, Đường Số 26, Phường Phước Long A, Tp Thủ Đức, Ho Chi Minh City
                </li>
                <li>
                  <b>Email</b>: dp.homeease@gmail.com
                </li>
                <li>
                  <b>CEO – Hồ Thanh Phúc</b>
                </li>
                <li>
                  <Flex gap={5} align="center">
                    <Typography
                      color="white"
                      as="a"
                      target="_black"
                      href="https://www.facebook.com/share/rGJfGd3b66nDv7wU/?mibextid=LQQJ4d"
                      className="opacity-93 transition-opacity hover:opacity-100"
                    >
                      <svg className="h-5 w-5" fill="#37abf4" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          fill-rule="evenodd"
                          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </Typography>
                    <a target="_blank" href="https://www.facebook.com/share/rGJfGd3b66nDv7wU/?mibextid=LQQJ4d">
                      <b>Fanpage:</b> HomeEase - Nền tảng kết nối việc làm toàn quốc.
                    </a>
                  </Flex>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* <Flex justify="center">
          <AuthorWrapper>
            <img loading="lazy" src={`${process.env.NEXT_PUBLIC_API_ENDPOINT}${author?.avatar.data.attributes.url}`} />

            <Block title="Về HomeEase" />
            <div dangerouslySetInnerHTML={{ __html: author?.self_description as string }}></div>

        
          </AuthorWrapper>
        </Flex> */}
    </IntroduceScreenWrapper>
  );
};

export default IntroduceScreen;
