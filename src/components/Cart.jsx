const Cart = ({count}) => {
    return (
      <h3 className='cart'> <span className="cart-icon">🛒</span> <span className="cart-items">{count}</span></h3>
    )
}

export default Cart;
