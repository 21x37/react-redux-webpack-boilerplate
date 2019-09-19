import React from 'react';
import { connect } from 'react-redux';

class SnakeBody extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const cordinates = this.props.playerPositions.reverse()[this.props.index]

        const headPosition = {
            position: 'relative',
            left: 25,
            top: 0
        }

        return (
            <div className='player' style={headPosition} ></div>
        )
    }
}

const mapStateToProps = (state) => ({
    playerPositions: state.playerPositions
})

export default connect(mapStateToProps)(SnakeBody);