import React, {useEffect, useState} from 'react'
import styles from '../css/battery.module.css'


export default function ProductPage(props){
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
			<div className={styles.title}>
				<h1>{battery.name}</h1>
				<h3>Price: {battery.price}</h3>
			</div>
			<div className={styles.price}>
				<select id="cars" name="cars">
				    <option value="1">1</option>
				    <option value="2">2</option>
				    <option value="3">3</option>
				    <option value="4">4</option>
				</select>
			</div>
		</div>
	);
}