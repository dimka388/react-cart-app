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
	}
};

export default function appState(state = initialState, action) {
	let obj = Object.assign({}, state);
	return state;
};