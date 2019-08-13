// Card Meta

import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

// Components
import CardAccentCopy from './CardAccentCopy';

// Constants
import statuses from '../../constants/index';

// Styles
import './styles.scss';

// Prop Types
const propTypes = {
    funds: PropTypes.instanceOf(Array).isRequired,
    status: PropTypes.string.isRequired,
    updatedDate: PropTypes.string.isRequired
};

const CardContent = ({
    funds,
    status,
    updatedDate
}) => {
    if (status === statuses.incomplete) {
        return (
            <Fragment>
                <hr />
                Last Updated:
                <CardAccentCopy>
                    { updatedDate }
                </CardAccentCopy>
                Total funds:
                <CardAccentCopy>
                    { funds.length }
                </CardAccentCopy>
            </Fragment>
        );
    }

    if (status === statuses.pending) {
        return (
            <Fragment>
                <hr />
                Application submitted:
                <CardAccentCopy>
                    { updatedDate }
                </CardAccentCopy>
                Total funds:
                <CardAccentCopy>
                    { funds.length }
                </CardAccentCopy>
            </Fragment>
        );
    }

    return null;
};

CardContent.propTypes = propTypes;

export default CardContent;
