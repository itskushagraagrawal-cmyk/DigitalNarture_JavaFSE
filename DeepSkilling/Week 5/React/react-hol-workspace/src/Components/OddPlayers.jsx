import React from 'react';

export function OddPlayers({ players: [first, , third, , fifth] }) {
    return (
        <div>
            <li>First : {first}</li>
            <li>Third : {third}</li>
            <li>Fifth : {fifth}</li>
        </div>
    );
}
