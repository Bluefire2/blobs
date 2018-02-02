import React, {Component} from 'react';
import Square from './square';

/**
 * props:
 *
 * width
 * height
 * color
 * clickHandler
 */
class ControlButton extends Component {
    render() {
        return (
            <div className="control-button">
                <Square {...this.props}/>
            </div>
        );
    }
}

export default ControlButton;