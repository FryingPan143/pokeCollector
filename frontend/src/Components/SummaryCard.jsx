export default function SummaryCard(props) {
    console.log(props)
    return (
        <article className="summary-card">
            <h1 className="sc-name">{props.result.name}</h1>
            <img className="sc-img" src={props.result.picture} />
            <h2 className="sc-amount">{props.result.amount}</h2>

        </article>
    )
}