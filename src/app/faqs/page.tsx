import FaqsScreen from "@/screens/faqs";
import { Suspense } from "react";

export const runtime = "edge";

export const metadata = {
  description: "HomePage",
  openGraph: {
    type: "website",
  },
};

export default async function FaqPage() {
  return (
    <div className="pt-50">
      <Suspense>
        <FaqsScreen />
      </Suspense>
    </div>
  );
}
