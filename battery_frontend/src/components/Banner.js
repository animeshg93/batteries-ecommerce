import React from 'react'
import styles from '../css/banner.module.css'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'


function Banner({ quantity}){
	return(
		
		<div className={styles.topNav}>
			<Link className={styles.brand} to="/batteries"><h1>ANIMESH BATTERIES</h1></Link>
			<div className={styles.right}>
				<span className={styles.cart}></span>
				<button className={styles.buy} onClick={buy}>BUY</button> 
			</div>
			<span className={styles.counter}>{quantity}</span>
			
		</div>
	);
}

function buy(){
	fetch('http://localhost:3000/batteries/buy')
		.then(resp=> resp.json())
		.then(data=>console.log(data))
}

const mapStateToProps = state => {
  return { quantity: state.quantity }
}

export default connect(mapStateToProps)(Banner)