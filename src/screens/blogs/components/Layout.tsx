import Header from "./layouts/components/Header";
import Banner from "./layouts/components/Banner";
import Sidebar from "./layouts/components/Sidebar";
import Footer from "./layouts/components/Footer";

export default function LayoutBlog({ children }: any) {
  return (
    <div style={{ background: "white" }}>
      <div className="wrapper-box" style={{ position: "relative", width: "100%" }}>
        <Header />
        <div className="grid grid-cols-1">
          <Banner />
        </div>

        <div className="content">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:grid-cols-9 col-span-1">{children}</div>
            <div className="lg:grid-cols-3 col-span-1">
              <div className="lg:stickey relative top-8">
                <Sidebar />
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <Footer />
        </div>
      </div>
    </div>
  );
}
