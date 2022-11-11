import React from 'react';
import Card from "../card/card-component";
import './card-list.styles.css';
import { Monster } from "../card/card-component";

type CardListProps = {
    monsters: Monster[]
}
const CardList = ({ monsters }: CardListProps) => (
    <div className="card-list" >
        {monsters.map((monster) => {
            return (
                <div key={monster.id}>
                    <Card monster={monster} />
                </div>
            )
        })}
    </div>
)

export default CardList;