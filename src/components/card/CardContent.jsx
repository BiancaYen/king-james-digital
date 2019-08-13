// Card Content

import PropTypes from 'prop-types';
import React from 'react';

// Components
import AcceptCopy from './CardAccentCopy';
import Badge from '../badge/Badge';
import Button from '../button/Button';
import Radial from '../radial/Radial';

// Constants
import statuses from '../../constants/index';

// Icons
import RemoveIcon from '../../icons/RemoveIcon';

// Styles
import './styles.scss';

// Prop Types
const propTypes = {
    availableMarketValue: PropTypes.number.isRequired,
    currencySymbol: PropTypes.string.isRequired,
    funds: PropTypes.instanceOf(Array).isRequired,
    inceptionDate: PropTypes.string.isRequired,
    marketValue: PropTypes.number.isRequired,
    percentageComplete: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired
};

const CardContent = ({
    availableMarketValue,
    currencySymbol,
    funds,
    inceptionDate,
    marketValue,
    percentageComplete,
    status
}) => {
    const formatValue = (value) => {
        return value.toFixed(2);
    };

    if (status === statuses.incomplete) {
        return (
            <div className="card__content">
                <Radial percentageComplete={percentageComplete} />
                <div className="card__copy card__copy--large">
                    Almost there!&nbsp;
                    <span className="card__copy--emphasis">
                        {percentageComplete}
                    </span>
                    % done with your application
                    <hr />
                    <div className="card__inlineWrapper">
                        Pick up where you left
                        <br />
                        off or
                        <Button
                            icon={<RemoveIcon />}
                            variant={Button.variants.secondary}
                            onClick={() => alert('Cancel')}
                        >
                            Cancel
                        </Button>
                    </div>
                </div>
            </div>
        );
    }

    if (status === statuses.pending) {
        return (
            <div className="card__content">
                <Radial percentageComplete={percentageComplete} />
                <div className="card__copy card__copy--large">
                    Well Done! We have all the information we need.
                    <hr />
                    Your investment is currently pending.
                </div>
            </div>
        );
    }

    return (
        <div className="card__content card__content--vertical">
            Total value:
            <AcceptCopy variants={[AcceptCopy.variants.large]}>
                { currencySymbol }
                { formatValue(marketValue) }
            </AcceptCopy>
            <div>
                Total available:
                <Badge />
            </div>
            <AcceptCopy>
                { currencySymbol }
                { formatValue(availableMarketValue) }
            </AcceptCopy>
            Total funds:
            <AcceptCopy>
                { funds.length }
            </AcceptCopy>
            <div>
                Investing since:
                <AcceptCopy variants={[AcceptCopy.variants.small, AcceptCopy.variants.inline]}>
                    { inceptionDate }
                </AcceptCopy>
            </div>
            <Button onClick={() => alert('View Func')}>
                View Fund
            </Button>
        </div>
    );
};

CardContent.propTypes = propTypes;

export default CardContent;
