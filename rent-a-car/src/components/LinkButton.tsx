import Link from "next/link"
import { IconType } from "react-icons"

type ButtonProps = {
    innerText?: string,
    bgColor: string,
    hBgColor: string,
    icon?: IconType,
    px?: number,
    py?: number,
    children?: React.ReactNode | string
    path?: string
}
 
export const LinkButton = ({path, px, py, innerText, bgColor, hBgColor, icon: Icon }: ButtonProps ) => {
  return (
      <Link className="inline-block" href={`${path}`}>
         <button   className={`hover:${hBgColor} ${bgColor} py-${py} px-${px} text-white ${bgColor === "bg-red-700" && `shadow-lg shadow-red-500/50`} `}>
         {innerText} {Icon && <Icon className="inline-block" />}
        </button></Link>
    
    
    
  )
}
 