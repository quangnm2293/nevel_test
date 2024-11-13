import Dropdown from "./DropDown";
import treePng from "../assets/images/Tree.png";
import banner1 from "../assets/images/banner1.png";
import banner2 from "../assets/images/banner2.png";
import game1 from "../assets/images/game_banner1.png";
import game2 from "../assets/images/game_banner2.png";
import smallTreePng from "../assets/images/tree_small.png";
import PropTypes from "prop-types";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import clsx from "clsx";

const GameInfo = ({ label, value }) => (
  <div className="flex flex-col">
    <p className="text-[14px] text-white">{value}</p>
    <p className="text-xs text-[#E1C781]">{label}</p>
  </div>
);

GameInfo.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

const HotGame = () => {
  const [active, setActive] = useState(0);
  return (
    <div className="lg:mt-[100px] lg:w-full">
      <div className="px-[25px] lg:px-0 flex items-center justify-between mb-10 lg:mb-[30px]">
        <p className="font-semibold uppercase lg:capitalize lg:text-[28px]">
          Hot Game
        </p>
        <div className="hidden lg:flex items-center gap-2 mr-4">
          <ChevronLeftIcon
            aria-hidden="true"
            className={clsx(
              "-mr-1 -mt-[2px] h-5 w-5 text-gray-400 cursor-pointer",
              active === 0 && "opacity-40"
            )}
            onClick={() => setActive(0)}
          />
          <ChevronRightIcon
            aria-hidden="true"
            className={clsx(
              "-mr-1 -mt-[2px] h-5 w-5 text-gray-400 cursor-pointer",
              active === 1 && "opacity-40"
            )}
            onClick={() => setActive(1)}
          />
        </div>
        <Dropdown />
      </div>
      <div className="lg:hidden h-[350px] bg-[#C48F03] mx-[41px] rounded-lg overflow-hidden">
        <img
          src={treePng}
          alt="Tree of Fortune"
          className="object-cover w-full"
        />
        <div className="p-5">
          <div className="flex gap-5">
            <img
              src={smallTreePng}
              alt="Small Tree"
              className="w-15 h-15 object-fit"
            />
            <div className="flex flex-col">
              <h1 className="text-[16px] text-white">Tree Of Fortune</h1>
              <p className="text-xs text-[#E1C781]">
                Legend has it that a farmer was granted a seed from a deity.
              </p>
            </div>
          </div>
          <div className="flex mt-7 justify-between">
            <GameInfo label="Volatility" value="MEDIUM" />
            <GameInfo label="RTP" value="95.01%" />
            <GameInfo label="Maximum Win" value="x5000" />
          </div>
        </div>
      </div>
      {active === 0 && (
        <div className="hidden animate-slideRight2s lg:flex gap-5">
          <div className="flex-1">
            <img
              src={banner1}
              alt="Banner 1"
              className="object-cover mb-[30px] h-[225px]"
            />
            <div className="flex gap-5 items-center">
              <img src={game1} alt="Game 1" className="object-cover" />
              <div className="flex-1 flex flex-col gap-2">
                <p className="text-[19px] font-semibold">Mahjong Ways</p>
                <p className="line-clamp-2 text-[14px] opacity-70">
                  4TECH™ has just launched their very first Mahjong inspired
                  slot machine game...
                </p>
              </div>
              <button className="border w-[75px] h-7 rounded">View</button>
            </div>
          </div>
          <div className="flex-1">
            <img
              src={banner2}
              alt="Banner 2"
              className="h-[225px] mb-[30px] object-cover"
            />
            <div className="flex gap-5 items-center">
              <img src={game2} alt="Game 2" className="object-cover" />
              <div className="flex-1 flex flex-col gap-2">
                <p className="text-[19px] font-semibold">Wild Bandito</p>
                <p className="line-clamp-2 text-[14px] opacity-70">
                  Águila which means ‘The Eagle’ is a three- person Mexican
                  bandit team that is activ…
                </p>
              </div>
              <button className="border w-[75px] h-7 rounded">View</button>
            </div>
          </div>
        </div>
      )}
      {active === 1 && (
        <div className="hidden animate-slideLeft2s lg:flex gap-5">
          <div className="flex-1">
            <img
              src={banner1}
              alt="Banner 1"
              className="object-cover mb-[30px] h-[225px]"
            />
            <div className="flex gap-5 items-center">
              <img src={game1} alt="Game 1" className="object-cover" />
              <div className="flex-1 flex flex-col gap-2">
                <p className="text-[19px] font-semibold">Mahjong Ways</p>
                <p className="line-clamp-2 text-[14px] opacity-70">
                  4TECH™ has just launched their very first Mahjong inspired
                  slot machine game...
                </p>
              </div>
              <button className="border w-[75px] h-7 rounded">View</button>
            </div>
          </div>
          <div className="flex-1">
            <img
              src={banner2}
              alt="Banner 2"
              className="h-[225px] mb-[30px] object-cover"
            />
            <div className="flex gap-5 items-center">
              <img src={game2} alt="Game 2" className="object-cover" />
              <div className="flex-1 flex flex-col gap-2">
                <p className="text-[19px] font-semibold">Wild Bandito</p>
                <p className="line-clamp-2 text-[14px] opacity-70">
                  Águila which means ‘The Eagle’ is a three- person Mexican
                  bandit team that is activ…
                </p>
              </div>
              <button className="border w-[75px] h-7 rounded">View</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HotGame;
