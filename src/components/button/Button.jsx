// Button

import PropTypes from 'prop-types';
import React from 'react';

// Constants
import variantConstants from './constants';

// Styles
import './styles.scss';

// Default Props
const defaultProps = {
    icon: '',
    type: 'button',
    variant: variantConstants.primary,
    onClick: () => {}
};

// Prop Types
const propTypes = {
    children: PropTypes.string.isRequired,
    icon: PropTypes.node,
    type: PropTypes.oneOf([
        'button',
        'submit'
    ]),
    variant: PropTypes.string,
    onClick: PropTypes.func
};

const Button = ({
    children,
    icon,
    variant,
    type,
    onClick
}) => (
    <button
        className={`button button--${variantConstants[variant]}`}
        type={type}
        onClick={onClick}
    >
        <div>
            { children }
            {
                icon
                && (
                    <div className="button__iconWrapper">
                        { icon }
                    </div>
                )
            }
        </div>
    </button>
);

Button.defaultProps = defaultProps;
Button.propTypes = propTypes;
Button.variants = variantConstants;

export default Button;
