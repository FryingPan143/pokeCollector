import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTrainer, removeTrainer } from '../actions/actions';
import { useNavigate } from "react-router-dom";

export default function TrainerForm() {

    const [trainer, setTrainer] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function setName(event) {

        setTrainer(trainer => {
            return {
                //returnerar hela trainerobjektet för att inte förlora eventuella properties när det ändras enbart i name propertyn.
                ...trainer,
                name: event.target.value
            }
        })

    }

    function setSex(event) {
        setTrainer(trainer => {
            return {
                ...trainer,
                sex: event.target.value
            }
        })
    }


    function handleClick() {
        dispatch(addTrainer(trainer))
        //skickar trainer till reducern via dispatch
    }

    function handleRemove() {
        dispatch(removeTrainer())
    }

    function goToCollection() {
        navigate("/Collection")
    }
    return (

        <section className="trainer-form">
            <h1>Name:</h1>
            <input className="tf-input" onChange={event => setName(event)} />
            <br />
            <input type="radio" value="male" id="male"
                onChange={event => setSex(event)} name="gender" />
            <label htmlFor="male">&#9794;  </label>

            <input type="radio" value="female" id="female"
                onChange={event => setSex(event)} name="gender" />
            <label htmlFor="female">&#9792; </label>
            <br />
            <button className='tf-btn' onClick={handleClick}>Set Trainer</button>
            <button className='tf-btn' onClick={handleRemove}>Remove Trainer</button>
            <button className='tf-btn' onClick={goToCollection}>GO!</button>
        </section>

    )
}