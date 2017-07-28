'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import './text-block.scss';

const TextBlockComponent = ({store}) => {
	return (
		<div className="block">
			<h1>{store.textBlock.title}<span>.</span></h1>
			<p>{store.textBlock.text}</p>
		</div>
	)
}

export default connect(
	state => ({
		store: state.appState
	}),
	dispatch => ({})
)(TextBlockComponent);