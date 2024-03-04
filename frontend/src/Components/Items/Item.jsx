import React from 'react'
import './Item.css'
export const Item = (props) => {
  return (
    <div className='item'>
        <img src={props.image} alt=''/>
        <p> {Props.name</p>
        <div className='item-prices'>
            <div className='item-prices-new' >
                {props.new_price}

            </div>
            <div className='item-prices-before'>
                {props.old_price}
            </div>
        </div>


    </div>
  )
}
