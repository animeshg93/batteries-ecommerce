import React, {useEffect, useState} from 'react'
import styles from '../css/battery.module.css'

export default function QuantityForm(props){
	const [quantity,setQuantity]=useState(0)

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
				<button className={styles.submitButton} onClick={e=>sendQuantityAndBattery(props.name, quantity)}>Add to cart</button>
			</div>
			);
	}
	else return null;
}

function sendQuantityAndBattery(key, quantity){
	console.log(key+quantity)
}
