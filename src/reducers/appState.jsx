'use strict';

const initialState = {
	logo: {
		href: '#',
		image: 'images/logo.png',
		width: 183,
		height: 62,
		alt: 'image description'
	}
};

export default function appState(state = initialState, action) {
	let obj = Object.assign({}, state);
	return state;
};