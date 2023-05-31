import Image from 'next/image'
import { Section } from '@/components/Section'
import HeroBgPic from "../../public/herobgco.png"
import MainCar from "../../public/main-car.png"
import {Offer} from '@/components/Offer'
import {BookPlanner} from '@/components/BookPlanner'

export default function Hero() {
  return (
      <Section px={20}  >
        <div className='w-2/4 absolute top-0 right-0 -z-10'>
        <Image src={HeroBgPic} alt='bg image'   />
        </div>
        <div className='mt-32'>
            <div className='flex justify-center items-center '>
                <Offer />
                <Image className='w-6/12' src={MainCar} alt="car image"/>
            </div>
            <div>
               <BookPlanner />
            </div>
        </div>
      </Section>
 
  )
}