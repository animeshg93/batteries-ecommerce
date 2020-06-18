import React from 'react'
import styles from '../css/banner.module.css'

export default function Banner(){
	return(
		<div className={styles.nav}>
			<ul className={styles.left}>
				<li><h1>ANIMESH BATTERIES</h1></li>
			</ul>
			<ul className={styles.right}>
				<li><img className={styles.cart} src="https://cdn0.iconfinder.com/data/icons/shopping-cart-26/1000/Shopping-Basket-02-512.png" /></li>
			</ul>
			
		</div>
	);
}