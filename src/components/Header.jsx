import home from "../assets/icons/Background.svg";
import { useState } from "react";
import { headerTabs } from "../helper/categoryData";
import WhiteLogo from "../assets/icons/White_logo.svg?react";

const Header = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <header className="flex justify-between p-4 lg:p-0 bg-[url('public/image_mobile.png')] lg:bg-[url('public/Background_desk.png')] h-[420px] lg:h-[576px] bg-cover bg-no-repeat">
      <div className="h-[90px] bg-gradient-to-t from-black/50 to-black w-full hidden lg:flex items-center">
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
      <WhiteLogo className="w-[53px] h-[31px] lg:hidden fill-white" />
      <img src={home} alt="home" className="w-12 h-[42px] lg:hidden" />
    </header>
  );
};

export default Header;
