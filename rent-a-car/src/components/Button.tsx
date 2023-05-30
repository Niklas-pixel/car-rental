type ButtonProps = {
    innerText: string
}
 
export const Button = ({innerText}: ButtonProps ) => {
  return (
    <>
    <button className="bg-blue-300 hover:bg-blue-500 p-6 text-green-500 border-solid border-cyan-300 border-1 " >{innerText}</button>
    </>
    
  )
}
 