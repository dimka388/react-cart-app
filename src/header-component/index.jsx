'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Styles from './header.scss';

class HeaderComponent extends Component {
	render() {
		return (
			<header className={Styles.header}>
				<a href={this.props.store.logo.href}>
					<img src={this.props.store.logo.image}
						height={this.props.store.logo.height}
						width={this.props.store.logo.width}
						alt={this.props.store.logo.alt} />
				</a>
			</header>
		)
	}
}

export default connect(
	state => ({
		store: state.appState
	}),
	dispatch => ({})
)(HeaderComponent);