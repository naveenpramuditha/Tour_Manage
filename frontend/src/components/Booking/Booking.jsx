import React, {useState} from 'react'
import './booking.css'
import { Form, FormGroup, ListGroupItem, Button, ListGroup } from 'reactstrap'

import {useNavigate} from 'react-router-dom';

const Booking = ({tour, avgRating}) => {

    const {price, reviews} = tour;
    const navigate = useNavigate()

    const [credentials, setCredentials] = useState({
        userId: '01',
        userEmail: 'example@gmail.com',
        fullName:'',
        phone:'',
        guestSize:1,
        bookAt:''

    });

    const handleChange = e =>{
      setCredentials(prev => ({...prev, [e.target.id]:e.target.value}))
    };


    const serviceFee = 10
    const totalAmount = Number(price) * Number(credentials.guestSize) + Number(serviceFee)

    //send data to server

    const handleClick = e=>{
      e.preventDefault();
      
      navigate('/thank-you');

    }

  return (
    <div className="booking">
<div className="booking__top d-flex align-items-center justify-content-between">
    <h3>${price} <span>/per person</span></h3>
    <span className='tour__rating d-flex align-items-center gap-1'>
            <i class="ri-star-fill"></i>
            {avgRating === 0 ? null : avgRating } ({reviews?.length})
          
            
          </span>
</div>

          {/*  Booking Form  start*/}
          <div className="booking__form">
            <h5>Information</h5>
            <Form className='booking__info-form' onSubmit={handleClick}>
              <FormGroup>
                <input type='text' placeholder='Full Name' id='fullName' required onChange={handleChange} />
              </FormGroup>
              <FormGroup>
                <input type='number' placeholder='Mobile Number' id='phone' required onChange={handleChange} />
              </FormGroup>
              <FormGroup className='d-flex align-items-center gap-3'>
                <input type='date' placeholder='' id='bookAt' required onChange={handleChange} />
                <input type='number' placeholder='Number Of Guests' id='guestSize' required onChange={handleChange} />
              </FormGroup>

            </Form>
          </div>

          {/*  Booking Form  end*/}

           {/*  Booking bottom start*/}

           <div className="booking__bottom">
            <ListGroup>
            <ListGroupItem className='border-0 px-0'>
              <h5 className='d-felx align-items-center gap-1'>${price} <i class='ri-close-line'></i> per Person</h5>
              <span>${price}</span>
            </ListGroupItem>
            <ListGroupItem className='border-0 px-0'>
              <h5>Service Charge</h5>
              <span>${serviceFee}</span>
            </ListGroupItem>
            <ListGroupItem className='border-0 px-0 total'>
              <h5>Total</h5>
              <span>${totalAmount}</span>
            </ListGroupItem>
            </ListGroup>
            <Button className='btn primary__btn w-100 mt-4' onClick={handleClick}>Book Now</Button>
           </div>

           {/*  Booking bottom End*/}


    </div>
  )
}

export default Booking