type PropsType={
    previousInput:string,
    operator:string | null,
    currentInput:string
}

const Display = ({previousInput,operator,currentInput}:PropsType) => {

  return (
    <div className=" flex p-4 justify-end min-h-60px ">
      {/* {result && <div>{result}</div> } */}
      {!previousInput && <div>{currentInput}</div>}
      {previousInput && <div>{previousInput}</div>}{operator && <div>{operator} {currentInput}</div> }
    </div>
  )
}

export default Display
