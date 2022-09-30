import { Outlet, Link } from "react-router-dom";

import './index.css';

const Nav = () => {
  const menu = [
    ["bind", "Bind"],
    ["jsx", "JSX"],
    ["ref", "Ref"],
    ["layout", "Layout"],
    ["route", "Route"],
    ["state", "State"],
    ["prop", "Prop/Hook/Lifecycle"],
    ["contain", "Contain"],
    ["context", "Context"],
    ["reducer", "Reducer"],
    ["redux", "Redux"],
    ["sass", "Sass"],
    ["bootstrap", "Bootstrap"],
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
