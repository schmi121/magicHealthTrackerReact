import React, { useState } from 'react';
import CommanderHealthTrackerTitle from "./components/CommanderHealthTitle/CommanderHealthTrackerTitle";
import styles from './styles.module.css';
import PlayerHealthTracker from './components/PlayerHealthTracker/PlayerHealthTracker';
import AddPlayersComponent from './components/AddPlayersComponent/AddPlayersComponent';
import RandomizerComponents from './components/Randomizers/RandomizerComponents';

function App() {
  const [playerArr, setPlayerArr] = useState([]);

  const initiatePlayers = num => {
      let array;
      if (num < 1) {
        array = [<PlayerHealthTracker />];
      } else {
          array = new Array(num).fill();
          for (let index in array) {
              array[index] = <PlayerHealthTracker key={index++} name={`Player ${index}`} />;
          }
      }
      setPlayerArr([...array]);
  };

  return (
    <React.Fragment>
      <CommanderHealthTrackerTitle />
      <div className={styles.randomizerButtons}>
      <RandomizerComponents /> 
      </div>
      <AddPlayersComponent initiate={initiatePlayers}/>
        <div className={styles.playerFlexContainer}> 
          {playerArr}
        </div>  
    </React.Fragment>
  );
}


export default App;