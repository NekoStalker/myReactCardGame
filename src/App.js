import React, {useState} from 'react';
import './App.css';
import Grid from './components/gridComp/Grid';
import imagesData from './data/data.json'
// function Busket() {
//   const [counter, setCounter] = React.useState({
//     count: 0,incCount: 0
//   });
//   return (<Counter counter={counter} onChange={setCounter} /> )
// }
// function Counter(props) {
//   let {count, incCount} = props.counter
//   function dec() {
//     props.onChange({
//       ...prevState, 
//       count: count-1,
//     });
//   }
//   function inc() {
//     props.onChange(prevState => ({
//       ...prevState,
//       count: prevState.count + 1,
//       incCount: prevState.incCount + 1
//     }));
//   }
//   return (
//     <div>
//       <p style={{ margin: "15px", paddingLeft: '10px' }}>{count}</p>
//       <button style={{ margin: "5px", width: "20px" }} onClick={dec}>-</button>
//       <button style={{ margin: "5px", width: "20px" }} onClick={inc}>+({incCount})</button>
//     </div>
//   )
// }
function App() {
  return (
    <Grid images={imagesData} />
  );
 }

export default App;
