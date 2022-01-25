


import React from 'react';
import Sidebar from '../ordersComponent/Sidebar';

export default function CreatePage() {
  return <div className='create'>
      <Sidebar/>
      <div className='create-right'>
          
            <div className='search-bar'>

                <h2>ORDERS | 0</h2>
                <form action="" >
                    <div className='field field-search'>
                        <label htmlFor="search"></label>
                        <input type="text" id='Email/phone' name="emailPhone"/>            
                        </div>
                    <div className='under-line search-line'></div>
                </form >
            </div>

            <div className='create-sec'>
            <p>No Order Available</p>
            <li className="li"  ><button className='reg-btn'>Create</button></li>
        </div>

      </div>
  </div>;
}