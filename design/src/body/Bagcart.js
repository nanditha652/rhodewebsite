import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTocart, deleteFromcart } from '../reduxlist/Productslice'
import './Bagcart.css'


function Bagcart(props) {

  const cart = useSelector((state)=> state.list.Product);
    const dispatch = useDispatch();

    const addCart = (Item)=>{
        dispatch(addTocart(Item))
    }

    const deleteCart = (Item)=>{
        dispatch(deleteFromcart(Item))
    }
       
  return (
    <div className='contanier'>
    <div className="row productrow">
      {props.data.map((data)=>
  <div className='col-3'>
    <img src={data.image} className="card" alt="..."/>
    <h5 className="card-title">{data.title}</h5>
    <p className="card-text">{data.price}</p>
    {
    cart.find(Items=>Items.id===data.id)?
    (<button class="btn" onClick={()=>deleteCart(data)}>Remove From Bag</button>)
        :
    (<button class="btn" onClick={()=>addCart(data)}>Add To Bag </button>)
    }
  </div>
 )
}
</div>
</div>
  )
}

export default Bagcart
