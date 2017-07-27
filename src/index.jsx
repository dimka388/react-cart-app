'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import reducer from './reducers';
import Styles from './styles.scss';
import HeaderComponent from './header-component/index';
import TextBlockComponent from './text-block-component/index';
import CartComponent from './cart-component/index';
import FooterComponent from './footer-component/index';

const store = createStore(reducer);

const App = () => (
	<Provider store={store}>
		<div className={Styles.wrapper}>
			<HeaderComponent/>
			<TextBlockComponent/>
			<CartComponent/>
			<FooterComponent/>
		</div>
	</Provider>
);

ReactDOM.render(<App/>, document.getElementById('app'));