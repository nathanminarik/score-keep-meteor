import React from 'react';
import { Players } from './../api/players';

export default class AddPlayer extends React.Component {

    handleSubmit(e) {
        let playerName = e.target.playerName.value,
        playerScore = e.target.playerScore.value || 0;
        // playerScore = this.props.score;
        e.preventDefault();
        
        if(playerName) {
            e.target.playerName.value = '';
            e.target.playerScore.value = '';
            Players.insert({name: playerName, score: parseInt(playerScore, 10)});
        }
    }

    render () {
        return (
            // {/* <form onSubmit={handleSubmit}>*/}
            // {/*<form onSubmit={this.handleSubmit.bind(this)}>*/}
            <div className="item">
                {/*{this.props.children}*/}
                <form className="form" onSubmit={this.handleSubmit}>
                    <input className="form__input" type="text" name="playerName" placeholder="Enter a Name"/>
                    <input className="form__input" type="text" name="playerScore" placeholder="Enter a score"/>
                    <button className="button">Add Player</button>
                </form>
            </div>
        )
    }
}

// const handleSubmit = (e) => {
//     let playerName = e.target.playerName.value,
//         playerScore = e.target.playerScore.value || 0;
//     e.preventDefault();

//     if(playerName) {
//         e.target.playerName.value = '';
//         e.target.playerScore.value = '';
//         Players.insert({name: playerName, score: parseInt(playerScore, 10)});
//     }
// }