import PropTypes from "prop-types";

const CategoryMusic = ({ icon, title, description, bgColor }) => (
  <div
    className={`h-[168px] ${bgColor} rounded-[16px] p-4 flex flex-col gap-2 mb-4`}
  >
    <img src={icon} alt="SVG Image" className="w-6 h-6" />
    <p className="text-[17px] text-white">{title}</p>
    <p className="text-[11px] text-white/60">{description}</p>
  </div>
);

CategoryMusic.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired, // Add this line
};

export default CategoryMusic;
