import male from '../img/male.png'
import female from '../img/female.png'

export default function TrainerCard(props) {

    return (
        <article className="trainer-card">
            <h1 className='tc-name'>{props.trainer.name}</h1>
            <img className='trainer-img' src={(props.trainer.sex === 'male') ? male : female} />
        </article>
    )
}