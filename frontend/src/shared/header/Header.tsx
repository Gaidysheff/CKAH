import HeaderSvgSelector from "./HeaderSvgSelector";
import { Link } from "react-router-dom";
import avatar from "../../assets/images/navbar/user_avatar.png";
import style from "./Header.module.scss";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className={style.header}>
      <div className={style.header__wrapper}>
        <div className={style.header__logo}>
          <HeaderSvgSelector id="logo" />
        </div>
        <nav className={style.header__menu}>
          <Link className={style.header__menu_item} to="/">
            Главная
          </Link>
          <Link className={style.header__menu_item} to="/tariffs">
            Тарифы
          </Link>
          <Link className={style.header__menu_item} to="/faq">
            FAQ
          </Link>
        </nav>
        <div className={style.header__infobox}>
          <div className={style.header__infobox_items}>
            <div className={style.header__infobox_item}>
              Использовано компаний{" "}
            </div>
            <div className={style.header__infobox_item}>Лимит по компаниям</div>
          </div>
          <div className={style.header__infobox_data}>
            <div className={style.header__infobox_figure}>34</div>
            <div className={style.header__infobox_figure}>100</div>
          </div>
        </div>
        <div className={style.header__auth}>
          <div className={style.header__user}>
            <div className={style.header__name}>Алексей А.</div>
            <Link className={style.header__out} to="/">
              Выйти
            </Link>
          </div>
          <img
            className={style.header__avatar}
            src={avatar}
            alt="User's avatar"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
