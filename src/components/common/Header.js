// Created by steinitz on 07 Jul 2016

import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import LoadingDots from './LoadingDots';

const Header = ({loading}) => {
	return (
		<nav>
			<IndexLink
				to="/"
				activeClassName="active"
			>
				Home
			</IndexLink>
			{" | "}
			<Link
				to="/enquiry"
				activeClassName="active"
			>
				Enquiry
			</Link>
			{" | "}
			<Link
				to="/about"
				activeClassName="active"
			>
				About
			</Link>
			{loading &&
			<LoadingDots
				interval = {100}
				dots = {20} />}
		</nav>
	);
};

Header.propTypes = {
	loading: PropTypes.bool.isRequired
};

export default Header;
