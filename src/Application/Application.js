import './Application.css';
// import { CookiesProvider, useCookies } from "react-cookie";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function Application() {
    const [info, setInfo] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        gender: ''
    })
    function handleChange(event) {
        setInfo({ ...info, [event.target.name]: event.target.value })
    }
    return (
        <div className='Abody'>
            <div className='Atotal'>
                <nav className='Anav'>
                    <div>
                        <h1 className='Alogo2'><h1 className='Alogo1'>Pet</h1>Adoption</h1>
                    </div>
                    <div className='ALinkHolder'>
                        <div className='ALinkH'><Link to={"/"} className='ALink'>Home</Link></div>
                        <div className='ALinkH'><Link className='ALink'>My Profile</Link></div>
                        <div className='ALinkH'><Link className='ALink'>Contact Us</Link></div>
                        <div className='ALinkH'><Link className='ALink'>Log Out</Link></div>
                    </div>
                </nav>
                <section className='Asec'>
                    <form action="/" method="post" className='Aff2' >
                        <div className='Atitle'>
                            <h2>Application</h2>
                        </div>
                        <div className='Aflp'>
                            <label className='Alabel' for="">UserName: </label>
                            <input className='Ain' placeholder='UserName' name="email" id='email' type='text' required onChange={handleChange} />
                        </div>
                        <div className='Aflp'>
                            <label className='Alabel' for="">Name: </label>
                            <input className='Ain' placeholder='Name' name="name" id='name' type='text' required onChange={handleChange} />
                        </div>
                        <div className='Aflp'>
                            <label className='Alabel' for="">Phone: </label>
                            <input className='Ain' placeholder='Phone' id='phone' name='phone' type='text' required onChange={handleChange} />
                        </div>
                        <div className='Aflp'>
                            <label className='Alabel' for="">Gender: </label>
                            <select className='Ain' placeholder='Gender' id='gender' name="gender" required onChange={handleChange}>
                                <option value="student" selected>Male</option>
                                <option value="associate">Female</option>
                                <option value="bachelor">Other</option>
                            </select>
                        </div>
                        <button className='Abutt' type='submit' >Submit</button>
                    </form>
                </section>
            </div>
        </div>
    );
}

export default Application;