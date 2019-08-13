// Radial

import PropTypes from 'prop-types';
import React from 'react';

// Styles
import './styles.scss';

// Prop Types
const propTypes = {
    percentageComplete: PropTypes.number.isRequired
};

const Radial = ({ percentageComplete }) => {
    // Start at 270 since 90deg of the circle is not represented
    const degrees = 270 * percentageComplete / 100;
    const isComplete = percentageComplete === 100;

    const getStylingTransform = (value) => {
        return `rotateZ(${value}deg)`;
    };

    const getStyles = () => {
        const styles = {
            sectionStart: getStylingTransform(-180),
            sectionEnd: getStylingTransform(-180),
            markerStart: 0,
            markerEnd: 0
        };

        if (degrees > 0) {
            styles.markerStart = 1;
        }

        if (degrees > 0 && degrees < 180) {
            styles.sectionStart = getStylingTransform(-180 + degrees);
        }

        if (degrees > 180) {
            styles.sectionStart = getStylingTransform(0);
            styles.sectionEnd = getStylingTransform(degrees);
        }

        if (degrees === 270) {
            styles.markerEnd = 1;
        }

        return styles;
    };

    return (
        <div className="radial__wrapper">
            <div className="radial__percentage">
                { percentageComplete}
                <span>%</span>
            </div>
            <div className="radial__innerWrapper">
                <div className="radial__section radial__section--start">
                    <div />
                </div>
                <div className="radial__section radial__section--end">
                    <div />
                </div>
                <div className="radial__marker radial__marker--start" />
                <div className="radial__marker radial__marker--end" />
            </div>
            <div className={`radial__innerWrapper radial__progress ${isComplete && 'radial__progress--complete'}`}>
                <div className="radial__section radial__section--start">
                    <div style={{ transform: `${getStyles().sectionStart}` }} />
                </div>
                <div className="radial__section radial__section--end">
                    <div style={{ transform: `${getStyles().sectionEnd}` }} />
                </div>
                <div
                    className="radial__marker radial__marker--start"
                    style={{ opacity: `${getStyles().markerStart}` }}
                />
                <div
                    className="radial__marker radial__marker--end"
                    style={{ opacity: `${getStyles().markerEnd}` }}
                />
            </div>
        </div>
    );
};

Radial.propTypes = propTypes;

export default Radial;
