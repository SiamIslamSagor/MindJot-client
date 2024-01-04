import PropTypes from "prop-types";
const Title = ({ children }) => {
  return (
    <div>
      <h2 className="text-3xl py-10 font-bold">{children}</h2>
    </div>
  );
};

Title.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Title;
