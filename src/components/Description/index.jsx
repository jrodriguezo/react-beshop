import React from 'react'

function index({product}) {
  return (
    <ul>
        <li>{product.brand}</li>
        <li>{product.model}</li>
        <li>{product.price}</li>
        <li>{product.cpu}</li>
        <li>{product.ram}</li>
        <li>{product.os}</li>
        <li>{product.displayResolution}</li>
        <li>{product.battery}</li>
        <li>{product.dimentions}</li>
        <li>{product.weight}</li>
    </ul>
  )
}

export default index