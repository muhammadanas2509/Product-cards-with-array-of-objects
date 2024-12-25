import React from 'react'
import './Card.css'
const Card = ({id,imgSrc,title,Category,des,price,rate,count}) => {
  return (
        <div className="product-card">
            <img src={imgSrc} alt=""  className="product-img"/>
    <div className="product-details">
      <h2 className="product-title">{title}</h2>
      <p className="product-category">Category: {Category}</p>
      <p className="product-description">{des}</p>
      <div className="product-meta">
        <span className="product-price">${price}</span>
        <span className="product-rating">Rating: ⭐ {rate} ({count} reviews)</span>
      </div>
      <button className="add-to-cart">Add to Cart</button>
    </div>
  </div> 


  )
}

export default Card