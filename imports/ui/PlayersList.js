import React from 'react';
import Player from './Player';
import AddPlayer from './AddPlayer';
import FlipMove from 'react-flip-move'

const renderPlayers = (players) => {
    return players.map((player) => {
        return <Player key={player._id} player={player}/>
    });
}

export default class PlayersList extends React.Component {

    renderPlayers () {

        if (this.props.players.length === 0) {
            return (
                <div className="item">
                    <p className="item__message item__message--empty ">Add your first player to get started</p>
                </div>
            )
        } else {
            return this.props.players.map((player) => {
                return <Player key={player._id} player={player}/>
            });
        }
    }
    render () {
        return (
            <div className="wrapper">
                {/*{renderPlayers(this.props.players)}*/}
                <FlipMove maintainContainerHeight={true}>
                    {this.renderPlayers(this.props.players)}
                </FlipMove>
                <AddPlayer />
                    {/*<h1>Test</h1>
                </AddPlayer>*/}
            </div>
        )
    }
 }

 PlayersList.propTypes = {
     players: React.PropTypes.array.isRequired
 }