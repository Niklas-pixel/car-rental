import Link from "next/link"
import { IconType } from "react-icons"
import {styles} from "../styles/styles"

type ButtonProps = {
    innerText?: string,
    bgColor: string,
    hBgColor: string,
    icon?: IconType,
    btnSize?: "sm" | "md",
    children?: React.ReactNode | string
    path?: string,
    margin?: boolean
}
 
export const LinkButton = ({margin, path, btnSize, innerText, bgColor, hBgColor, icon: Icon }: ButtonProps ) => {
  return (
      <Link className={`inline-block ${margin && styles.btnMargin}`} href={`${path}`}>
         <button   className={`${styles.hoverBtn.bgColor} ${bgColor} ${btnSize == "sm" && styles.button.sm || btnSize == "md" && styles.button.md} text-white ${bgColor === "bg-red-700" && `shadow-lg shadow-red-500/50`} `}>
         {innerText} {Icon && <Icon className="inline-block" />}
        </button></Link>
    
    
    
  )
}
 