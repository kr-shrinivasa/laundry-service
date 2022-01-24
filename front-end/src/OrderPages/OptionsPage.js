


import React, {useState} from 'react';
import Sidebar from '../ordersComponent/Sidebar';
import ProductType from './ProductType';

export default function OptionsPage() {

    const producttype=[
        {
            name:"Shirts",
            img:"../img/shirts.jpg",
            description:"Lorem, ipsum dolor sit amet"
        },
        {
            name:"T-Shirts",
            img:"../img/t-shirt.jpg",
            description:"Lorem, ipsum dolor sit amet"
        },
        {
            name:"Trousers",
            img:"../img/trousers.jpg",
            description:"Lorem, ipsum dolor sit amet"
        },{
            name:"Jeans",
            img:"../img/jeans.jpg",
            description:"Lorem, ipsum dolor sit amet"
        },{
            name:"Boxers",
            img:"",
            description:"Lorem, ipsum dolor sit amet"
        },{
            name:"Joggers",
            img:"../img/boxers.jpg",
            description:"Lorem, ipsum dolor sit amet"
        },{
            name:"others",
            img:"../img/others.png",
            description:"Lorem, ipsum dolor sit amet"
        },
    ]

    const [newOrder, setnewOrder] = useState([]);

    function confirmOrder(e){
        e.preventDefault();
        console.log(newOrder)


    }



  return <div className='create'>
      <Sidebar/>

      <div className='create-right'>
      
      <form action="" className='product-list' onSubmit={confirmOrder}>

          <div className='table'>
              <h3 className='product-type'>Product Type</h3>
              <h3 className='quantity'>quantity</h3>
              <h3 className='Wash-type'>Wash Type</h3>
              <h3 className='price'>Price</h3>
              <h3 className='other'>other</h3>
              
          </div>
        {producttype.map((item,index)=>{
                return(
                    <ProductType item={item} key={index} index={index} setnewOrder={setnewOrder} newOrder={newOrder}  />
                )
        })}


        <div className='confirm'>
        
            <li className="li"  ><button className='reg-btn'>Cancel</button></li>
            <li className="li"  ><button className='reg-btn btn-confirm'>Procced</button></li>

        </div>
      </form>
      </div>

  </div>;
}
