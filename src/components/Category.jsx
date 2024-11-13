import GameImage from "./GameImage";
import CategoryMusic from "./CategoryMusic";
import PropTypes from "prop-types";

const Category = ({ games, categoryInfo }) => {
  return (
    <div className="h-[291px] bg-black/5 rounded-[22px] overflow-hidden p-4 flex gap-6">
      <div className="flex-1">
        <CategoryMusic {...categoryInfo} />
        <div className="flex justify-between">
          <GameImage game={games[1]} />
          <GameImage game={games[0]} />
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-between">
        <div className="flex justify-between mb-4">
          <GameImage game={games[4]} />
          <GameImage game={games[3]} />
        </div>
        <div className="rounded-2xl overflow-hidden">
          <GameImage game={games[2]} className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

Category.propTypes = {
  games: PropTypes.arrayOf(PropTypes.object).isRequired,
  categoryInfo: PropTypes.object.isRequired,
};

export default Category;
