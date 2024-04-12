import "./style.css";
import checkIcon from "../../assets/images/icon-check.svg";

const Checkbox = ({ onClick, className, mode }) => {
  return (
    <>
      <span className={className} onClick={onClick}>
        <img className={`check-icon ${mode} `} src={checkIcon} id="checkIcon" />
      </span>
    </>
  );
};

export default Checkbox;
