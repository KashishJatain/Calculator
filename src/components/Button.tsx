type propsType={
    value:string,
    onClick:()=>void,
    className?:string
}

const Button = ({value,onClick}:propsType) => {
    const isOperator=['÷', '×', '-', '+', '='].includes(value)
  return (
<button 
onClick={onClick}
className={`p-4 rounded bg-gray-700 text-white font-bold 
  ${isOperator ? 'bg-orange-500' : 'bg-gray-700'} 
  hover:bg-gray-600 `}
>{value}
</button>
  )
}

export default Button
