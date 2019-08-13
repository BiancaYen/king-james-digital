// Card

import PropTypes from 'prop-types';
import React from 'react';

// Components
import Content from './CardContent';
import Meta from './CardMeta';
import Footer from './CardFooter';
import IconPlaceholder from '../icon-placeholder/IconPlaceholder';

// Constants
import statuses from '../../constants/index';

// Icons
import icons from '../../icons/index';

// Styles
import './styles.scss';

// Prop Types
const propTypes = {
    availableMarketValue: PropTypes.number.isRequired,
    brokerNumber: PropTypes.number.isRequired,
    currencySymbol: PropTypes.string.isRequired,
    funds: PropTypes.instanceOf(Array).isRequired,
    percentageComplete: PropTypes.number.isRequired,
    productCode: PropTypes.string.isRequired,
    productLabel: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    updatedDate: PropTypes.string.isRequired
};

const Card = (props) => {
    const {
        brokerNumber,
        productCode,
        productLabel,
        status
    } = props;
    const HeadingIcon = icons[productCode] || IconPlaceholder;
    // Please note that I am not completely sure about this code
    const investorCode = status === statuses.open ? brokerNumber : 'TBC';

    return (
        <div className="card">
            <div className="card__header">
                <div className="card__headerIcon">
                    <HeadingIcon />
                </div>
                <div>
                    <h1 className="card__heading">
                        { productLabel }
                    </h1>
                    <h2 className="card__subHeading">
                        Investor Code:&nbsp;
                        <span>{investorCode}</span>
                    </h2>
                </div>
            </div>
            <Content {...props} />
            <div className="card__meta">
                <Meta {...props} />
            </div>
            <div className="card__footer">
                <Footer {...props} />
            </div>
        </div>
    );
};

Card.propTypes = propTypes;

export default Card;
