import { changePokemon, addState } from '../actions/actions';
import { useSelector, useDispatch } from 'react-redux';
import { store } from '..';
import { useState } from 'react';


export default function PokeCard(props) {
    const dispatch = useDispatch()
    // const pokeState = useSelector(state => state);
    const [count, setCount] = useState(0);


    function increment(id) {
        let newCount = count + 1;
        setCount(newCount)
        dispatch(changePokemon(id, newCount))

    }

    function decrement(id) {
        //för att hindra minustal
        if (count <= 0) {
            let newCount = 0;
            setCount(newCount);
            dispatch(changePokemon(id, newCount))
        }
        else {
            let newCount = count - 1;
            setCount(newCount)
            dispatch(changePokemon(id, newCount))
        }

    }

    return (
        <article className="pokeCard">
            <div className='pc-header'>
                <div className={`pc-type type-${props.type}`}></div>
                <h2 className="pc-name">{props.name}</h2>
                <h5 className='pc-id'>#{props.id}</h5>
            </div>
            <img src={props.img} className="pc-image" />
            <div className='pc-amout-line'>
                <p className="pc-amount">{count}x</p>
            </div>
            <div className='pc-button-line'>
                <button className='pc-minus-btn' onClick={() => decrement(props.id)}>-</button>
                <button className='pc-add-btn' onClick={() => increment(props.id)}> +</button>
            </div>
        </article>
    )
}