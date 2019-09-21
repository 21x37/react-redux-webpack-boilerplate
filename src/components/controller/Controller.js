import React from 'react';
import { connect } from 'react-redux';
import Player from '../gamePieces/Player';
import GameSquare from '../gamePieces/GameSquare';
import { updateCordinates } from '../../actions/cordinates';

class Controller extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gameSquareCordinates: {
                position: 'absolute',
                top: 100,
                left: 200
            },
            // Using array for easy .map in Player component
            snakeLength: []
        }

        this.getRandomInt = this.getRandomInt.bind(this);
        this.randomizeGameSquareCordinates = this.randomizeGameSquareCordinates.bind(this);
        this.addSnakeLength = this.addSnakeLength.bind(this);
        this.checkIfPlayerTouchedGameSquare = this.checkIfPlayerTouchedGameSquare.bind(this);
    }
    componentWillMount() {
        this.props.updateCordinates({ gameSquare: this.state.gameSquareCordinates })
    }
    getRandomInt() {
        const num = Math.floor(Math.random() * 16);
        return num * 25 + 50;
    }
    randomizeGameSquareCordinates() {
        const top = this.getRandomInt();
        const left = this.getRandomInt();

        setTimeout(() => {
            this.setState(() => {
                return {
                    gameSquareCordinates: {
                        //refactor position
                        position: 'absolute',
                        top,
                        left
                    }
                }
            })
        },100)
    }
    addSnakeLength() {
        var snakeLength = this.state.snakeLength.concat(1);
        setTimeout(() => {
            this.setState({ snakeLength })
        },100)

    }
    checkIfPlayerTouchedGameSquare() {
        const gameSquareCordinates = this.state.gameSquareCordinates;
        const playerCordinates = this.props.cordinates.player;

        if (playerCordinates) {
            if (gameSquareCordinates.top ==  playerCordinates.top && gameSquareCordinates.left == playerCordinates.left) {
                this.randomizeGameSquareCordinates();
                this.addSnakeLength();
            }
        }

    }
    render() {
        this.checkIfPlayerTouchedGameSquare();
        return (
            <div>
                <Player snakeLength={this.state.snakeLength}/>
                <GameSquare cordinates={this.state.gameSquareCordinates}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    cordinates: state.gamePieceCordinates
})

const mapDispatchToProps = (dispatch) => ({
    updateCordinates: (cordinates) => dispatch(updateCordinates(cordinates))
})

export default connect(mapStateToProps, mapDispatchToProps)(Controller);