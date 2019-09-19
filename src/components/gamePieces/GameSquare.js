import React from 'react';

const GameSquare = ({ cordinates }) => {
    return (
        <div style={cordinates} className='game-square'></div>
    )
}

export default GameSquare;