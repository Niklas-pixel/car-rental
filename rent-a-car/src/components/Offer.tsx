import { LinkButton } from "./LinkButton";
import { BiRightArrowCircle } from "react-icons/bi";
import { BsFillPatchCheckFill } from "react-icons/bs"; 
import { Lobster } from "next/font/google";

type OfferProps = {}

const lobster = Lobster({
  weight: "400",
  subsets: ['latin'],
  variable: '--font-lobster',
})

export const Offer = (props: OfferProps ) => {
  return (
    <div className="w-1/3  ">
      <div >
      <h4 className="text-xl ">Plan your trip now</h4>
       <h1 className={`text-6xl ${lobster.variable} font-lobster`} >Save <span className="text-red-700">big</span> with our car rental</h1>
       <br />
       <p className="text-xs">Rent the car of your dreams. Unbeatable prices, <br/> unlimited  miles, flexible pick-up options and much more.</p>

      </div>
       <br />
      <div className=" flex   ">
      <LinkButton margin path="/" icon={BsFillPatchCheckFill} bgColor="bg-red-700" hBgColor="bg-red-500" btnSize="md" innerText="Book Ride" />
      < LinkButton path="/" icon={BiRightArrowCircle}  bgColor="bg-black" hBgColor="bg-gray-500" btnSize="md" innerText="Learn More" />

      </div>
     
       

    </div>
  )
}
 