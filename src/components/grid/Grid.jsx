// Grid

import PropTypes from 'prop-types';
import React from 'react';

// Styles
import './styles.scss';

// Prop Types
const propTypes = {
    children: PropTypes.node.isRequired
};

const Grid = ({ children }) => (
    <div className="grid">
        { children }
    </div>
);

Grid.propTypes = propTypes;

export default Grid;
