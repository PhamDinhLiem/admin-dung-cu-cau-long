import RecruitmentScreen from "@/screens/recruiment";
import { Suspense } from "react";
export const runtime = "edge";

export const metadata = {
  description: "HomePage",
  openGraph: {
    type: "website",
  },
};

export default async function RecruitmentPage() {
  return (
    <div className="pt-50">
      <Suspense>
        <RecruitmentScreen />
      </Suspense>
    </div>
  );
}
