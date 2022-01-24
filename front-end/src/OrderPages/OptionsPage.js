


import React, {useState,useEffect} from 'react';
import PopUp from '../ordersComponent/PopUp';
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
    let [objs, setnewobjs] = useState({});


    let [finaldata, setfinaldata] = useState([]);

    const [isOpen, setIsOpen] = useState(false);
    const togglePopup = () => {
            setIsOpen(!isOpen);
          }

    


    useEffect(() => {

        let item=newOrder.filter((ele)=>ele.name !== objs.name)

        setnewOrder([...item,objs])
     
    }, [objs]);
    


    function confirmOrder(e){
    e.preventDefault();

    let final =  newOrder.filter((list)=>(list.quantity >0 && list.washes.length>0))
     
    if(final.length===0){
      console.log("please select something") 
     }else{
    setfinaldata(final)
    console.log(final) 
     }
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
                    <ProductType item={item} key={index} index={index} setnewObjs={setnewobjs}   />
                )
        })}


        <div className='confirm'>
            <li className="li"  ><button className='reg-btn'>Cancel</button></li>
            <li className="li"  ><button className='reg-btn btn-confirm'onClick={togglePopup} >Procced</button></li>

        </div>
      </form>
      </div>

    {
        isOpen && 
        <PopUp finaldata={finaldata}
                   handleClose={togglePopup}/>
    }    
  </div>;
}


// import React, { useState } from 'react';
// import Popup from './Popup';

// function App() {
//   const [isOpen, setIsOpen] = useState(false);

//   const togglePopup = () => {
//     setIsOpen(!isOpen);
//   }

//   return <div>
//     <input
//       type="button"
//       value="Click to Open Popup"
//       onClick={togglePopup}
//     />
//     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
//     {isOpen && <Popup
//       content={<>
//         <b>Design your Popup</b>
//         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
//         <button>Test button</button>
//       </>}
//       handleClose={togglePopup}
//     />}
//   </div>
// }

// export default App;