import productState from "./productState";
import studentState from "./studentState";

const State = {
  ...productState,
  ...studentState,
  count: 2,
  user: "Mr. X",
};

export default State;
