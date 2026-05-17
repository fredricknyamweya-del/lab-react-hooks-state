import React from 'react'

const Cart = ({ items }) => {
  return (
    <div style={{ marginTop: '1.5rem' }}>
      <h2>Shopping Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.id}>{`${item.name} is in your cart.`}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Cart
