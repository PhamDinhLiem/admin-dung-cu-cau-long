"use client";
import Banner from "@/components/banner";
import { Container } from "@/styles/common";
import { RecruitmentContentWrapper, RecruitmentScreenWrapper } from "./styled";
import RecruitContent from "@/components/recuirt_content";

const RecruitmentScreen = () => {
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
    <RecruitmentScreenWrapper>
      <Banner />
      <Container>
        {/* <h1 className="text-center mt-60 mb-40 sm-mt-40">Câu hỏi thường gặp</h1> */}
        {/* <LineDate date="" /> */}

        <RecruitmentContentWrapper className="mt-28 sm-mt-30">
          <div className="text-3xl headline font-semibold mb_change">Tuyển dụng</div>
          <hr className="mb-20 font-semibold"></hr>
          <RecruitContent />
        </RecruitmentContentWrapper>
      </Container>
    </RecruitmentScreenWrapper>
  );
};

export default RecruitmentScreen;
