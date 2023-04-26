import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/counter-slice";

const Counter = () => {
  const dispatch = useDispatch(); //f-on which we can call, which will dispatch an action against our redux store
  const counter = useSelector((state) => state.counter.counter); //state managed by redux
  const show = useSelector((state) => state.counter.showCounter);

  const incrementHandler = () => {
    // dispatch({ type: "increment" });
    dispatch(counterActions.increment());
    //increment() is a method on the actions object, which we can call, and will create action objects for us. Therefore these methods are called action creators and they will create action objects for us where these objects already have a type property with a unique identifier per action.
  };

  const increaseHandler = () => {
    // dispatch({ type: "increase", amount: 5 }); // amount -> extra action payload
    dispatch(counterActions.increase(5)); // {type: SOME_UNIQUE_IDENTIFIER, payload: 5}
  };

  const decrementHandler = () => {
    // dispatch({ type: "decrement" });
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    // dispatch({ type: "toggle" });
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

//We allways return a brend new snapshot, a brend new state object which redux will use to replace its existing state with. The objects which we return in the reducer will not be merged with the existing state. They will overwrite the existing state.
