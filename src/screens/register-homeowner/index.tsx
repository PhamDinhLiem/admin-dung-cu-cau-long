"use client";

import FormHomeOwner from "@/plugins/tail-girl-component/form-homeowner";
import { RegisterHomeownerContentWrapper, RegisterHomeownerScreenWrapper } from "./styled";
import StoryBusinessMaster from "@/plugins/tail-girl-component/story-bussiness -chu-nha";

interface RegisterHomeownerScreenProps {}

const RegisterHomeownerScreen = () => {
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
    <RegisterHomeownerScreenWrapper>
      {/* <Banner /> */}

      <RegisterHomeownerContentWrapper className="">
        <FormHomeOwner />
        <StoryBusinessMaster />
      </RegisterHomeownerContentWrapper>
    </RegisterHomeownerScreenWrapper>
  );
};

export default RegisterHomeownerScreen;
