import "./Header.scss";

import Menu from "./menu/Menu";
import React from "react";

type Props = {};

const Header = (props: Props) => {
  const [menuActive, setMenuActive] = React.useState(false);
  const handleToggle = () => {
    setMenuActive((prevState?: boolean) => !prevState);
  };
  return (
    <>
      <nav className="header">
        <div className="header__burger" onClick={handleToggle}>
          <span />
        </div>
      </nav>
      <Menu active={menuActive} setActive={setMenuActive} />
    </>
  );
};

export default Header;
