import { useState } from "react";
const App = () => {
  const [count, setCount] = useState(0);
  const onClickAdd =()=>{
    setCount(count+1);
  };
  return(

    <div className="">
          <div>{count}</div>
          <button onClick = {onClickAdd}>+</button>
    </div>

  );
};
export default App;