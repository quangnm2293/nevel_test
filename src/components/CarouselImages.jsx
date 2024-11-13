import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const CarouselImages = () => {
  const properties = {
    prevArrow: <button style={{ display: "none" }}></button>,
    nextArrow: <button style={{ display: "none" }}></button>,
  };
  const indicators = () => <div className="indicator-slide-image"></div>;
  return (
    <div className="relative [&>div>ul]:absolute [&>div>ul]:bottom-[30px] [&>div>ul]:left-[45%] lg:[&>div>ul]:left-[20%]">
      <Slide {...properties} indicators={indicators}>
        <div className="each-slide-effect">
          <img
            src={"/image_mobile.png"}
            alt="index"
            className="object-contain w-full lg:hidden"
          />
          <img
            src={"/Background_desk.png"}
            alt="index"
            className="object-contain w-full hidden lg:block"
          />
        </div>
        <div className="each-slide-effect">
          <img
            src={"/image_mobile.png"}
            alt="index"
            className="object-contain w-full lg:hidden"
          />
          <img
            src={"/Background_desk.png"}
            alt="index"
            className="object-contain w-full hidden lg:block"
          />
        </div>
      </Slide>
    </div>
  );
};

export default CarouselImages;
