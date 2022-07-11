import { useReducer } from "react";

import States from '../../services/Reducer/num-reducer/states';
import Actions from '../../services/Reducer/num-reducer/actions';
import Reducers from '../../services/Reducer/num-reducer/reducers';
import './index.css';

const ReducerPage = () => {

  const [numListStates, dispatch] = useReducer(Reducers.clickNumReducer, States.InitNumListStates);

  const clickNum = (curNum) => {
    dispatch(Actions.clickNumList(curNum.toString()));
  }

  const handleComplete = (curNum) => {
  };

  const listItems = numListStates.map((item) =>
    <li key={item.weight} style={{backgroundColor: item.check==true ? "#555" : "#f1f1f1"}} onClick={() => clickNum(item.weight)}>
      <input
        type="checkbox"
        checked={item.check}
        onChange={() => handleComplete(item.weight)}
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
      </tr>
      </tbody>
      </table>
    </div>
  );

/*
  const [todos, dispatch] = useReducer(Reducers.reducer, States.initialTodos);

  const handleComplete = (todo) => {
    dispatch({ type: "COMPLETE", id: todo.id });
  };

  return (
    <div style={{border: "5px solid white"}} className="reducer">
      {
        todos.map((todo) => (
        <div key={todo.id}>
          <label>
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={() => handleComplete(todo)}
            />
            {todo.title}
          </label>
        </div>
        ))
      }
    </div>
  );
*/  
}

export default ReducerPage;