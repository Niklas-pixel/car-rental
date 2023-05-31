import { LinkButton } from "./LinkButton";
import { BiRightArrowCircle } from "react-icons/bi";
import { BsFillPatchCheckFill } from "react-icons/bs"; 

type OfferProps = {}
 
export const Offer = (props: OfferProps ) => {
  return (
    <div className="w-1/3">
       <h4 className="text-xl ">Plan your trip now</h4>
       <h1 className="text-6xl">Save <span className="text-red-700">big</span> with our car rental</h1>
       <br />
       <p className="text-xs">Rent the car of your dreams. Unbeatable prices, unlimited miles, flexible pick-up options and much more.</p>
       <br />
      <div className=" flex justify-between">
      <LinkButton path="/" icon={BsFillPatchCheckFill} bgColor="bg-red-700" hBgColor="bg-red-500" py={3}  px={7} innerText="Book Ride" />
      < LinkButton path="/" icon={BiRightArrowCircle}  bgColor="bg-black" hBgColor="bg-gray-500" py={3}  px={7} innerText="Learn More" />

      </div>
     
       

    </div>
  )
}
 