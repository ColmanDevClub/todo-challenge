import moonIcon from "../../assets/images/icon-moon.svg";
import sunIcon from "../../assets/images/icon-sun.svg";
import SearchInput from "../CreateTodo";
import "./Header.css";
import "../../App.css";
const Header = ({ addTodo, mode, onClickDarkModIcon, onClickLightModIcon }) => {
  return (
    <>
      <header>
        <section className="header-content">
          <span>TODO</span>
          {mode !== "dark" ? (
            <img onClick={onClickDarkModIcon} src={moonIcon}></img>
          ) : (
            <img onClick={onClickLightModIcon} src={sunIcon}></img>
          )}
        </section>
        <SearchInput mode={mode} addTodo={addTodo} />
      </header>
    </>
  );
};
export default Header;
