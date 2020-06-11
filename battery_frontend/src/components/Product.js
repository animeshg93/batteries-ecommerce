import React from 'react'
import styles from '../css/product.module.css'


export default function Product(props){
	var battery = props.battery
	return(
		<div className={styles.product}>
			<img className={styles.image} src={battery["image"]} />
			<h4>{battery["name"]}</h4>
			<h4 className={styles.productMetadata}>{battery["price"]}</h4>
		</div>
	);
}