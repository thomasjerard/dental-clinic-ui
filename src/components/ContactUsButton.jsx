import { NavLink } from "react-router-dom";

function MainButton({ link, theme, title, onClick }) {
  return (
    <div id="main-button" className={theme}>
      <NavLink
        to={link}
        onClick={(e) => {
          setTimeout(() => {
            if (onClick) onClick();
          }, 0); 
        }}
      >
        {title}
      </NavLink>
    </div>
  );
}

export default MainButton;

