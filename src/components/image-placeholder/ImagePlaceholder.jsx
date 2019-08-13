// Image Placeholder

import PropTypes from 'prop-types';
import React from 'react';

// Styles
import './styles.scss';

// Prop Types
const propTypes = {
    alternativeText: PropTypes.string.isRequired
};

const ImagePlaceholder = ({ alternativeText }) => (
    <div className="imagePlaceholder">
        404: image not found
        <br />
        for&nbsp;
        {alternativeText}
    </div>
);

ImagePlaceholder.propTypes = propTypes;

export default ImagePlaceholder;
