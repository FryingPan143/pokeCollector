import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from '../Components/Header';
import TrainerForm from '../Components/TrainerForm';

export default function Home() {


    return (
        <section className="home-page">
            <Header />
            <nav className='navbar'>
                <h1>Set your Trainer</h1>
            </nav>

            <div>
                <TrainerForm />
            </div>
        </section>
    )
}