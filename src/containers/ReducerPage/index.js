import { useState, useReducer } from "react";

import InitColorListStates from '../../services/Reducer/color-reducer/states';
import Actions from '../../services/Reducer/color-reducer/actions';
import Reducers from '../../services/Reducer/color-reducer/reducers';
import './index.css';

const ReducerPage = () => {

  const [colorListStates, dispatch] = useReducer(Reducers.clickReducer, InitColorListStates);

  const changeColor = (newColor) => {
    dispatch(Actions.clickColorItem(newColor));
  }

  const listItems = colorListStates.map((item) =>
    <li key={item.id} style={{color: item.title}} onClick={() => changeColor(item.title)}>
      <input
        type="checkbox"
        checked={item.check}
      />
      {item.title}
    </li>
  );

  return (
    <div style={{border: "5px solid white"}} className="reducer">
      This is ReducerPage.
      <table>
      <tbody>
      <tr>
        <td><ul>{listItems}</ul></td>
        <td><h1 style={{color: "white"}}>White color is on!</h1></td>
      </tr>
      </tbody>
      </table>
    </div>
  );
}

export default ReducerPage;