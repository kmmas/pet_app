import './Allshelters.css';
// import { CookiesProvider, useCookies } from "react-cookie";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function Allshelters() {
    const [info, setInfo] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        gender: ''
    })
    const Shelters = [{
            name  : 'LoLo',
            location  : 'Miami, Alexandria, Egypt',
            },
            {
            name  : 'Dody',
            location  : 'Smoha, Alexandria, Egypt',
            },
            {
            name  : 'Migo',
            location  : 'Azarita, Alexandria, Egypt',
            },
            {
            name  : 'Mady',
            location  : 'Ibrahimya, Alexandria, Egypt',
            },
    ]
    function handleChange(event) {
        setInfo({ ...info, [event.target.name]: event.target.value })
    }
    return (
        <div className='Mbody'>
            <div className='Mtotal'>
                <nav className='Mnav'>
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
                <section className='Msec'>
                    <div className='MSearchbar'>
                        <div className='MSearchinput'>
                            <input className='Min1' placeholder='Search' name="email" id='email' type='text' required onChange={handleChange} />
                        </div>
                        <div className='Mfiltersort'>
                        <div className='Mfilter'>
                                <label className='Mlabel2'>Search By</label>
                                <select className='Min2' placeholder='Filter' id='filter' name="filter" required onChange={handleChange}>
                                    <option value="Name" selected>Name</option>
                                    <option value="Age">Location</option>
                                </select>
                            </div>
                            <div className='Msort'>
                                <label className='Mlabel2'>Sort By</label>
                                <select className='Min2' placeholder='Sort' id='Sort' name="Sort" required onChange={handleChange}>
                                    <option value="Name" selected>Name</option>
                                    <option value="Age">Location</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='McardsSpace'>
                        <div className='Mcardsholder'>
                            {Shelters.map((Shelter) => (
                            <div className='AAcard'>
                                <div className='AAinfo'>
                                    <div className='AAinfoparts'>
                                    <label className='AAlabel'>Shelter Name:</label>
                                    <p className='AAp'>{Shelter.name}</p>
                                    </div>
                                    <div className='AAinfoparts'>
                                    <label className='AAlabel'>Location:</label>
                                    <p className='AAp'>{Shelter.location}</p>
                                    </div>
                                </div>
                                <div className='AALinkHolder'>
                                    <Link to={"/shelter"} className='AAlink'>View Shelter</Link>
                                </div>
                            </div>
                            ))}

                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Allshelters;