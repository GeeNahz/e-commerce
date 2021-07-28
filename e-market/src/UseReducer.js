import { useReducer } from 'react';

const initialState = {count:0};
const reducer = (state, action) => {
  switch(action.type) {
    case 'increment':
      return {count:state.count + 1}

    case 'decrement':
      return {count:state.count - 1}
  }
};

const UseReducer = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="usereducer">
      <h2>Count : {state.count}</h2>
      <button onClick={() => dispatch({ type:'increment' })} className="primary">Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })} className="primary">Decrement</button>

    </div>
  );
}
 
export default UseReducer;