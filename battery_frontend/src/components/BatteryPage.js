import React, {useEffect, useState} from 'react'
import styles from '../css/battery.module.css'
import QuantityForm from './QuantityForm'

export default function BatteryPage(props){
	var key = props.match.params.id
	const [battery,setBattery]= useState({})

	useEffect(() => {
		fetch('http://localhost:3000/batteries/getBatteries/'+key)
		.then(resp=> resp.json())
		.then(data=>setBattery(data))	
	},{})

	return(
		<div className={styles.productContainer}>
			<div className={styles.imageContainer}>
				<img className={styles.image} src={battery.image} />
			</div>
			<div className={styles.productInfo}>
				<h1>{battery.name}</h1>
				<h3>Price: {battery.price}</h3>
			</div>
			<QuantityForm battery={battery} name={key}/>
		</div>
	);
}

