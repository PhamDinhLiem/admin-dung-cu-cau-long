"use client";

import AboutInfo from "@/plugins/tail-girl-component/about-info";
import AboutStory from "@/plugins/tail-girl-component/about-story";
import { AboutScreenWrapper } from "./styled";

interface ConnectScreenProps {}

const AboutScreen = () => {
  // const [qas, setQAs] = useState<QAsOutput[]>();

  // const [getQAs] = useLazyQuery<QAsOutput>(GET_QAS, {
  //   fetchPolicy: "cache-first",
  // });

  // useEffect(() => {
  //   getQAs()
  //     .then(({ data }) => {
  //       const formatData = formatDataGraphql(data, "qas");
  //       if (formatData) {
  //         setQAs(formatData);
  //       }
  //     })
  //     .catch((e) => {
  //       Alert("ERROR", ERROR_API_MESSAGE);
  //       console.log(e);
  //     });
  // }, []);

  // const data: DataExpand[] | undefined = useMemo(() => {
  //   return qas?.map((item) => ({
  //     title: item.question,
  //     children: item.answer,
  //   }));
  // }, [qas]);

  return (
    <AboutScreenWrapper>
      <AboutStory />
      <AboutInfo />
    </AboutScreenWrapper>
  );
};

export default AboutScreen;
