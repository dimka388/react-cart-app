'use strict';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import './custom-select.scss';

class CustomSelect extends Component {
	constructor(props){
		super(props);
		this.state = {
			activeState: false
		}
		this.outsideClickHandler = this.handleClickOutside.bind(this);
	}

	handleClickOutside (event) {
		const domNode = ReactDOM.findDOMNode(this.customSelect);
		if ((!domNode || !domNode.contains(event.target))) {
			this.setState({
				activeState: false
			});
		}
	};

	componentWillUnmount() {
		document.removeEventListener('click', this.outsideClickHandler, false);
	}

	componentDidMount () {
		document.addEventListener('click', this.outsideClickHandler, false);
	};

	openerClickHandler(item) {
		this.setState({
			activeState: !this.state.activeState
		});
	}

	optionClickHandler(item, id) {
		this.props.onChangeId(item, id);
	}

	render() {
		return (
			<div className={'custom-select' + (this.state.activeState ? ' active' : '')}
				ref={(customSelect) => { this.customSelect = customSelect; }}>
				<span className='opener'
					onClick={this.openerClickHandler.bind(this, this.props.item)}>{this.props.item.id}</span>
				<ul className='drop'>
					{this.props.store.storeItems.map((obj, index) =>
						<li key={index}
							onClick={this.optionClickHandler.bind(this, this.props.item, obj.id)}
							className={obj.id === this.props.item.id ? 'active' : ''}>{obj.id}</li>
					)}
				</ul>
			</div>
		)
	}
}

export default connect(
	state => ({
		store: state.appState
	}),
	dispatch => ({
		onChangeId: (item, id) => {
			dispatch({ type: 'ItemChangeId', item, id})
		}
	})
)(CustomSelect);