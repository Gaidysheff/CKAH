import "./Menu.scss";

import React from "react";

export type Props = {
  active?: boolean;
  setActive?: (active: boolean) => void;
  onClick?: (event: MouseEvent) => void;
};

export interface NavMenu {
  value: string;
  href: string;
}

const Menu = (
  props: Props,
  active: boolean,
  setActive: (active: boolean) => void
) => {
  const items: NavMenu[] = [
    {
      value: "Главная",
      href: "/go_to_somewhere",
    },
    {
      value: "Тарифы",
      href: "/go_to_somewhere",
    },
    {
      value: "FAQ",
      href: "/go_to_somewhere",
    },
  ];

  return (
    <div
      className={active ? "menu active" : "menu"}
      onClick={() => setActive(false)}
    >
      <div className="blur"></div>
      <div className="menu__content" onClick={(e) => e.stopPropagation()}>
        <div className="menu__logo">LOGO</div>
        <ul className="menu__links">
          {items.map((item: NavMenu) => (
            <li className="menu__link">
              <a href={item.href}>{item.value}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
