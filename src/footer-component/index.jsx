'use strict';

import React, { Component } from 'react';
import Styles from './footer.scss';

class FooterComponent extends Component {
	render() {
		return (
			<footer className={Styles.footer}>
				<p>Adyax specializes in working with multi-national, multi-brand companies on a wide range of customer, client and employee-facing solutions.</p>
			</footer>
		)
	}
}

export default FooterComponent;