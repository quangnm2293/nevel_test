import home from "../assets/icons/Background.svg";
import { useState } from "react";
import { headerTabs } from "../helper/categoryData";
import WhiteLogo from "../assets/icons/White_logo.svg?react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import CarouselImages from "./CarouselImages";
const Header = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className=" w-full lg:p-0 relative">
      <CarouselImages />
      <div className="h-[90px] bg-gradient-to-t from-black/50 to-black w-full hidden lg:flex items-center absolute top-0 left-0">
        <div className="max-w-[1240px] mx-auto w-full flex items-center justify-between h-full">
          <WhiteLogo className="w-[108px] h-[64px] hidden lg:block fill-white" />

          <div className="flex gap-4 h-full">
            {headerTabs.map((item, index) => (
              <div
                key={item}
                className={`h-full flex items-center cursor-pointer ${
                  activeTab === index ? "text-active" : ""
                }`}
                onClick={() => setActiveTab(index)}
              >
                <p
                  className={`text-[15px] font-normal uppercase text-white/50`}
                >
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="bg-white w-2/3 h-full p-4 animate-slideLeft1s">
            <div className="relative flex flex-col">
              <div
                onClick={toggleMenu}
                className="h-8 flex items-center justify-center w-8 absolute right-[-60px] top-0 bg-white onClick={toggleMenu} rounded-full"
              >
                <XMarkIcon className="h-6 w-6" />
              </div>
              {headerTabs.map((item, index) => (
                <div
                  key={item}
                  className={`p-2 cursor-pointer ${
                    activeTab === index ? "text-active" : ""
                  }`}
                  onClick={() => {
                    setActiveTab(index);
                    toggleMenu();
                  }}
                >
                  <p className="text-lg">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <WhiteLogo className="w-[53px] h-[31px] lg:hidden fill-white absolute left-4 top-4" />
      <img
        src={home}
        alt="home"
        className="w-12 h-[42px] lg:hidden absolute right-2 top-2"
        onClick={toggleMenu}
      />
    </header>
  );
};

export default Header;
