import React, {useState} from 'react'
import {NavLink} from "react-router-dom";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../Css/Homepage.css';
let img='Restaurant.jpg'

function Home() {
  return (
    <>
    <nav class="navbar navbar-expand-lg bg-body-tertiary" >
      <div class="container-fluid" style={{backgroundColor:"#841C05"}}>
      <a class="navbar-brand ms-5" href="#" style={{color:"#FFC300" }}>
      <h4>Restaurant Booking</h4></a>
          <ul className='navbar-nav justify-content-end'>
              <div className='mx-2 p-2'><li className='nav-item'><NavLink to="/" className='nav-link' style={{color:"#FFC300"}}> <h4>Home</h4></NavLink></li></div>
              <div className='mx-2 p-2'><li className='nav-item'><NavLink to="/bookanappointment" className='nav-link' style={{color:"#FFC300"}}> <h4>Order Food</h4></NavLink></li></div>
              <div className='mx-2 p-2'><li className='nav-item'><NavLink to="/Contact" className='nav-link'style={{color:"#FFC300"}}>
              <h4>Contact Us</h4></NavLink></li></div>

          </ul>
      </div>
    </nav>
    {/* <HomeCarousel/> */}
    <Homepage/>
  </>
  )
}

const Homepage = () => {
  // Feedback data
  const feedbackData = [
    {
      id: 1,
      name: 'Khyati khushi',
      name1: 'CUSTOMER FEEDBACK',
      feedback: 'Impeccable service and flavors that danced on my taste buds—definitely coming back!',
      imageUrl: 'woman1.jpg',
    },
    {
      id: 2,
      name: 'Suryansh Raj',
      name1: 'CUSTOMER FEEDBACK',
      feedback: 'From ambiance to cuisine, every aspect exceeded expectations. A must-visit!',
      imageUrl: 'man3.jpg', 
    },
    {
      id: 3,
      name: 'Mala Tiwari',
      name1: 'CUSTOMER FEEDBACK',
      feedback: 'Effortless reservation process and a delightful dining experience.',
      imageUrl: 'woman2.jpeg', 
    },
    {
        id: 4,
        name: 'Harsh Raj',
        name1: 'CUSTOMER FEEDBACK',
        feedback: 'The food was exceptional, and the staff went above and beyond to ensure our satisfaction.',
        imageUrl: 'man2.jpg', 
    },
    {
        id: 5,
        name: 'Nita Sinha',
        name1: 'CUSTOMER FEEDBACK',
        feedback: 'Five-star treatment from start to finish. Highly recommend for any occasion.',
        imageUrl: 'woman3.jpg', 
    },
    {
        id: 6,
        name: 'Sahil Singh',
        name1: 'CUSTOMER FEEDBACK',
        feedback: 'Thank you for making our celebration memorable with impeccable service and delicious food!',
        imageUrl: 'man1.jpeg', 
    },
  ];

  return (
    <div>
    <div class="d-flex justify-content-around " style={{padding:20}}>

<div class='font-weight-bold shadow p-3 text-white' style={{backgroundColor:"#841C05", color:"#FFC300"}}><h5 style={{color:"#FFC300"}}>  Welcome to Boho, where culinary passion meets unparalleled dining experience! Nestled in the heart of Kolkata, our restaurant invites you on a gastronomic journey like no other. <br />

At Boho, we believe in crafting more than just meals; we create moments of delight, infused with flavors that tantalize the palate and memories that linger long after the last bite. <br />

Drawing inspiration from both local traditions and global influences, our chefs curate a menu that celebrates diversity while honoring the essence of each dish. From mouthwatering appetizers to indulgent mains and delectable desserts, every plate is a masterpiece, meticulously prepared to exceed your expectations. <br />

Step into our inviting ambiance, where warm hospitality and attentive service elevate your dining experience. Whether you're celebrating a special occasion, enjoying a meal with loved ones, or simply craving a culinary adventure, [Restaurant Name] promises an unforgettable rendezvous with food and hospitality. <br />

Embrace the extraordinary. Join us at Boho and savor the magic of exceptional dining.</h5></div>

<center>
<div class='shadow p-3 mt-2 ms-5 bg-white rounded img-fluid'>
    <img src= {img}></img>
</div>
</center>

</div>
<br></br>
<br></br>
    <div className="feedback-carousel-container" >
    <Carousel showArrows={true}>
        {feedbackData.map((item) => (
          <div key={item.id} className="feedback-item">
          <p>{item.name1}</p>
            <img src={item.imageUrl} alt={item.name} className="patient-image" />
            <p>{item.feedback}</p>
            <p className="feedback-author">- {item.name}</p>
          </div>
        ))}
      </Carousel>
    </div>
    </div>
    
  );
};

export {Home, Homepage};