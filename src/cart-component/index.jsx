'use strict';

import React, { Component } from 'react';
import './cart.scss';

class CartComponent extends Component {
	render() {
		return (
			<div className='cart-section'>
				<div className='holder'>
					<ul className='list'>
						<li>
							<div className='image'>
								image
							</div>
							<div className='text'>
								<h2>Title Lorem ipsum dolor sit</h2>
								<p>Lorem ipsum dolor sit amet, quis dictum mauris erat aliquam, ac in pede pharetra quis non et.</p>
								<select>
									<option value='SKU'>SKU</option>
								</select>
							</div>
							<div className='price'>
								<button>remove</button>
								<button>-</button>
								<span>5</span>
								<button>+</button>
								<strong>75.00 €</strong>
							</div>
						</li>
						<li>
							<div className='image'>
								image
							</div>
							<div className='text'>
								<h2>Title Lorem ipsum dolor sit</h2>
								<p>Lorem ipsum dolor sit amet, quis dictum mauris erat aliquam, ac in pede pharetra quis non et.</p>
								<select>
									<option value='SKU'>SKU</option>
								</select>
							</div>
							<div className='price'>
								<button>remove</button>
								<button>-</button>
								<span>5</span>
								<button>+</button>
								<strong>75.00 €</strong>
							</div>
						</li>
						<li>
							<div className='image'>
								image
							</div>
							<div className='text'>
								<h2>Title Lorem ipsum dolor sit</h2>
								<p>Lorem ipsum dolor sit amet, quis dictum mauris erat aliquam, ac in pede pharetra quis non et.</p>
								<select>
									<option value='SKU'>SKU</option>
								</select>
							</div>
							<div className='price'>
								<button>remove</button>
								<button>-</button>
								<span>5</span>
								<button>+</button>
								<strong>75.00 €</strong>
							</div>
						</li>
					</ul>
					<div className='total-price'>225.00 €</div>
				</div>
			</div>
		)
	}
}

export default CartComponent;