import Button from "./Button";

type PropsType={
    onButtonClick:(value:string)=>void
}

const ButtonPanel = ({onButtonClick}:PropsType) => {
    const buttons=[
        'C','±','%', '÷',
        '7', '8', '9', '×',
        '4', '5', '6', '-',
        '1', '2', '3', '+',
        '0', '.', '='
      ];
  return (
    <div  className="grid grid-cols-4 gap-2 ">
      {
        buttons.map((button)=>(
            <Button key={button} value={button} onClick={()=>onButtonClick(button)}/>
        ))
      }
    </div>
  )
}

export default ButtonPanel
