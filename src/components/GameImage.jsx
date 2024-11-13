import PropTypes from "prop-types";

const GameImage = ({ game, className = "" }) => (
  <img src={game.src} alt={game.alt} className={className} />
);

GameImage.propTypes = {
  game: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
  className: PropTypes.string,
};

export default GameImage;
