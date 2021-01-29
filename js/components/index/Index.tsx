import React, {useState} from "react";

import "../../../scss/main.scss";
import TimerContainer from "../../wrappedComponents/TimerContainer";

export default function Index(props) {

    const {index} = props;
    const {cards} = index;
    const [openCards, setOpenCards] = useState<any>([]);
    // const shuffle = (arr) => {
    //     return arr.sort(() => Math.round(Math.random() * 100) - 50);
    // }
    const [gameCards, setGameCards] = useState(cards);
    const [isStart, setStart] = useState(false);
    let [score, setScore] = useState(0);
    let [cardsCounter, setCardsCounter] = useState(gameCards.length);
    let [stepCounter, setStepCounter] = useState(0);
    // let [gameEnd, setGameEnd] = useState(false);

    const renderCards = () => {
        const checkOpenCard = (card) => {
            if (openCards.indexOf(card) !== -1) {
                return card.front;
            } else {
                return card.back;
            }
        }

        let tmp: any[] = [];
        let array: any[] = [];
        const renderCard = cards => {
            return cards.map((card, key) => {
                if (card.hasOwnProperty("name")) {
                    return (
                        <img className="card__item" key={key} onClick={() => {
                            checkCards(card)

                        }}
                             src={checkOpenCard(card)}/>
                    )
                } else {
                    return <div key={key} className="card__item"></div>
                }

            })
        }
        const renderCardInString = (arr) => {
            return (
                arr.map((splitArrayCards, key) => {
                    return (
                        <div key={key} className="card__wrapper">
                            {renderCard(splitArrayCards)}
                        </div>
                    )
                }))
        }

        gameCards.map((card) => {

            if (tmp.length === 6) {
                array.push(tmp);
                tmp = [];
            }
            // else {
            //     array.push(card)
            // }
            tmp.push(card);

        })
        return (
            <>
                <div className="card">
                    {renderCardInString(array)}
                </div>
            </>
        )
    }
    const checkCards = (card) => {
        if (openCards.length < 1) {
            setOpenCards([...openCards, card]);
        } else {
            setOpenCards([...openCards, card]);
            setStepCounter(stepCounter += 1)
            if (openCards[0].name !== card.name) {
                setTimeout(() => {
                    setOpenCards([])
                }, 1500)

            } else {
                setTimeout(() => {
                    gameCards.splice(gameCards.indexOf(openCards[0]), 1, " ");
                    gameCards.splice(gameCards.indexOf(card), 1, " ");
                    setGameCards([...gameCards, gameCards]);
                    setOpenCards([])
                }, 500);
                setScore(score += 3);
                setCardsCounter(cardsCounter -= 2);

                if (cardsCounter === 0) {
                    // setGameEnd(!gameEnd);
                    props.setGameData("isEndGame", !props.isEndGame);
                    setStart(!isStart);
                }
            }
        }
    }


    return (
        <div className="user-action__wrapper">
            <button
                onClick={() => setStart(!isStart)}
            >{isStart ? "Stop" : "Start"}</button>
            {isStart && <TimerContainer/>}
            {index.isEndGame && <p>Игра окончена </p>}
            {isStart && <p>Score : {score}</p>}
            {isStart && <p>Step: {stepCounter}</p>}
            {isStart && <div className="card-container">
                {renderCards()}
            </div>}
        </div>
    )
}
