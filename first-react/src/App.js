import { useState } from 'react';
import './App.css';

// react에서 제공해주는 함수를 react hook이라 부른다.
// ui에 보여주는 값은 state로 만들어야 한다.

function App() {
  let counter = 0; //일반변수여서 안바뀐다.
  const [counter2,setCounter2] = useState(0);
  const increase = () =>{
    counter = counter + 1;
    setCounter2(counter2 + 1);
    console.log("counter는", counter, "counter2 state는", counter2);
  };

  //1. 유저가 버튼을 클릭한다.
  //2. counter+1해서 1이된다.
  //3. setState함수호출
  //4. console.log실행됨
  //5. 변수값은 1로 보이고 state값은 아직 안변했기 때문에 그전에 값이 보인다.
  //6. 함수끝
  // app다시 re render
  // let counter = 0을 거치면서 counter 값은 다시 0으로 초기화가 된다
  // state값은 update 되면서 다시 render를 한다.
  return<div>
    <div>{counter}</div>
    <div>state:{counter2}</div>
    <button onClick={increase}>클릭!!</button>
  </div>
  
  

  
}

export default App;
