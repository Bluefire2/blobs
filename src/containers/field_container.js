import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {changeColor} from "../actions/index";
import Square from '../components/square';

/**
 * props:
 *
 * width
 * height
 */
class Field extends Component {
    generateSquares(data, width, height) {
        const squares = [];
        let i = 0;
        data.forEach(row => {
            row.forEach(elem => {
                i++;
                squares.push(
                    <Square width={width} height={height} color={elem} key={i}/>
                );
            });
        });
        return squares;
    }

    render() {
        const squareWidth = this.props.width / this.props.widthSquares,
            squareHeight = this.props.height / this.props.heightSquares;
            return (
            <div id="field" style={{
                width: this.props.width,
                height: this.props.height
            }}>
                {this.generateSquares(this.props.fieldSquares, squareWidth, squareHeight)}
            </div>
        );
    }
}

const mapStateToProps = ({fieldSquares}) => {
    return {
        fieldSquares,
        heightSquares: fieldSquares.length,
        widthSquares: fieldSquares[0].length
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        changeColor
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Field);
