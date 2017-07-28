'use strict';

import React, { Component } from 'react';
import 'isomorphic-fetch';
import './cart.scss';

fetch('https://597ae01bc57781001187654c.mockapi.io/items')
	.then(function(response) {
		if (response.status >= 400) {
			throw new Error("Bad response from server");
		}
		return response.json();
	})
	.then(function(items) {
		items.map((item) => {
			console.log(item)
		})
	});

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
					</ul>
					<div className='total-price'>225.00 €</div>
				</div>
			</div>
		)
	}
}

export default CartComponent;