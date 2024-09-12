import CategoryDesktop from "./components/CategoryDesktop";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HotGame from "./components/HotGame";
import Layout from "./components/Layout";
import LoadMore from "./components/LoadMore";
import SlideComponent from "./components/Slide";
import Tabs from "./components/Tabs";
import { useState, useEffect } from "react";

export default function App() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="font-pingFang">
      <Header />
      <Layout isSideBar={isDesktop}>
        <Tabs />
        <HotGame />
        <SlideComponent />
        <CategoryDesktop />
        <LoadMore />
      </Layout>
      <Footer />
    </div>
  );
}
