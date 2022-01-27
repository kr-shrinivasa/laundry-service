
import React from 'react';
import Sidebar from '../ordersComponent/Sidebar';
import { NavLink } from 'react-router-dom'


export default function OrderList() {
    let list=[
        {
          id:"or00010",
          date:"Mon ,1/1/1111 ,1:11 AM",
          location:"jp nagar" ,
          city:"Bengalore",
          phone:"9123456789",
          items:"5",
          price:"150",
          status:"ready to deliver",
          

        }
    ]

  return<div className='create'>
  <Sidebar/>
  <div className='create-right'>
      
        <div className='search-bar'>

        <div className='search-bar'>
    <h2> Orders |0</h2>
    <form action="" className='order-list'>

      <NavLink to={"/option"}><button className=''>Create</button></NavLink>
            <div>
        <div className='field field-search'>
            <label htmlFor="search"></label>
            <input type="text" id='Email/phone' name="emailPhone"/>            
            </div>
        <div className='under-line search-line'></div>
        </div>
    </form >
    </div>
            
        </div>
        <div className='table-list'>
              <p className='Order-Id '>Order Id</p>
              <p className='date-time '>Order Date & Time</p>
              <p className='store-location '>Store Location</p>
              <p className='city'>City</p>
              <p className='store-phone '>Store Phone</p>
              <p className='total-items '>Total items</p>
              <p className='Total-Price '>Total Price</p>
              <p className='status '>status</p>
              <p className='view '>view</p>
          </div>
        
        {
            list.map((ele,ind)=>{
                return(
            <div className='table-list-data'>
            <p className='Order-Id '>{ele.id}</p>
              <p className='date-time '>{ele.date}</p>
              <p className='store-location '>{ele.location}</p>
              <p className='city'>City</p>
              <p className='store-phone '>{ele.phone}</p>
              <p className='total-items '>{ele.items}</p>
              <p className='Total-Price '>{ele.price}</p>
              <p className='status '>{ele.status}</p>
              <p className='view '><i className='fa fa-eye'></i></p>
                    </div>
                )
            })
        }


  </div>

</div>;
}
