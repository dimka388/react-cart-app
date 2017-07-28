'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import './header.scss';

const HeaderComponent = ({store}) => {
	return (
		<header id='header'>
			<a href={store.logo.href}>
				<div className='logo'>
					<img src={store.logo.image}
						height={store.logo.height}
						width={store.logo.width}
						alt={store.logo.alt} />
				</div>
				<img src={store.slogan.image}
					height={store.slogan.height}
					width={store.slogan.width}
					alt={store.slogan.alt} />
			</a>
		</header>
	)
}

export default connect(
	state => ({
		store: state.appState
	}),
	dispatch => ({})
)(HeaderComponent);