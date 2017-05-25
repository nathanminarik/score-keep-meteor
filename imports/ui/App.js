import React from 'react';

import TitleBar from './TitleBar';
import AddPlayer from './AddPlayer';
// import Player from './Player';
import PlayersList from './PlayersList';

export default class App extends React.Component {
    render () {
        return (
            <div>
                {/*<h1>{title}</h1>
                <p>This is from {name}</p>
                <p>This is my second p.</p>*/}
                <TitleBar title={this.props.title} subtitle={this.props.subtitle} />
                {/*{renderPlayers(players)}*/}
                <PlayersList players={this.props.players}/>
                {/*<AddPlayer score={10}/>*/}
                {/*<AddPlayer score/>*/}
            </div>
        )
    }
}

App.propTypes = {
    title: React.PropTypes.string.isRequired,
    subtitle: React.PropTypes.string.isRequired,
    players: React.PropTypes.array.isRequired,
}