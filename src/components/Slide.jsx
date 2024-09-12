import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Category from "./Category";
import {
  categoryInfo,
  categoryPoker,
  games,
  gamesSlide2,
} from "../helper/categoryData";

const SlideComponent = () => {
  const properties = {
    prevArrow: <button style={{ display: "none" }}></button>,
    nextArrow: <button style={{ display: "none" }}></button>,
  };
  const indicators = () => <div className="indicator-slide"></div>;
  return (
    <div className="mt-[47px] lg:hidden">
      <p className="font-semibold px-[25px] mb-[30px]">HOTTEST CATEGORY</p>

      <Slide {...properties} indicators={indicators}>
        <div className="each-slide-effect">
          <Category games={games} categoryInfo={categoryInfo} />
        </div>
        <div className="each-slide-effect">
          <Category games={gamesSlide2} categoryInfo={categoryPoker} />
        </div>
      </Slide>
    </div>
  );
};

export default SlideComponent;
