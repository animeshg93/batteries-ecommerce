import React from 'react'
import styles from '../css/product.module.css'


export default function Product(){
	return(
		<div className={styles.product}>
			<img className={styles.image} src="https://www.renderhub.com/unos/battery-coin-cell/battery-coin-cell-01.jpg" />
			<h4 >Lithium battery </h4>
			<h4 className={styles.productMetadata}>$16.99</h4>
		</div>
	);
}