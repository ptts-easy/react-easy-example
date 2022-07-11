import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../../services/Redux/slice-redux/counterSlice'

const ReduxPageContent = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div style={{border: "5px solid green"}}>
      This is ReduxPage.
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default ReduxPageContent;