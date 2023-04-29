import style from "./Header.module.scss";

type Props = {};

const Header = (props: Props) => {
  return <header className={style.header}>Hello from Header</header>;
};

export default Header;
