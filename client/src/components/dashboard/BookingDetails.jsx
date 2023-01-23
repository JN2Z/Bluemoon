import React from 'react'
import './bookingdetails.css'

const data = [
{
    orderNo : 1,
    name : 'Juan Dela Cruz',
    checkIn : '01-16-2023',
    checkOut : '01-19-2023',
    roomType: 'Standard',
    mobileNo: '	0912-345-6789',
    email: '	juandelacruz@email.com'
},
{
    orderNo : 2,
    name : 'John Doe',
    checkIn : '01-16-2023',
    checkOut : '01-19-2023',
    roomType: 'Standard',
    mobileNo: '	0912-345-6789',
    email: '	juandelacruz@email.com'
},
{
    orderNo : 3,
    name : 'John Doe',
    checkIn : '01-16-2023',
    checkOut : '01-19-2023',
    roomType: 'Standard',
    mobileNo: '	0912-345-6789',
    email: '	juandelacruz@email.com'
}
]

const BookingDetails = () => {
  return (
    <div className="booking__details-wrapper">
        <div className="booking__details">
        <h4>Booking Details</h4>
        <hr />
       <table>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Check In</th>
                <th>Check Out</th>
                <th>Room Type</th>
                <th>Mobile No.</th>
                <th>Email Address</th>
                <th>Actions</th>
             </tr>
             {data.map(({orderNo,name,checkIn,checkOut,roomType,mobileNo,email})=>{
                return(
                <tr>
                    <td>{orderNo}</td>
                    <td>{name}</td>
                    <td>{checkIn}</td>
                    <td>{checkOut}</td>
                    <td>{roomType}</td>
                    <td>{mobileNo}</td>
                    <td>{email}</td>
                    <td>
                        <form action="">
                            <input type="submit" value='Approve'className='action__btn approve'/>
                            <input type="submit" value='Decline'className='action__btn decline'/>
                        </form>
                    </td>
                </tr>
                )
             })}

        </table>
        </div>
    </div>
  )
}

export default BookingDetails