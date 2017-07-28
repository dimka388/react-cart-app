'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import './footer.scss';

const FooterComponent = ({store}) => {
	return (
		<footer id='footer'>
			<img src={store.footer.image.src}
				height={store.footer.image.height}
				width={store.footer.image.width} />
			<div className="text">
				<p>{store.footer.text}</p>
			</div>
		</footer>
	)
}

export default connect(
	state => ({
		store: state.appState
	}),
	dispatch => ({})
)(FooterComponent);