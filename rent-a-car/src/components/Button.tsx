type ButtonProps = {
    innerText: string
}
 
export const Button = ({innerText}: ButtonProps ) => {
  return (
    <>
    <button className="bg-red-700 hover:bg-red-500 p-2 text-white px-6 " >{innerText}</button>
    </>
    
  )
}
 