import { createStore } from "redux";

const IncrementMe = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy,
});

const DecrementMe = ({ decrementBy = 1 } = {}) => ({
  type: "DECREMENT",
  decrementBy,
});

const ResetMe = () => ({ type: "RESET" });

const SetMe = ({count=0}={}) => ({type:'SET',count});

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      const incrementBy =
        typeof action.incrementBy === "number" ? action.incrementBy : 1;
      return {
        count: state.count + incrementBy,
      };

    case "DECREMENT":
      const decrementBy =
        typeof action.decrementBy === "number" ? action.decrementBy : 1;
      return {
        count: state.count - decrementBy,
      };
    case "RESET":
      return {
        count: 0,
      };
    case "SET":
      return {
        count: action.count,
      };
    default:
      return state;
  }
});

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(IncrementMe());
store.dispatch(IncrementMe({ incrementBy: 6 }));

store.dispatch(ResetMe());
store.dispatch(SetMe({count:500}));

store.dispatch(DecrementMe());
store.dispatch(DecrementMe({ decrementBy: 77 }));
