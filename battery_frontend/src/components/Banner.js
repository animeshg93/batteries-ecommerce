import React from 'react'
import styles from '../css/banner.module.css'
import { connect } from 'react-redux'

function Banner({ quantity}){
	return(
		<div className={styles.topNav}>
			<a className={styles.brand} href="/batteries"><h1>ANIMESH BATTERIES</h1></a>
			<div className={styles.right}>
				<span className={styles.cart}></span>
			</div>
			<span className={styles.counter}>{quantity}</span>
		</div>
	);
}

const mapStateToProps = state => {
  return { quantity: state.quantity }
}

export default connect(mapStateToProps)(Banner)