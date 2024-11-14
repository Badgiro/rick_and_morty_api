import style from "./style.module.css";

const PageLogo = ({ logo }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <img src={logo} alt="logo" />
    </div>
  );
};

export default PageLogo;
