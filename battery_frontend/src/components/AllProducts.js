import React,{useEffect, useState} from 'react'
import styles from '../css/product.module.css'
import Product from './Product'

export default function AllProducts(){
	const[batteryList, setBatteryList]=useState([])

	useEffect(() => {
		fetch('http://localhost:3000/batteries/getBatteries')
		.then(resp=> resp.json())
		.then(data=>setBatteryList(data))	
	},[])

	var batteries = [];
	batteryList.map(batteryProduct => (
		batteries.push(<Product battery={batteryProduct} />)
	))

	return(
		<div className={styles.productPage}>
			{batteries}
		</div>
	);
}