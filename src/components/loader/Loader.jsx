// Loader

import PropTypes from 'prop-types';
import React from 'react';

// Styles
import './styles.scss';

// Prop Types
const propTypes = {
    children: PropTypes.node.isRequired,
    isLoading: PropTypes.bool.isRequired
};

const Loader = ({ isLoading, children }) => {
    if (isLoading) {
        return (
            <div className="spinner__wrapper">
                <div className="spinner">
                    <div />
                    <div />
                    <div />
                </div>
            </div>
        );
    }
    return <div>{children}</div>;
};

Loader.propTypes = propTypes;

export default Loader;
