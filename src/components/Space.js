import { style } from "@mui/system";
import { NavLink } from "react-router-dom";

const Space = ({
  id,
  userId,
  title,
  description,
  backgroundColor,
  color,
  created,
}) => {
  const spaceStyle = {
    color: `${color}`,
    backgroundColor: `${backgroundColor}`,
  };

  return (
    <div>
      <div style={spaceStyle}>
        <h3>{title}</h3>
        <h3>description</h3>
        <p>{description}</p>
        <NavLink to={`/spaces/${id}`}>
          <button>visit space</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Space;
