// Card Accent Copy

import PropTypes from 'prop-types';
import React from 'react';

// Constants
import variantConstants from './constants';

// Styles
import './styles.scss';

// Default Props
const defaultProps = {
    variants: [variantConstants.medium]
};

// Prop Types
const propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node,
        PropTypes.number
    ]).isRequired,
    variants: PropTypes.instanceOf(Array)
};

const CardAccentCopy = ({
    children,
    variants
}) => {
    const getVariants = () => {
        return variants.map(variant => `card__accentCopy--${variantConstants[variant]} `).join('');
    };

    return (
        <div className={`card__accentCopy ${getVariants()}`}>
            { children }
        </div>
    );
};

CardAccentCopy.defaultProps = defaultProps;
CardAccentCopy.propTypes = propTypes;
CardAccentCopy.variants = variantConstants;

export default CardAccentCopy;
