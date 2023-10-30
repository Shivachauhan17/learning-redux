import logo from './logo.svg';
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';
import './App.css';
import { useDispatch } from 'react-redux';
import {action} from './store/index'

function App() {
  const counter=useSelector((state)=>state.counter);
  const dispatch=useDispatch()
  // const increment=()=>{
  //   dispatch({type:'INC'})
  // }
  // const decrement=()=>{
  //   dispatch({type:'DEC'})
  // }

  // const addBY=()=>{
  //   dispatch({type:'ADD_BY',payload:10})
  // }


  const increment=()=>{
    dispatch(action.increment());
  }

  const decrement=()=>{
    dispatch(action.decrement())
  }

  const addBY=()=>{
    dispatch(action.addBY(20))
  }

  return (
    <div>
      <h1>Counter App</h1>
      <h2>{counter}</h2>

      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={addBY}>add specific</button>
    </div>
  );
}

export default App;
