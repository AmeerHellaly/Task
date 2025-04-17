
import React,{ useState } from 'react'
import ProductListing from '../components/ProductListing'
import CartModal from '../components/CartModal'
import cartIcon from '../assets/images/shop.jpg'
import { useSelector } from 'react-redux'
const PageContent = () => {
    const [isModalOpen,setIsModalOpen]=useState(false)
    const cartItems=useSelector((state)=>state.cart.items);
    const totalQuantity=cartItems.reduce((sum,item)=>sum+item.quantity,0);
    const openModal=()=>setIsModalOpen(true)
    const closeModal=()=>setIsModalOpen(false)
  return (
    <div className='page-content'>
      <header className='cart-header'>
        <button className='cart-btn' onClick={openModal}>
            <img src={cartIcon} alt="cart" className='cart-icon' />
            {totalQuantity>0 && <span className='cart-badge'>{totalQuantity}</span>}

        </button>
      </header>
      <ProductListing/>
      {isModalOpen &&<CartModal closeModal={closeModal}/>}
    </div>
  )
}

export default PageContent
