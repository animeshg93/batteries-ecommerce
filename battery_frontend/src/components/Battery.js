import React from 'react'
import styles from '../css/product.module.css'
import {Link} from 'react-router-dom'


export default function Battery(props){
	var battery = props.battery
	return(
		<div className={styles.product}>
			<Link to={battery["url"]} ><img className={styles.image} src={battery["image"]} /></Link>
			<h4>{battery["name"]}</h4>
			<h4>{battery["price"]}</h4>
		</div>
	);
}