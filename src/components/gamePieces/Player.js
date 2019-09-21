import React from 'react';
import { connect } from 'react-redux';
import { updateCordinates, saveLastPosition } from '../../actions/cordinates';
import SnakeBody from './SnakeBody';



class Player extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            headCordinates: {
                left: 0,
                top: 0
            },
            intervals: {
                down: '',
                right: '',
                up: '',
                left: ''
            }
        }
        
        this.clearIntervals = this.clearIntervals.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
    }
    componentDidMount() {
        document.addEventListener("keydown", this.onKeyDown, false);
    }
    clearIntervals() {
        const intervals = Object.values(this.state.intervals);
        intervals.forEach((interval) => {
            clearInterval(interval);
        })
    }
    setInterval({ direction }) {
        this.clearIntervals();
        const interval = setInterval(() => {
            console.log(direction);
        }, 150)

        this.setState((prevState) => {
            return {
                intervals: {
                    ...prevState.intervals,
                    [direction]: interval
                }
            }
        })

    }
    onKeyDown(e) {
        switch (e.keyCode) {
            case 40: //d
                return this.setInterval({ direction: 'down' })
            case 39: //r
                return this.setInterval({ direction: 'right' })
            case 38: //u
                return this.setInterval({ direction: 'up' })
            case 37: //l
                return this.setInterval({ direction: 'left' })
        }
    }
    render() {
        console.log(this.state);
        return (
            <div style={this.state.headPosition} className='player'></div>
        )
    }
}



// class Player extends React.Component {
//     constructor(props) {
//         super(props);
//         // Player position
//         this.state = {
//             headPosition: {
//                 position: 'relative',
//                 left: 0,
//                 top: 0
//             },
//             intervals: {
//                 moveLeftInterval: '',
//                 moveRightInterval: '',
//                 moveDownInterval: '',
//                 moveUpInterval: ''
//             }
//         }

//         this.clearIntervals = this.clearIntervals.bind(this);
//         this.moveLeft = this.moveLeft.bind(this);
//         this.moveRight = this.moveRight.bind(this);
//         this.moveDown = this.moveDown.bind(this);
//         this.moveUp = this.moveUp.bind(this);
//         this.onKeyDown = this.onKeyDown.bind(this);
//     }
//     componentDidMount() {
//         document.addEventListener("keydown", this.onKeyDown, false);
//     }
//     componentWillUnmount(){
//         document.removeEventListener("keydown", this.onKeyDown, false);
//     }
//     clearIntervals() {
//         const intervals = Object.values(this.state.intervals);

//         intervals.forEach((interval) => {
//             if (interval) {
//                 clearInterval(interval);
//                 this.setState(() => {
//                     return {
//                         intervals: {
//                             moveLeftInterval: '',
//                             moveRightInterval: '',
//                             moveDownInterval: '',
//                             moveUpInterval: ''
//                         }
//                     }
//                 })
//             }
//         })
//     }
//     getLastPositions(headPosition) {
//         const newArr = [ headPosition ];
//         for (let i = 0; i < this.state.lastHeadPositions.length ; i++) {
//             newArr.push(this.state.lastHeadPositions[i])
//         }
    
//         return newArr;
//     }
//     async moveLeft() {
//         const moveLeftInterval = setInterval( async () => {
//             await this.setState((prevState) => {
//                 const headPosition = {
//                     position: 'relative',
//                     left: prevState.headPosition.left - 25,
//                     top: prevState.headPosition.top
//                 }

//                 this.props.updateCordinates(headPosition)

//                 return {
//                     headPosition
//                 }
//             })

//         }, 150)

//         this.setState((prevState) => {
//             return {
//                 intervals: {
//                     ...prevState.intervals,
//                     moveLeftInterval
//                 }
//             }
//         })
//     }
//     async moveRight() {
//         const moveRightInterval = setInterval( async () => {
//             await this.setState((prevState) => {
                
//                 const headPosition = {
//                     position: 'relative',
//                     left: prevState.headPosition.left + 25,
//                     top: prevState.headPosition.top
//                 }
//                 this.props.updateCordinates(headPosition)
//                 return {
//                     headPosition
//                 }
//             })

//         }, 150);

//         this.setState((prevState) => {
//             return {
//                 intervals: {
//                     ...prevState.intervals,
//                     moveRightInterval
//                 }
//             }
//         })
//     }
//     async moveDown() {
//         const moveDownInterval = setInterval( async () => {
//             await this.setState((prevState) => {
//                 const headPosition = {
//                     position: 'relative',
//                     left: prevState.headPosition.left,
//                     top: prevState.headPosition.top + 25
//                 }
//                 this.props.updateCordinates(headPosition)
//                 return {
//                     headPosition
//                 }
//             })

//         }, 150)

//         await this.setState((prevState) => {
//             return {
//                 intervals: {
//                     ...prevState.intervals,
//                     moveDownInterval
//                 }
//             }
//         })
//     }
//     async moveUp() {
//         const moveUpInterval = setInterval( async () => {
//             await this.setState((prevState) => {
//                 const headPosition = {
//                     position: 'relative',
//                     left: prevState.headPosition.left,
//                     top: prevState.headPosition.top - 25
//                 }
//                 this.props.updateCordinates(headPosition)
//                 return {
//                     headPosition
//                 }
//             })

//         }, 150)

//         this.setState((prevState) => {
//             return {
//                 intervals: {
//                     ...prevState.intervals,
//                     moveUpInterval
//                 }
//             }
//         })
//     }
//     async onKeyDown(e) {
//         switch (e.keyCode) {
//             case 40:
//                 this.props.saveLastPosition(this.state.headPosition);
//                 this.clearIntervals();
//                 return this.moveDown();
//             case 39:
//                 this.props.saveLastPosition(this.state.headPosition);
//                 this.clearIntervals();
//                 return this.moveRight();
//             case 38:
//                 this.props.saveLastPosition(this.state.headPosition);
//                 this.clearIntervals();
//                 return this.moveUp();
//             case 37:
//                 this.props.saveLastPosition(this.state.headPosition);
//                 this.clearIntervals();
//                 return this.moveLeft();
//         }
//     }
//     render() {
//         return (
//             <div style={this.state.headPosition} className='player'>
//                 {this.props.snakeLength.length > 0 && this.props.snakeLength.map((elem, index) => {
//                     if (this.props.snakeLength.length > 5) {
//                         s;ldfka;sldfkasl;dfkasdf

//                     }
//                     return (
//                         <SnakeBody index={index}/>
//                     )
//                 })}
//             </div>
//         );
//     };
// } 

const mapDispatchToProps = (dispatch) => ({
    updateCordinates: (cordinates) => dispatch(updateCordinates(cordinates)),
    saveLastPosition: (cordinates) => dispatch(saveLastPosition(cordinates))
})

export default connect(null, mapDispatchToProps)(Player);