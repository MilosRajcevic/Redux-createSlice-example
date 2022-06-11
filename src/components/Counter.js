import { useSelector, useDispatch } from "react-redux";

import classes from "./Counter.module.css";
import { counterActions } from "../store/index.js";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(10));
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      {!show && (
        <div>
          <button onClick={incrementHandler}>increment</button>
          <button onClick={increaseHandler}>Increase by 10</button>
          <button onClick={decrementHandler}>decrement</button>
        </div>
      )}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
