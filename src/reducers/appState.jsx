'use strict';

const initialState = {
	logo: {
		href: '#',
		image: 'images/logo.svg',
		width: 183,
		height: 62,
		alt: 'adyax.'
	},
	slogan: {
		image: 'images/a-better-experience.png',
		width: 238,
		height: 10,
		alt: 'a better experience'
	},
	textBlock: {
		title: 'Frond-End Developer',
		text: 'Adyax’s core values take top priority: we care for our client, and we care for our people. Staff and clients work in partnership with consistent,  transparent communication.'
	},
	footer: {
		image: {
			src: 'images/bitmap.png',
			width: 1072,
			height: 517
		},
		text: 'Adyax specializes in working with multi-national, multi-brand companies on a wide range of customer, client and employee-facing solutions.'
	},
	iconDelete: {
		src: 'images/icon-remove.svg',
		width: 20,
		height: 23
	},
	selectedItems: [
		{
			id: 'SKU-1',
			qty: 3
		},
		{
			id: 'SKU-2',
			qty: 4
		},
		{
			id: 'SKU-3',
			qty: 5
		}
	],
	storeItems: [],
	itemsSrc: 'https://597ae01bc57781001187654c.mockapi.io/items'
};

export default function appState(state = initialState, action) {
	let newState = Object.assign({}, state);
	const updateItemQty = (item, increase) => {
		let index = newState.selectedItems.indexOf(item);
		let qty = newState.selectedItems[index].qty;
		if (increase) {
			newState.selectedItems[index].qty = Math.min(10, qty + 1);
		} else {
			newState.selectedItems[index].qty = Math.max(1, qty - 1);
		}
		return newState;
	};
	const deleteItem = (item) => {
		let index = newState.selectedItems.indexOf(action.item);
		newState.selectedItems.splice(index,1);
		return newState;
	};
	const updateItemId = (item, id) => {
		let index = newState.selectedItems.indexOf(item);
		newState.selectedItems[index].id = id;
		return newState;
	};
	switch (action.type) {
		case 'ItemsLoaded':
			newState.storeItems = action.items;
			return newState;
			break;
		case 'ItemDecrease':
			return updateItemQty(action.item);
			break;
		case 'ItemIncrease':
			return updateItemQty(action.item, true);
			break;
		case 'ItemChangeId':
			return updateItemId(action.item, action.id);
			break;
		case 'ItemDelete':
			return deleteItem(action.item);
			break;
		default:
			return newState;
	}
};