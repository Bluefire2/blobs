import React from 'react';

import COLORS from '../data/colors';

/**
 * props:
 *
 * width
 * height
 * color
 * clickHandler (optional)
 */
const Square = ({width, height, color, clickHandler}) => {
    const MARGIN = 3,
        actualWidth = width - 2 * MARGIN,
        actualHeight = height - 2 * MARGIN,
        backgroundColor = COLORS[color];
    return (
        <div className="square" style={{
            margin: MARGIN,
            width: actualWidth,
            height: actualHeight,
            backgroundColor
        }}>

        </div>
    );
};

Square.defaultProps = {
    clickHandler: () => {} // empty handler
};

export default Square;