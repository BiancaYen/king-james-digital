// Card Footer

import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

// Components
import Button from '../button/Button';
import ImagePlaceholder from '../image-placeholder/ImagePlaceholder';

// Constants
import statuses from '../../constants/index';

// Images
import images from '../../images/index';

// Styles
import './styles.scss';

// Prop Types
const propTypes = {
    brandLabel: PropTypes.string.isRequired,
    portfolioManagerBrandCode: PropTypes.string.isRequired,
    showLogo: PropTypes.bool.isRequired,
    status: PropTypes.string.isRequired
};

const CardFooter = ({
    brandLabel,
    portfolioManagerBrandCode,
    showLogo,
    status
}) => {
    const [isBrokenImage, setIsBrokenImage] = useState(false);

    const handleImageError = () => {
        if (!isBrokenImage) {
            setIsBrokenImage(true);
        }
    };

    useEffect(() => {
        if (!images[portfolioManagerBrandCode]) {
            setIsBrokenImage(true);
        }
    }, [portfolioManagerBrandCode]);

    if (status === statuses.incomplete) {
        return (
            <Button onClick={() => alert('Resume Application')}>
                Resume Application
            </Button>
        );
    }

    if (status === statuses.open && showLogo) {
        return (
            <div className="card__footerImage">
                portfolio managed by
                {
                    !isBrokenImage
                        ? (
                            <img
                                src={images[portfolioManagerBrandCode]}
                                alt={portfolioManagerBrandCode}
                                onError={handleImageError}
                            />
                        )
                        : <ImagePlaceholder alternativeText={brandLabel} />
                }
            </div>
        );
    }

    return null;
};

CardFooter.propTypes = propTypes;

export default CardFooter;
