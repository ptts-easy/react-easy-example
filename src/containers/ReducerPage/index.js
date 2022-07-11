import { useReducer } from "react";

import States from '../../services/Reducer/num-reducer/states';
import Actions from '../../services/Reducer/num-reducer/actions';
import Reducers from '../../services/Reducer/num-reducer/reducers';
import './index.css';

const ReducerPage = () => {

  const [colorListStates, dispatch] = useReducer(Reducers.clickReducer, States.InitColorListStates);

//  const [white, dispatch_2] = useReducer(Reducers.whiteReducer, InitWhiteStates);

  const changeColor = (newColor) => {
    dispatch(Actions.clickColorItem(newColor));
  }

  const handleComplete = (color) => {
  };

  const listItems = colorListStates.map((item) =>
    <li key={item.title} style={{color: item.title}} onClick={() => changeColor(item.title)}>
      <input
        type="checkbox"
        checked={item.check}
        onChange={() => handleComplete(item.title)}
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
        <td><h1 style={{color: "white"}}>White color is white!</h1></td>
      </tr>
      </tbody>
      </table>
    </div>
  );
}

export default ReducerPage;