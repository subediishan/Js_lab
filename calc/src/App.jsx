import { useState } from "react"
import Container from './components/container'
import Display from "./components/display"
import Map from "./components/map"

function App() {
  const [count, setCount] = useState(0)
  const [displayValue,setDisplayValue] = useState("");
  const calculatorElements =["c","1","2","+","3","4","-","5","6","*","7","8","/","=","9","0","."]
  const onButtonClick =(name)=>{
  if(name === "c"){
setDisplayValue("");
  }
  else if(name === "="){
    let a = eval(displayValue);
setDisplayValue(a);
  }
  else{
let tempValue = displayValue+name;
setDisplayValue(tempValue);
  }
    
      
  }

  return (
   
    <>
  <Container>
<Display displayValue={displayValue}></Display>
    <Map switches={calculatorElements} onButtonClick={onButtonClick}></Map>
  </Container>
    </>
  )
}

export default App
