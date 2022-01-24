


import React, { useEffect, useState } from 'react';

export default function ProductType({item,index,setnewOrder ,newOrder }) {

    const washTypes=[
        {   
            name:"Washing",
            imgNormal:"../img/washing-machine.png",
            imgBlue:"../img/washing-machine-blue.png",
            price:20,
            id:1
        },
        {
            name:"Ironing",
            imgNormal:"../img/ironing.png",
            imgBlue:"../img/ironing-blue.png",
            price:15,
            id:2
        },{
            name:"Folding",
            imgNormal:"../img/towel.png",
            imgBlue:"../img/towel.png",
            price:10,
            id:3
        },{
            name:"Packing",
            imgNormal:"../img/bleach.png",
            imgBlue:"../img/bleach-blue.png",
            price:25,
            id:4
        },
    ]

    let [sigleCount, setsingeCount] = useState(0);
    let [washlist, setwashlist] = useState([]);
    
    
    let [price, setprice] = useState(0);

    let [totalprice, settotalprice] = useState(0);

    
    // let [objct, setobject] = useState({
    //     name:item.name,
    //     quantity:0,
    //     washTypes:[],
    // });
    

    function handleclick(obj){
        let result=true
        washlist.forEach(element => {
            if(element.id===obj.id){
                
                result =false
            }})

        console.log(result)

        if (result){
            console.log(obj)
            setwashlist([...washlist,obj])
            console.log("added list")
        }
       
        }
        
        useEffect(() => {
            
                let totalwash =0
                if(washlist){
                washlist.forEach((element)=>{
                totalwash = element.price+totalwash})}
                setprice(totalwash)

              const  newobj ={
                    name:item.name,
                    quantity:sigleCount,
                    washTypes:washlist,
                }

                setnewOrder([...newOrder,newobj])

        }, [washlist]);




        useEffect(() => {
            
          settotalprice(price*sigleCount)
 
        }, [price]);




    function handlechange(e){
        console.log(e.target.value)

        setsingeCount(e.target.value)
    }


    function reset(e){
        e.preventDefault();
        
        setwashlist([])
    }


    

  return( 
    
  <div>
       <div className=' data'>
              <div className='product-type'>
              <img  className='product-img' src={item.img} alt="product" />

                <div>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                </div>   
              </div>

              <div className='quantity'>
                  <input className='quantity-input' type="Number" min="0" onChange={handlechange}/>
              </div>

              <div className='Wash-type-section'>
                  <div className={` normal1 ${washlist.find((ele)=>ele.id===1) ? "blue1":""}`} onClick={()=>handleclick(washTypes[0])}></div>
                  <div className={` normal2 ${washlist.find((ele)=>ele.id===2) ? "blue2":""}`}  onClick={()=>{handleclick(washTypes[1])}}></div>
                  <div className={` normal3 ${washlist.find((ele)=>ele.id===3) ? "blue3":""}`}  onClick={()=>{handleclick(washTypes[2])}}></div>
                  <div className={` normal4 ${washlist.find((ele)=>ele.id===4) ? "blue4":""}`}  onClick={()=>{handleclick(washTypes[3])}}></div>
              </div>

              <div className='price'>
                   <h3> {sigleCount} x {price} ={totalprice} </h3> 
                   {console.log(washlist)}
              </div>

              <div className='other'>
                  {                     
            <li className="li"  ><button className='reg-btn btn-reset' onClick={reset}>Reset</button></li> 
                  }
              </div>

          </div>
  </div>)
}
