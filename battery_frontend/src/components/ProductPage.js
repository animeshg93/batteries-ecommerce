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
		<div>
			<div className={styles.imageContainer}>
				<img className={styles.image} src={battery.image} />
			</div>
			<div className={styles.title}>
				<h1>{battery.name}</h1>
			</div>
		</div>
	);
}