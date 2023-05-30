import { IconType } from "react-icons"

type LogoProps = {
    image: IconType,
    title: string | number,
    subtitle: string | number
}
 /* FIX THE COLOR OF THE LOGO TO HAVE TAILWIND BG-RED-700 */
export const Logo = ({image: Image, title, subtitle}: LogoProps ) => {
  return (
    <>
    <div className="flex">
    <div>
        <Image size="60px" color="red" /> 
    </div>
    <div className=" flex flex-col justify-center  ">
        <h1 className="font-bold text-3xl leading-none tracking-tighter ">{title}</h1>
        <p className="leading-none text-1xl ">{subtitle}</p>
    </div>
    </div>

    </>
  )
}
 