import React, { useState } from 'react';
import styles from './styles.module.css';

const RandomizerComponents = props => {
    
    const playerOrder = [1, 2, 3]
    const sixSidedDieArray = ['1', '2', '3', '4', '5', '6'];
    const coinFlipArray = ['Heads', 'Tails'];

    let randomPlayerOrder
    let randomDieRoll
    let randomCoinFlip

    console.log(props.numPlayers);

    function firstPlayer() {
        randomPlayerOrder = playerOrder[Math.floor(Math.random() * playerOrder.length)];
    }

    const submitRandomHandler = e => {
        e.preventDefault();
        firstPlayer();
        alert (`${randomPlayerOrder} player goes first`);
    };

    function dieRoll() {
        randomDieRoll = sixSidedDieArray[Math.floor(Math.random() * sixSidedDieArray.length)];
    }

    const submitDieHandler = e => {
        e.preventDefault();
        dieRoll();
        alert (`The d6 rolls a ${randomDieRoll}`);
    };
    
    function flipACoin() {
        randomCoinFlip = coinFlipArray[Math.floor(Math.random() * coinFlipArray.length)];
    }

    const submitCoinHandler = e => {
        e.preventDefault();
        flipACoin();
        alert (`The coin lands on ${randomCoinFlip}`);
    };

    return (
    <div className={styles.randomizerButtonsDiv}>
        <button className={styles.randomizerButtonActual} onClick={submitRandomHandler}>Randomize Starting Player</button>
        <button className={styles.randomizerButtonActual} onClick={submitDieHandler}>Roll a d6</button>
        <button className={styles.randomizerButtonActual} onClick={submitCoinHandler}>Flip a coin</button>
    </div>
    )
};

export default RandomizerComponents;