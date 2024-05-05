import React from 'react'
import "./home.css";
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div className='home d-flex justify-content-center align-items-center'>
            <div className="container d-flex justify-content-center align-items-center flex-column">
                <h1 className='text-center'>Organize your <br /> work and life, finally.
                </h1>
                <p>Become focused,
                    organized, and calm with <br /> todo app. The World's #1 task manager app.
                </p>
                <Link className='home-btn p-2' to="./todo">Make Todo List</Link>
            </div>
        </div>
    )
}

export default Home;