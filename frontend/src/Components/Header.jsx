import logo from '../img/logo.png'

export default function Header() {
    return (
        <section className="header">
            <img src={logo} />
            <h3>Gotta show em all</h3>
        </section>
    )
}