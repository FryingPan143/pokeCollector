import SummaryCard from "./SummaryCard"

export default function SummaryList(props) {
    console.log(props)
    return (
        props.results.map((res) => (
            <SummaryCard result={res} />
        ))
    )
}