import './App.css'
import Card from "./Components/Card/Card.tsx";
import CardDeck from "./lib/CardDeck.ts";
import {useState} from "react";

const cardDeck = new CardDeck();


const App = () => {
  const [hand, setHand] = useState<Card[]>([]);
  const getFiveCards = () => {
      setHand(cardDeck.getCards(5));
  };

  return (
      <>
        <h4>Cards: {cardDeck.deck.length}</h4>
        <hr/>
        {cardDeck.deck.length < 5 ?
            null
            :
            <button onClick={getFiveCards}>Get Cards</button>}
        <hr/>
        <div className="playingCards faceImages">
          {hand.map((card) => (
              <Card key={card.rank + card.suit} rank={card.rank} suit={card.suit}
              />
          ))}
        </div>

      </>
  )
};

export default App
