import React, {useEffect, useState} from 'react'
import styles from '../css/battery.module.css'
import { connect } from 'react-redux'


function QuantityForm(props){
	const [quantity,setQuantity]=useState(1)

	if(props.battery.quantity != 0){
		return(
			<div className={styles.quantity}>
				<h2 className={styles.stock}>IN STOCK</h2>
				<label>Quantity: </label>
				<select value={quantity} onChange={e=>setQuantity(e.target.value)}>
				    <option value="1">1</option>
				    <option value="2">2</option>
				    <option value="3">3</option>
				    <option value="4">4</option>
				</select>
				<button className={styles.submitButton} onClick={e=>sendQuantityAndBattery(props, quantity)}>Add to cart</button>
			</div>
			);
	}
	else return null;
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  }
}

function sendQuantityAndBattery(props, quantity){
	fetch('http://localhost:3000/batteries/validateBatteryQuantity/',{
		method :'post',
		headers: {'Content-Type':'application/jaon'},
		body: JSON.stringify({
		    "key": props.name,
		    "quantity": quantity
	    })
	})
		.then(resp=> resp.json())
		.then(()=>{
			props.dispatch({
				type:"change_quantity",
				quantity: quantity
			})
		})
}

export default connect(mapDispatchToProps)(QuantityForm)

