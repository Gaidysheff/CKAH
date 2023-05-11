import "./Header.scss";

import HeaderSvgSelector from "./HeaderSvgSelector";
import { Link } from "react-router-dom";
import avatar from "../../assets/images/navbar/user_avatar.png";

type Props = {};

const HeaderOld = (props: Props) => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header__logo">
          <HeaderSvgSelector id="logo" />
        </div>
        <nav className="header__menu">
          <Link className="header__menu_item" to="/">
            Главная
          </Link>
          <Link className="header__menu_item" to="/tariffs">
            Тарифы
          </Link>
          <Link className="header__menu_item" to="/faq">
            FAQ
          </Link>
        </nav>
        <div className="header__infobox">
          <div className="header__infobox_items">
            <div className="header__infobox_item">Использовано компаний</div>
            <div className="header__infobox_item">Лимит по компаниям</div>
          </div>
          <div className="header__infobox_data">
            <div className="header__infobox_figure">34</div>
            <div className="header__infobox_figure">100</div>
          </div>
        </div>
        <div className="header__auth">
          <div className="header__user">
            <div className="header__name">Алексей А.</div>
            <Link className="header__out" to="/">
              Выйти
            </Link>
          </div>
          <img className="header__avatar" src={avatar} alt="User's avatar" />
        </div>
        <div className="header__burger">
          <span />
        </div>
      </div>
    </header>
  );
};

export default HeaderOld;
