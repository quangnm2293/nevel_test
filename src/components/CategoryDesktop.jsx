import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import Category from "./Category";
import {
  categoryInfo,
  categoryPoker,
  games,
  gamesSlide2,
} from "../helper/categoryData";

const CategoryDesktop = () => {
  return (
    <div className="hidden lg:block lg:mt-[100px] lg:w-full mb-[76px]">
      <div className="px-[25px] lg:px-0 flex items-center justify-between mb-10 lg:mb-[30px]">
        <p className="font-semibold uppercase lg:capitalize lg:text-[28px]">
          Hottest Category
        </p>
        <div className="hidden lg:flex items-center gap-2 mr-4">
          <ChevronLeftIcon
            aria-hidden="true"
            className="-mr-1 -mt-[2px] h-5 w-5 text-gray-400 opacity-40"
          />
          <ChevronRightIcon
            aria-hidden="true"
            className="-mr-1 -mt-[2px] h-5 w-5 text-gray-400"
          />
        </div>
      </div>
      <div className="flex gap-5">
        <Category games={games} categoryInfo={categoryInfo} />

        <Category games={gamesSlide2} categoryInfo={categoryPoker} />
      </div>
    </div>
  );
};

export default CategoryDesktop;
