import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
  return (

    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}
function formatDate(date) {
  return date.toLocaleDateString();
}
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

const Newname={
  text:'DEMO 1 ',
  date: new Date(),
  note:'abc',
  author:{
    name:'Vĩnh',
    address:'Vietnam',
  
  }
}
 
class Board extends React.Component {
  constructor() {
    super();
    this.state = {
      squares: Array(9).fill(null),
      xNext: true,
    };
  }

  handleClick(i) {
    const squares1 = this.state.squares.slice();
    if(calculateWinner(squares1)|| squares1[i])
    {return;}
    squares1[i] = this.state.xNext ?'X' : 'O';
    this.setState({
      squares: squares1,
      xNext: !this.state.xNext,
    });
  }

  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]} 
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
        const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xNext ? 'X' : 'O');
       }
    return (
      <div className="align">
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game" >
        <div >
         <div> {this.props.text}</div>
         <div>Thực hiện: {Newname.author.name}</div>
         <div>Ghi chú: {this.props.note}</div>
         <div>{formatDate(this.props.date)}</div>
        </div>

      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  < Board 
   
   />,
  document.getElementById('root')
);

ReactDOM.render(
  < Game 
 text={Newname.text}
 date={Newname.date}
 note={Newname.note}
  />,
  document.getElementById('dfd')
);
