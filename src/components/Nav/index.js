import { Outlet, Link } from "react-router-dom";

import './index.css';

const Nav = () => {
  const menu = [
    ["", "Layout"],
    ["route", "Route"],
    ["state", "State"],
    ["prop", "Prop"],
    ["contain", "Contain"],
    ["ref", "Ref"],
    ["context", "Context"],
    ["reducer", "Reducer"],
    ["redux", "Redux"],
    ["bootstrap", "Bootstrap"],
    ["sass", "Sass"],
    ["online", "Online"],
    ["auth", "Auth"]
  ];

  const listItems = menu.map((item) =>
    <li key={item[1]}><Link to={item[0]}>{item[1]}</Link></li>
  );

  return (
    <div>
      <nav>
        <ul>
          {listItems}
        </ul>
      </nav>

      <Outlet />
    </div>
  )
};

export default Nav;
