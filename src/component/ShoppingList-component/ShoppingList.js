import React from 'react';
import { plantList } from '../../data/PlantList';
// const plantList = [
//     'monstera',
//     'ficus lyrata',
//     'pothos argenté',
//     'yucca',
//     'palmier'
// ]

const ShoppingList = () => {
    return (
        <ul>
            {plantList.map((plant) => (
                // <li>{plant}</li>
                <li key={ plant.id }>
                    {plant.name}
                 </li>
            ))}
        </ul>
    );
};

export default ShoppingList;