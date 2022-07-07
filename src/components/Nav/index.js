import { Outlet, Link } from "react-router-dom";

import './index.css';

const Nav = () => {
  const menu = [
    ["", "Layout"],
    ["state", "State"],
    ["prop", "Prop"],
    ["ref", "Ref"],
    ["context", "Context"],
    ["reducer", "Reducer"],
    ["online", "Online"],
    ["redux", "Redux"],
    ["sass", "Sass"],
    ["bootstrap", "Bootstrap"],
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