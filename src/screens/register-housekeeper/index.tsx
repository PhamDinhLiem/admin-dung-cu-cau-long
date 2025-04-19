"use client";

import FormHouseKeeper from "@/plugins/tail-girl-component/form-housekeeper";
import StoryBusiness from "@/plugins/tail-girl-component/story-bussiness-giup-viec";
import { RegisterHouseKeeperContentWrapper, RegisterHouseKeeperScreenWrapper } from "./styled";
import StoryBusinessHousekeeper from "@/plugins/tail-girl-component/story-bussiness-giup-viec";

interface RegisterHouseKeeperScreenProps {}

const RegisterHouseKeeperScreen = () => {
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
    <RegisterHouseKeeperScreenWrapper>
      {/* <Banner /> */}

      <RegisterHouseKeeperContentWrapper className="">
        <FormHouseKeeper />
        <StoryBusinessHousekeeper />
      </RegisterHouseKeeperContentWrapper>
    </RegisterHouseKeeperScreenWrapper>
  );
};

export default RegisterHouseKeeperScreen;
