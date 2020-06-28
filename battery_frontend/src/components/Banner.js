import React from 'react'
import AllBatteries from './AllBatteries'
import styles from '../css/banner.module.css'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'


function Banner({ quantity}){
	return(
		
		<div className={styles.topNav}>
			<Link className={styles.brand} to="/batteries"><h1>ANIMESH BATTERIES</h1></Link>
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