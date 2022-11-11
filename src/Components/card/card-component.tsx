import React from 'react';
import "./card.styles.css";

export type Monster = {
    id: string;
    name: string;
    email: string;
};
type cardProps = {
    monster: Monster
}

const Card = ({ monster }: cardProps) => {
    const { id, name, email } = monster;
    return (
        <div className="card-container" key={id}>
            <img
                alt={`monster ${name}`}
                src={`https://robohash.org/${id}?set=set2&size=180x180`}
            />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
}

export default Card;