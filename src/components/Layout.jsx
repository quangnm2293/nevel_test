import PropTypes from "prop-types";
import SideBar from "./SideBar";

const Layout = ({ children, isSideBar = false }) => {
  return (
    <div className="max-w-[1240px] mx-auto">
      {isSideBar ? (
        <div className="flex gap-10">
          <SideBar />
          <div className="flex-1 overflow-hidden">{children}</div>
        </div>
      ) : (
        children
      )}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  isSideBar: PropTypes.bool,
};

export default Layout;
