import { useState } from "react"
import Navbar from "./components/Navbar"
import Display from "./components/Display"
import ButtonPanel from "./components/ButtonPanel"

function App() {
  const [currentInput,setCurrentInput]=useState<string>('0')
  const [previousInput,setPreviousInput]=useState<string>('0')
  const [operator,setOperator]=useState<string | null>(null)

  const onButtonClick=(value:string):void=>{
    if(!isNaN(Number(value)) || value==='.')
      handleNumber(value);
    else if(['+', '-', '×', '÷'].includes(value))
      handleOperator(value);
    else if(value==='C')
      handleClear();
    else if(value==='=')
      handleEqual();
    else if(value==='±')
      handleToggleSign();
    else if(value==='%')
      handlePercentage();
  }

  const handleNumber=(num: string):void=>{
    if(operator){
      if(currentInput=='0' && num!=='.')
        setCurrentInput(num);
      else setCurrentInput(currentInput+num);
    }else{
    if (previousInput==='0' && num!==".")
      setPreviousInput(num);
    else setPreviousInput(previousInput+num)
  }
  }

  const handleOperator=(op:string):void=>{
    if(operator && previousInput){
      const computed=compute();
      setPreviousInput(computed)
      setCurrentInput('0')
    }setOperator(op)
  }

  const handleEqual=():void=>{
    if(operator && previousInput){
      const computed=compute();
      setCurrentInput('0');
      setPreviousInput(computed);
      setOperator(null);
    }
  }

  const handleClear=():void=>{
    setCurrentInput('0');
    setPreviousInput('0');
    setOperator(null)
  }

  const handleToggleSign=():void=>{
    if(previousInput!=='0')
    setPreviousInput(previousInput.startsWith('-')?previousInput.slice(1):'-'+previousInput);
  }

  const handlePercentage=():void=>{
    const num=parseFloat(currentInput)/100;
    setCurrentInput(num.toString());
    if(!operator){
      const num=parseFloat(previousInput)/100;
      setPreviousInput(num.toString());
    }
  }

  const compute = (): string => {
    const prev = parseFloat(previousInput!);
    const current = parseFloat(currentInput);
    let res = 0;
    switch (operator) {
      case '+':
        res = prev + current;
        break;
      case '-':
        res = prev - current;
        break;
      case '×':
        res = prev * current;
        break;
      case '÷':
        res = current !== 0 ? prev / current : 0;
        break;
      default:
        break;
    }
    return res.toString();
  };


  return (
    <div className="bg-slate-400 w-[100vw] h-[100vh] flex flex-col justify-center items-center bg-[url('Background.png')]  bg-cover">
      <Navbar/>
      <div className=" min-w-[250px] w-[50vw] h-[400px] bg-gray-300  rounded-md  ">
        <Display previousInput={previousInput} operator={operator} currentInput={currentInput}/>
        <ButtonPanel onButtonClick={onButtonClick} />
      </div>
    </div>
  )
}

export default App
