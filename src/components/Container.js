import PropTypes from 'prop-types';
import React from 'react';
import { css, StyleSheet } from 'aphrodite/no-important';

import defaults from '../theme';
import { deepMerge } from '../utils';

function Container ({ ...props }, { theme }) {
	const classes = StyleSheet.create(deepMerge(defaultStyles, theme));

	return (
		<div
			className={"contaienrLightBox " + css(classes.container)}
			{...props}
		/>
	);
}

Container.contextTypes = {
	theme: PropTypes.object.isRequired,
};

const defaultStyles = {
	container: {
		alignItems: 'center',
		backgroundColor: defaults.container.background,
		boxSizing: 'border-box',
		display: 'flex',
		height: '100%',
		justifyContent: 'center',
		left: 0,
		paddingBottom: defaults.container.gutter.vertical,
		paddingLeft: defaults.container.gutter.horizontal,
		paddingRight: defaults.container.gutter.horizontal,
		paddingTop: defaults.container.gutter.vertical,
		position: 'fixed',
		top: 0,
		width: '100%',
		zIndex: defaults.container.zIndex,
	},
};

module.exports = Container;
