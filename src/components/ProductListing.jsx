import React from 'react'
import { useDispatch } from 'react-redux'
import {addToCart} from '../redux/slices/cartSlice'
import {products} from '../data/product'
import '../styles/ProductListing.css'
const ProductListing = () => {
    const dispatch=useDispatch()
    const handleAddToCart=(product)=>{
      dispatch(addToCart(product))  
    }
  return (
    <div className='product-grid'>
      {products.map((product)=>(
        <div className='product-card' key={product.id}>
           <div className='ribbon'>New</div>
           <div className='icon'>{product.icon}</div> 
           <img src={product.image} alt={product.name} />
           <div className='content'>
            <h3>{product.name}</h3>
            <p>Explore our exclusive range of premium quality products designed just for you.</p>
            <p className='price'> $ {product.price}</p>
            <button onClick={()=>handleAddToCart(product)}>Add to Cart</button>
           </div>

        </div>
      ))}
    </div>
  )
}

export default ProductListing
