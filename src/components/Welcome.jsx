import { useDispatch, useSelector } from "react-redux";
import { action } from "../store/store";

export default () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div>
      <h2 style={{textTransform: 'capitalize'}}>Welcome {state.user}</h2>
      <input
        type="text"
        name="user"
        placeholder="Enter Your Name"
        onChange={(e) => dispatch(action.updatedName(e.target.value))}
        id=""
      />
    </div>
  );
};
