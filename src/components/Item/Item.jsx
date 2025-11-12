import React from 'react'

const Item = ({id, img, title, price, description, children}) => {
    return (
    <div>
        <img src={img} alt={title}  className='item-img'/>
        <h2 className='item-title'>{title}</h2 >
        <h4>ID: {id}</h4>
        <p className='item-price'>$ {price}</p>
        <p className='item-desc'>{description}</p>
        <p>{children}</p>    
    </div>
  )
}

export default Item
