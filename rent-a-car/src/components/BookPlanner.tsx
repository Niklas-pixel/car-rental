import { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker"; 

type BookPlannerProps = {}

type DateRange = {
  startDate: Date,
  endDate: Date 
  
}

export const BookPlanner = (props: BookPlannerProps ) => {

  const [value, setValue] = useState<DateRange>({ 
    startDate: new Date(), 
    endDate: new Date()
    }); 
    
    const handleValueChange = (newValue: any) => {
    console.log("newValue:", newValue); 
    setValue(newValue); 
    } 
    

  return (
    <div>
       <h1>Book a car</h1>
       <div>Check your email to confirm an order</div>
      <form >
        <label htmlFor="type">Select Your Car Type *</label>
        <select name="type" id="type">
          <option value="Select your car type">Select your car type</option>
          <option value="Audi A1 S-Line">Audi A1 S-Line</option>
          <option value="VW Golf 6">VW Golf 6</option>
          <option value="Toyota Camry">Toyota Camry</option>
          <option value="BMW 320 ModernLine">BMW 320 ModernLine</option>
          <option value="Mercedes-Benz GLK">Mercedes-Benz GLK</option>
          <option value="VW Passat CC">VW Passat CC</option>
        </select>
        <label htmlFor="pickup">Pickup location *</label>
        <select name="pickup" id="pickup">
          <option value="Select your pickup location">Select your pickup location</option>
          <option value="Cluj-Napoca">Cluj-Napoca</option>
          <option value="Bucharest">Bucharest</option>
          <option value="Timisoara">Timisoara</option>
          <option value="Iasi">Iasi</option>
          <option value="Brasov">Brasov</option>
          <option value="Sibiu">Sibiu</option>
        </select>
        <label htmlFor="dropoff">Dropoff location *</label>
        <select name="dropoff" id="dropoff">
          <option value="Select your dropoff location">Select your dropoff location</option>
          <option value="Cluj-Napoca">Cluj-Napoca</option>
          <option value="Bucharest">Bucharest</option>
          <option value="Timisoara">Timisoara</option>
          <option value="Iasi">Iasi</option>
          <option value="Brasov">Brasov</option>
          <option value="Sibiu">Sibiu</option>
        </select>
    
      </form>
      <Datepicker 
           value={value} 
            onChange={handleValueChange} 
            showShortcuts={true} 
            primaryColor={"fuchsia"} 

/> 
    </div>
  )
}
 {/* cmd shift slash to make a comment */} 
 {/*  */}