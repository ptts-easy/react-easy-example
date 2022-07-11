import { Link, Outlet } from "react-router-dom";

import './index.css';

export const Component1 = () => {
  return (
    <div style={{border: "5px solid green"}}>
      This is Component1.
    </div>
  );
}

export const Component2 = () => {
  return (
    <div style={{border: "5px solid yellow"}}>
      This is Component2.
    </div>
  );
}

export const Component3 = () => {
  return (
    <div style={{border: "5px solid blue"}}>
      This is Component3.
    </div>
  );
}

export const Component4 = () => {
  return (
    <div style={{border: "5px solid red"}}>
      This is Component4.
    </div>
  );
}

export const Component5 = () => {
  return (
    <div style={{border: "5px solid green"}}>
      This is Component5.
    </div>
  );
}

export const ErrorComponent = () => {
  return (
    <div style={{border: "5px solid red"}}>
      This is ErrorComponent.
    </div>
  );
}

const RoutePage = () => {

  return (
    <div style={{border: "5px solid white"}} className="route">
      This is RoutePage.
      <ul>
        <li>
          <Link to="">Component1</Link>
        </li>
        <li>
          <Link to="component2">Component2</Link>
        </li>
        <li>
          <Link to="component3">Component3</Link>
        </li>
        <li>
          <Link to="component4">Component4</Link>
        </li>
        <li>
          <Link to="component5">Component5</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

export default RoutePage;