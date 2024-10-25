import * as React from "react";
import {ICard} from "../../types.ts";


const Card: React.FC <ICard> = ({rank, suit}) => {
    const suits: {[key: string]: string} = {
        diams: '♦',
        hearts: '♥',
        clubs: '♣',
        spades: '♠'
    };
    return (
        <div>
            <span className={`card rank-${String(rank).toLowerCase()} ${suit}`}>
                <span className="rank">{rank}</span>
                <span className="suit">{suits[suit]}</span>
            </span>
        </div>
    );
};

export default Card;