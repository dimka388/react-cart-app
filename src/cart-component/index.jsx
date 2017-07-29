'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import CustomSelect from '../custom-select';

import './cart.scss';
import 'isomorphic-fetch';

class CartComponent extends Component {
	loadItems() {
		fetch(this.props.store.itemsSrc)
			.then((response) => {
				if (response.status >= 400) {
					throw new Error("Bad response from server");
				}
				return response.json();
			})
			.then((items) => {
				this.props.onItemsLoaded(items);
			});
	}

	componentWillMount() {
		if (!this.props.store.storeItems.length) {
			this.loadItems();
		}
	}

	deleteClickHandler(item) {
		this.props.onItemDelete(item);
	}

	decreaseClickHandler(item) {
		this.props.onDecrease(item);
	}

	increaseClickHandler(item) {
		this.props.onIncrease(item);
	}

	render() {
		const ItemData = (item) => {
			return this.props.store.storeItems.length ? this.props.store.storeItems.filter((obj) => {
				if (obj.id === item.id) {
					return true;
				}
			})[0] : null;
		}
		const ItemTitle = ({item}) => {
			return (
				<h2>{ItemData(item) ? ItemData(item).title : ''}</h2>
			)
		}
		const ItemImage = ({item}) => {
			return (
				<div className='image' style={{ backgroundImage: 'url(' + (ItemData(item) ? ItemData(item).image : '') + ')' }}></div>
			)
		}
		const ItemText = ({item}) => {
			return (
				<p>{ItemData(item) ? ItemData(item).text : ''}</p>
			)
		}
		const ItemPrice = ({item}) => {
			return (
				<div className='price'>
					<button className='btn'
						disabled={ItemData(item) && item.qty == ItemData(item).minimum}
						onClick={this.decreaseClickHandler.bind(this, item)}>-</button>
					<span className='qty'>{item.qty}</span>
					<button className='btn'
						disabled={ItemData(item) && item.qty == ItemData(item).availability}
						onClick={this.increaseClickHandler.bind(this, item)}>+</button>
					<strong className='item-price'>{item.qty * (ItemData(item) ? ItemData(item).price : 0)} €</strong>
				</div>
			)
		}
		const CartItem = ({item}) => {
			return (
				<li>
					<ItemImage item={item} />
					<div className='text'>
						<ItemTitle item={item} />
						<ItemText item={item} />
						<CustomSelect item={item} />
					</div>
					<ItemPrice item={item} />
					<button className='delete'
						onClick={this.deleteClickHandler.bind(this, item)}>
						<img src={this.props.store.iconDelete.src}
							width={this.props.store.iconDelete.width}
							height={this.props.store.iconDelete.height}/>
					</button>
				</li>
			)
		}
		const SummaryPrice = ({items}) => {
			const calcValue = () => {
				return this.props.store.selectedItems.reduce(function(prev, item) {
					return prev + (ItemData(item) ? ItemData(item).price : 0) * item.qty;
				}, 0);
			};
			return (
				<div className='total-price'>{calcValue()} €</div>
			)
		}
		return (
			<div className='cart-section'>
				<div className='cart-wrapper'>
					<div className='holder'>
						<ul className='list'>
							{this.props.store.selectedItems.map((item, index) =>
								<CartItem item={item} key={index}/>
							)}
						</ul>
						<SummaryPrice items={this.props.store.selectedItems} />
					</div>
				</div>
			</div>
		)
	}
}

export default connect(
	state => ({
		store: state.appState
	}),
	dispatch => ({
		onItemsLoaded: (items) => {
			dispatch({ type: 'ItemsLoaded', items})
		},
		onItemDelete: (item) => {
			dispatch({ type: 'ItemDelete', item})
		},
		onDecrease: (item) => {
			dispatch({ type: 'ItemDecrease', item})
		},
		onIncrease: (item) => {
			dispatch({ type: 'ItemIncrease', item})
		}
	})
)(CartComponent);