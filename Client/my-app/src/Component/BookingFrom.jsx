
import React from 'react'
import "./Booking.css"

const BookingFrom = () => {
  return (
    <div>
  <formcontainer>
       <form>
           <div className='brand'>
             <h2>Booking<span className='span_tag'>page</span></h2>
           </div>
           <input type="text" name='Customer Name' placeholder='Customer Name'></input>
       <input type="text" name='Customer Email' placeholder='Customer Email'></input>
       <input type="text" name='Booking Date' placeholder='Booking Date'/>
       <label for="cars">Booking type : </label>
     <select name="type" id="type">
    <option value="Full Day">Full Day</option>
    <option value="Half Day">Half Day</option>
    <option value="Custom">Custom</option>
  </select>
  <label for="cars">Booking Slot : </label>
     <select name="type" id="type">
    <option value="First Half">First Half</option>
    <option value="Second Half">Second Half</option>
  </select>
  <input type="text" name='Booking Time' placeholder='Booking Time'></input>

          
         <button type='sumbit'>sumbit</button>
       </form>
      </formcontainer>
    </div>
  )
}

export default BookingFrom;