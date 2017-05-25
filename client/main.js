// import someDefault, { greetUser, name } from './../imports/utils.js';

// console.log('Log from /client/name.js');

// console.log(name);
// console.log(someDefault());

import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

import { Players, calculatePlayerPositions } from './../imports/api/players';
// import TitleBar from './../imports/ui/TitleBar';
// import AddPlayer from './../imports/ui/AddPlayer';
// // import Player from './../imports/ui/Player';
// import PlayersList from './../imports/ui/PlayersList';
import App from './../imports/ui/App';

// const renderPlayers = (playersList) => {

//     return playersList.map((player) => {
//         return <Player key={player._id} player={player}/>
//         /*return (
//             <div key={player._id}>
//                 <p>
//                     {player.name} has {player.score} points.
//                     <button onClick={()=> {
//                             return Players.update({_id: player._id}, {$inc: {"score": 1}});
//                         }
//                     }>+1</button>
//                     <button onClick={()=> {
//                             return Players.update({_id: player._id}, {$inc: {"score": -1}});
//                         }
//                     }>-1</button>
//                     {/* You can target an id by only passing that id as the first argument for update and remove /}
//                     <button onClick={()=> {
//                             return Players.remove(player._id);
//                         }
//                     }>X</button>
//                     </p>
//             </div>
//         )*/
//     });
// };
 
Meteor.startup(() => {
    // call tracker autorun
        // create variable called players -> set equal to fetch query
        // render players to the screen

    Tracker.autorun(()=>{
        let name = 'Nathan',
            title = 'Account Settings',
            subtitle = 'Created by Nathan Minarik',
            players = Players.find({}, {sort: {score: -1}}).fetch(),
            positionPlayers = calculatePlayerPositions(players)

        /*let jsx = (
            <div>
                <App />
                {/*<h1>{title}</h1>
                <p>This is from {name}</p>
                <p>This is my second p.</p>/}
                {/*<TitleBar title={title} subtitle={subtitle} />
                {/*{renderPlayers(players)}/}
                <PlayersList players={players}/>
                {/*<AddPlayer score={10}/>/}
                <AddPlayer score/>/}
            </div>
        );*/
        
        // ReactDOM.render(jsx, document.getElementById('app'));
        ReactDOM.render(<App title={title} players={positionPlayers} subtitle={subtitle} />, document.getElementById('app'));
    });
});