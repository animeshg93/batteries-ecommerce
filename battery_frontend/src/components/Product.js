import React from 'react'
import styles from '../css/product.module.css'


export default function Product(props){
	var battery = props.battery
	return(
		<div className={styles.product}>
			<a href={battery["url"]} ><img className={styles.image} src={battery["image"]} /></a>
			<h4>{battery["name"]}</h4>
			<h4>{battery["price"]}</h4>
		</div>
	);
}