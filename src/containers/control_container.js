import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {changeColor} from '../actions';
import ControlButton from '../components/control_button';
import COLORS from '../data/colors';

/**
 * props:
 *
 * width
 * height
 */
class Control extends Component {
    render() {
        const clickHandlerFromColor = color => {
            return () => this.props.changeColor(color);
        };
        return (
            <div id="control">
                {
                    // Need to map over keys rather than the object itself, because when you loop over an object the
                    // order is not guaranteed to be consistent. When you loop over keys it's also not always
                    // consistent, but this way I have access to the colour code itself, so I don't have to guess it
                    // from the index, which will be wrong if the order is wrong.
                    Object.keys(COLORS).map((key, index) =>
                            <ControlButton
                                key={index}
                                width={100}
                                height={100}
                                color={key}
                                clickHandler={clickHandlerFromColor(key)}/>
                    )
                }
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        changeColor
    }, dispatch);
};

export default connect(null, mapDispatchToProps)(Control);
