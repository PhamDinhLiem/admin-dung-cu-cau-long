import AppWrapper from "@/containers/app-wrapper";
import { ensureStartsWith } from "@/utils";
import { ReactNode } from "react";
import StyledComponentsRegistry from "../../lib/registry";
import "../../src/styles/global.css";

const { TWITTER_CREATOR, TWITTER_SITE, SITE_NAME } = process.env;
const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : "http://localhost:3000";
const twitterCreator = TWITTER_CREATOR ? ensureStartsWith(TWITTER_CREATOR, "@") : undefined;
const twitterSite = TWITTER_SITE ? ensureStartsWith(TWITTER_SITE, "https://") : undefined;

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: SITE_NAME!,
    template: `%s | ${SITE_NAME}`,
  },
  robots: {
    follow: true,
    index: true,
  },
  ...(twitterCreator &&
    twitterSite && {
      twitter: {
        card: "summary_large_image",
        creator: twitterCreator,
        site: twitterSite,
      },
    }),
};

export default async function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      data-wf-domain="timeframe-app.webflow.io"
      data-wf-page="5fde6b6899797c06e1f8f61c"
      data-wf-site="5c6648378238e311a00c7e61"
      className="w-mod-js w-mod-ix wf-proximanova-n9-active wf-proximanova-n7-active wf-proximanova-i7-active wf-proximanova-n8-active wf-proximanova-n1-active wf-proximanova-n6-active wf-proximanova-n4-active wf-proximanova-i4-active wf-proximanova-n5-active wf-halyarddisplay-n1-active wf-halyarddisplay-n2-active wf-halyarddisplay-n3-active wf-halyarddisplay-n4-active wf-halyarddisplay-n5-active wf-halyarddisplay-n6-active wf-halyarddisplay-n7-active wf-halyarddisplay-n9-active wf-active mdl-js"
    >
      <StyledComponentsRegistry>
        <body
          data-w-id="5bca679bbae718229c49a9d1"
          className="body-5"
          style={{ willChange: "background", backgroundColor: "rgb(31, 31, 31)" }} // Chỉnh sửa style ở đây
        >
          <AppWrapper>{children}</AppWrapper>
        </body>
      </StyledComponentsRegistry>
    </html>
  );
}
