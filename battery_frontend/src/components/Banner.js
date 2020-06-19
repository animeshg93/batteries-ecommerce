import React from 'react'
import styles from '../css/banner.module.css'

export default function Banner(){
	return(
		<div className={styles.topNav}>
			<a className={styles.brand} href="/batteries"><h1>ANIMESH BATTERIES</h1></a>
			<div className={styles.right}>
				<span className={styles.cart}></span>
			</div>
			<span className={styles.counter}>19</span>
		</div>
	);
}