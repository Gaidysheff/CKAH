import GlobalSvgSelector from "../../assets/GlobalSvgSelector";
import { Link } from "react-router-dom";
import style from "./Header.module.scss";

// import avatar from "../../assets/images/navbar/user_avatar.svg";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className={style.header}>
      <div className={style.header__wrapper}>
        <div className={style.header__logo}>
          <GlobalSvgSelector id="logo" />
        </div>
        <nav className={style.header__menu}>
          <Link to="/">Главная</Link>
          <Link to="/tariffs">Тарифы</Link>
          <Link to="/faq">FAQ</Link>
        </nav>
        <div className={style.header__info}></div>
        <div className={style.header__auth}>
          <div className={style.header__user}>
            <div className={style.header__name}>Алексей А.</div>
            <div className={style.header__out}>Выйти</div>
          </div>
          {/* <img
            className={style.header__avatar}
            src={avatar}
            alt="User's avatar"
          /> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
