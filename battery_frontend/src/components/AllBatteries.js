import React,{useEffect, useState} from 'react'
import styles from '../css/product.module.css'
import Battery from './Battery'

export default function AllBatteries(){
	const[batteryList, setBatteryList]=useState([])

	useEffect(() => {
		fetch('http://localhost:3000/batteries/getBatteries')
		.then(resp=> resp.json())
		.then(data=>setBatteryList(data))	
	},[])

	var batteries = [];
	batteryList.map(batteryProduct => (
		batteries.push(<Battery battery={batteryProduct} />)
	))

	return(
		<div className={styles.productPage}>
			{batteries}
		</div>
	);
}