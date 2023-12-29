import './Shelter.css';
// import { CookiesProvider, useCookies } from "react-cookie";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function Shelter() {
    const [info, setInfo] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        gender: ''
    })
    const members = [
            { name  : 'Khaled Mohamed'},
            { name  : 'Mohamed Aly'},
            { name  : 'Abdelrahman Ramadan'},
            { name  : 'Mohamed EL Nady'},
            { name  : 'Leonal Messi'},
            { name  : 'Cristiano Ronaldo'},
            { name  : 'Khaled Mohamed'},
            { name  : 'Mohamed Aly'},
            { name  : 'Abdelrahman Ramadan'},
            { name  : 'Mohamed EL Nady'},
            { name  : 'Leonal Messi'},
            { name  : 'Cristiano Ronaldo'},
            { name  : 'Khaled Mohamed'},
            { name  : 'Mohamed Aly'},
            { name  : 'Abdelrahman Ramadan'},
            { name  : 'Mohamed EL Nady'},
            { name  : 'Leonal Messi'},
            { name  : 'Cristiano Ronaldo'},
            { name  : 'Khaled Mohamed'},
            { name  : 'Mohamed Aly'},
            { name  : 'Abdelrahman Ramadan'},
            { name  : 'Mohamed EL Nady'},
            { name  : 'Leonal Messi'},
            { name  : 'Cristiano Ronaldo'},
    ]
    const details = {
            name : 'Bablicano',
            location: 'Smoha,Alexandria,Egypt',
            phonenumber: '01555226623',
            landline: '034812812',
            gmail: 'khaledmohamad362@gmail.com',
            face: 'PetAdoptaion page'
        }

    function handleChange(event) {
        setInfo({ ...info, [event.target.name]: event.target.value })
    }
    return (
        <div className='Sbody'>
            <div className='Stotal'>
                <nav className='Snav'>
                    <div>
                        <h1 className='Alogo2'><h1 className='Alogo1'>Pet</h1>Adoption</h1>
                    </div>
                    <div className='ALinkHolder'>
                        <div className='ALinkH'><Link className='ALink'>Home</Link></div>
                        <div className='ALinkH'><Link className='ALink'>My Profile</Link></div>
                        <div className='ALinkH'><Link className='ALink'>Contact Us</Link></div>
                        <div className='ALinkH'><Link className='ALink'>Log Out</Link></div>
                    </div>
                </nav>
                <section className='Ssec'>
                        <div className='Scardsholder'>
                            <div className='Sdetails'>
                                <div className='Sdetailparts'>
                                    <label className='Slabel Sadd' for="">Shelter Name:</label>
                                    <p className='Sp'>{details.name}</p>
                                </div>
                                <div className='Sdetailparts'>
                                    <label className='Slabel Sadd' for="">Shelter Location:</label>
                                    <p className='Sp'>{details.location}</p>
                                </div>   
                                <div className='Sdetailparts2'>
                                    <label className='Slabel Sadd' for="">Contact Information:</label>
                                    <div className='Sphone'>
                                        <label className='Slabel2 Sadd2'>Phone Number:</label>
                                        <p className='Sp'>{details.phonenumber}</p>
                                    </div>
                                    <div className='Sphone'>
                                        <label className='Slabel2 Sadd2' >Landline:</label>
                                        <p className='Sp'>{details.landline}</p>
                                    </div>
                                    <div className='Sphone'>
                                        <label className='Slabel2 Sadd2' >Gmail:</label>
                                        <p className='Sp'>{details.gmail}</p>
                                    </div>
                                    <div className='Sphone'>
                                        <label className='Slabel2 Sadd2' >FaceBook:</label>
                                        <a href='#' className='Sp Sa'>{details.face}</a>
                                    </div>
                                </div>
                            </div>
                            <div className='Scard'>
                                <div className='Sinfo'>
                                    <label className='Slabel'>Staff Members:</label>
                                    <div className='Smembers'>
                                    {members.map((member) => (
                                    <div className='Sinfoparts'>
                                    <label className='Slabel2'>Name:</label>
                                    <p className='Mp'>{member.name}</p>
                                    </div>
                                    ))}
                                    </div>
                                </div>
                            </div>


                        </div>
                </section>
            </div>
        </div>
    );
}

export default Shelter;