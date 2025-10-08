import React from 'react'
import './Bagpage.css'
import { useSelector, useDispatch } from 'react-redux';
import { deleteFromcart, updateQuantity } from '../reduxlist/Productslice'

function Bagpage() {
  const listBag = useSelector((state)=>state.list.Product)
    const dispatch=useDispatch();

    const increment = (id,quantity)=>{
      dispatch(updateQuantity({id,quantity : quantity+1}))
    }

    const decrement = (id,quantity)=>{
      if(quantity>1){
        dispatch(updateQuantity({id,quantity : quantity-1}))
      }
    }

  return (
    <div className='contanier'>
    <div className="row productrow">
      {listBag.map((data)=>
  <div className="col-3">
    <img src={data.image} className="card" alt="..."/>
    <h5 className="card-title">{data.title}</h5>
    <p className="card-text">{data.price}</p>
    <button className='movebtn' onClick={()=>dispatch(deleteFromcart(data))}>Delete</button>
    <div className='' style={{display:'flex',justifyContent:'center',marginBottom:'20px'}}>
     <button className='dicbtn' onClick={()=>{decrement(data.id,data.quantity)}}>-</button>
      {data.quantity}
     <button className='inbtn' onClick={()=>{increment(data.id,data.quantity)}} >+</button>
  </div>
  </div>
)
}
</div>
</div>
  )
}

export default Bagpage
