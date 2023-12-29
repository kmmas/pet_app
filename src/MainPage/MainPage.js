import './MainPage.css';
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
                                <select className='Min2' placeholder='Sort' id='sort' name="sort" required onChange={handleChange}>
                                    <option value="Name" >Name</option>
                                    <option value="Age">Age</option>
                                    <option value="Age" selected>Species</option>
                                    <option value="Age">Breed</option>
                                    <option value="Gender">Gender</option>
                                </select>
                            </div>
                            <div className='Msort'>
                                <label className='Mlabel2'>Sort By</label>
                                <select className='Min2' placeholder='Search' id='search' name="search" required onChange={handleChange}>
                                    <option value="Name" selected>Name</option>
                                    <option value="Age">Age</option>
                                    <option value="Age">Species</option>
                                    <option value="Age">Breed</option>
                                    <option value="Gender">Gender</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='McardsSpace'>
                        <div className='Mcardsholder'>
                            <div className='Mcard'>
                                <img className='Mimg'></img>
                                <div className='MLinkHolder'>
                                    <Link className='Mlink'>View Profile</Link>
                                    <Link className='Mlink'>Direct Adoption</Link>
                                </div>
                                <div className='Minfo'>
                                    <div className='Minfoparts'>
                                    <label className='Mlabel'>Name:</label>
                                    <p className='Mp'>Mohamed</p>
                                    </div>
                                    <div className='Minfoparts'>
                                    <label className='Mlabel'>Age:</label>
                                    <p className='Mp'>2 years</p>

                                    </div>
                                    <div className='Minfoparts'>
                                    <label className='Mlabel'>Species:</label>
                                    <p className='Mp'>Bird</p>

                                    </div>
                                    <div className='Minfoparts'>
                                    <label className='Mlabel'>Breed:</label>
                                    <p className='Mp'>Male</p>

                                    </div>
                                    <div className='Minfoparts'>
                                    <label className='Mlabel'>Gender:</label>
                                    <p className='Mp'>Male</p>
                                    </div>
                                </div>
                            </div>
                            <div className='Mcard'>
                                <img className='Mimg'></img>
                                <div className='MLinkHolder'>
                                    <Link className='Mlink'>View Profile</Link>
                                    <Link className='Mlink'>Direct Adoption</Link>
                                </div>
                                <div className='Minfo'>
                                    <div className='Minfoparts'>
                                    <label className='Mlabel'>Name:</label>
                                    <p className='Mp'>Mohamed</p>
                                    </div>
                                    <div className='Minfoparts'>
                                    <label className='Mlabel'>Age:</label>
                                    <p className='Mp'>2 years</p>

                                    </div>
                                    <div className='Minfoparts'>
                                    <label className='Mlabel'>Species:</label>
                                    <p className='Mp'>Bird</p>

                                    </div>
                                    <div className='Minfoparts'>
                                    <label className='Mlabel'>Breed:</label>
                                    <p className='Mp'>Male</p>

                                    </div>
                                    <div className='Minfoparts'>
                                    <label className='Mlabel'>Gender:</label>
                                    <p className='Mp'>Male</p>
                                    </div>
                                </div>
                            </div>
                            <div className='Mcard'>
                                <img className='Mimg'></img>
                                <div className='MLinkHolder'>
                                    <Link className='Mlink'>View Profile</Link>
                                    <Link className='Mlink'>Direct Adoption</Link>
                                </div>
                                <div className='Minfo'>
                                    <div className='Minfoparts'>
                                    <label className='Mlabel'>Name:</label>
                                    <p className='Mp'>Mohamed</p>
                                    </div>
                                    <div className='Minfoparts'>
                                    <label className='Mlabel'>Age:</label>
                                    <p className='Mp'>2 years</p>

                                    </div>
                                    <div className='Minfoparts'>
                                    <label className='Mlabel'>Species:</label>
                                    <p className='Mp'>Bird</p>

                                    </div>
                                    <div className='Minfoparts'>
                                    <label className='Mlabel'>Breed:</label>
                                    <p className='Mp'>Male</p>

                                    </div>
                                    <div className='Minfoparts'>
                                    <label className='Mlabel'>Gender:</label>
                                    <p className='Mp'>Male</p>
                                    </div>
                                </div>
                            </div>
                            <div className='Mcard'>
                                <img className='Mimg'></img>
                                <div className='MLinkHolder'>
                                    <Link className='Mlink'>View Profile</Link>
                                    <Link className='Mlink'>Direct Adoption</Link>
                                </div>
                                <div className='Minfo'>
                                    <div className='Minfoparts'>
                                    <label className='Mlabel'>Name:</label>
                                    <p className='Mp'>Mohamed</p>
                                    </div>
                                    <div className='Minfoparts'>
                                    <label className='Mlabel'>Age:</label>
                                    <p className='Mp'>2 years</p>

                                    </div>
                                    <div className='Minfoparts'>
                                    <label className='Mlabel'>Species:</label>
                                    <p className='Mp'>Bird</p>

                                    </div>
                                    <div className='Minfoparts'>
                                    <label className='Mlabel'>Breed:</label>
                                    <p className='Mp'>Male</p>

                                    </div>
                                    <div className='Minfoparts'>
                                    <label className='Mlabel'>Gender:</label>
                                    <p className='Mp'>Male</p>
                                    </div>
                                </div>
                            </div>
                            <div className='Mcard'>
                                <img className='Mimg'></img>
                                <div className='MLinkHolder'>
                                    <Link className='Mlink'>View Profile</Link>
                                    <Link className='Mlink'>Direct Adoption</Link>
                                </div>
                                <div className='Minfo'>
                                    <div className='Minfoparts'>
                                    <label className='Mlabel'>Name:</label>
                                    <p className='Mp'>Mohamed</p>
                                    </div>
                                    <div className='Minfoparts'>
                                    <label className='Mlabel'>Age:</label>
                                    <p className='Mp'>2 years</p>

                                    </div>
                                    <div className='Minfoparts'>
                                    <label className='Mlabel'>Species:</label>
                                    <p className='Mp'>Bird</p>

                                    </div>
                                    <div className='Minfoparts'>
                                    <label className='Mlabel'>Breed:</label>
                                    <p className='Mp'>Male</p>

                                    </div>
                                    <div className='Minfoparts'>
                                    <label className='Mlabel'>Gender:</label>
                                    <p className='Mp'>Male</p>
                                    </div>
                                </div>
                            </div>
                            <div className='Mcard'>
                                <img className='Mimg'></img>
                                <div className='MLinkHolder'>
                                    <Link className='Mlink'>View Profile</Link>
                                    <Link className='Mlink'>Direct Adoption</Link>
                                </div>
                                <div className='Minfo'>
                                    <div className='Minfoparts'>
                                    <label className='Mlabel'>Name:</label>
                                    <p className='Mp'>Mohamed</p>
                                    </div>
                                    <div className='Minfoparts'>
                                    <label className='Mlabel'>Age:</label>
                                    <p className='Mp'>2 years</p>

                                    </div>
                                    <div className='Minfoparts'>
                                    <label className='Mlabel'>Species:</label>
                                    <p className='Mp'>Bird</p>

                                    </div>
                                    <div className='Minfoparts'>
                                    <label className='Mlabel'>Breed:</label>
                                    <p className='Mp'>Male</p>

                                    </div>
                                    <div className='Minfoparts'>
                                    <label className='Mlabel'>Gender:</label>
                                    <p className='Mp'>Male</p>
                                    </div>
                                </div>
                            </div>
                            <div className='Mcard'>
                                <img className='Mimg'></img>
                                <div className='MLinkHolder'>
                                    <Link className='Mlink'>View Profile</Link>
                                    <Link className='Mlink'>Direct Adoption</Link>
                                </div>
                                <div className='Minfo'>
                                    <div className='Minfoparts'>
                                    <label className='Mlabel'>Name:</label>
                                    <p className='Mp'>Mohamed</p>
                                    </div>
                                    <div className='Minfoparts'>
                                    <label className='Mlabel'>Age:</label>
                                    <p className='Mp'>2 years</p>

                                    </div>
                                    <div className='Minfoparts'>
                                    <label className='Mlabel'>Species:</label>
                                    <p className='Mp'>Bird</p>

                                    </div>
                                    <div className='Minfoparts'>
                                    <label className='Mlabel'>Breed:</label>
                                    <p className='Mp'>Male</p>

                                    </div>
                                    <div className='Minfoparts'>
                                    <label className='Mlabel'>Gender:</label>
                                    <p className='Mp'>Male</p>
                                    </div>
                                </div>
                            </div>
                            <div className='Mcard'>
                                <img className='Mimg'></img>
                                <div className='MLinkHolder'>
                                    <Link className='Mlink'>View Profile</Link>
                                    <Link className='Mlink'>Direct Adoption</Link>
                                </div>
                                <div className='Minfo'>
                                    <div className='Minfoparts'>
                                    <label className='Mlabel'>Name:</label>
                                    <p className='Mp'>Mohamed</p>
                                    </div>
                                    <div className='Minfoparts'>
                                    <label className='Mlabel'>Age:</label>
                                    <p className='Mp'>2 years</p>

                                    </div>
                                    <div className='Minfoparts'>
                                    <label className='Mlabel'>Species:</label>
                                    <p className='Mp'>Bird</p>

                                    </div>
                                    <div className='Minfoparts'>
                                    <label className='Mlabel'>Breed:</label>
                                    <p className='Mp'>Male</p>

                                    </div>
                                    <div className='Minfoparts'>
                                    <label className='Mlabel'>Gender:</label>
                                    <p className='Mp'>Male</p>
                                    </div>
                                </div>
                            </div>
                            <div className='Mcard'>
                                <img className='Mimg'></img>
                                <div className='MLinkHolder'>
                                    <Link className='Mlink'>View Profile</Link>
                                    <Link className='Mlink'>Direct Adoption</Link>
                                </div>
                                <div className='Minfo'>
                                    <div className='Minfoparts'>
                                    <label className='Mlabel'>Name:</label>
                                    <p className='Mp'>Mohamed</p>
                                    </div>
                                    <div className='Minfoparts'>
                                    <label className='Mlabel'>Age:</label>
                                    <p className='Mp'>2 years</p>

                                    </div>
                                    <div className='Minfoparts'>
                                    <label className='Mlabel'>Species:</label>
                                    <p className='Mp'>Bird</p>

                                    </div>
                                    <div className='Minfoparts'>
                                    <label className='Mlabel'>Breed:</label>
                                    <p className='Mp'>Male</p>

                                    </div>
                                    <div className='Minfoparts'>
                                    <label className='Mlabel'>Gender:</label>
                                    <p className='Mp'>Male</p>
                                    </div>
                                </div>
                            </div>
                            <div className='Mcard'>
                                <img className='Mimg'></img>
                                <div className='MLinkHolder'>
                                    <Link className='Mlink'>View Profile</Link>
                                    <Link className='Mlink'>Direct Adoption</Link>
                                </div>
                                <div className='Minfo'>
                                    <div className='Minfoparts'>
                                    <label className='Mlabel'>Name:</label>
                                    <p className='Mp'>Mohamed</p>
                                    </div>
                                    <div className='Minfoparts'>
                                    <label className='Mlabel'>Age:</label>
                                    <p className='Mp'>2 years</p>

                                    </div>
                                    <div className='Minfoparts'>
                                    <label className='Mlabel'>Species:</label>
                                    <p className='Mp'>Bird</p>

                                    </div>
                                    <div className='Minfoparts'>
                                    <label className='Mlabel'>Breed:</label>
                                    <p className='Mp'>Male</p>

                                    </div>
                                    <div className='Minfoparts'>
                                    <label className='Mlabel'>Gender:</label>
                                    <p className='Mp'>Male</p>
                                    </div>
                                </div>
                            </div>
                            <div className='Mcard'>
                                <img className='Mimg'></img>
                                <div className='MLinkHolder'>
                                    <Link className='Mlink'>View Profile</Link>
                                    <Link className='Mlink'>Direct Adoption</Link>
                                </div>
                                <div className='Minfo'>
                                    <div className='Minfoparts'>
                                    <label className='Mlabel'>Name:</label>
                                    <p className='Mp'>Mohamed</p>
                                    </div>
                                    <div className='Minfoparts'>
                                    <label className='Mlabel'>Age:</label>
                                    <p className='Mp'>2 years</p>

                                    </div>
                                    <div className='Minfoparts'>
                                    <label className='Mlabel'>Species:</label>
                                    <p className='Mp'>Bird</p>

                                    </div>
                                    <div className='Minfoparts'>
                                    <label className='Mlabel'>Breed:</label>
                                    <p className='Mp'>Male</p>

                                    </div>
                                    <div className='Minfoparts'>
                                    <label className='Mlabel'>Gender:</label>
                                    <p className='Mp'>Male</p>
                                    </div>
                                </div>
                            </div>
                            <div className='Mcard'>
                                <img className='Mimg'></img>
                                <div className='MLinkHolder'>
                                    <Link className='Mlink'>View Profile</Link>
                                    <Link className='Mlink'>Direct Adoption</Link>
                                </div>
                                <div className='Minfo'>
                                    <div className='Minfoparts'>
                                    <label className='Mlabel'>Name:</label>
                                    <p className='Mp'>Mohamed</p>
                                    </div>
                                    <div className='Minfoparts'>
                                    <label className='Mlabel'>Age:</label>
                                    <p className='Mp'>2 years</p>

                                    </div>
                                    <div className='Minfoparts'>
                                    <label className='Mlabel'>Species:</label>
                                    <p className='Mp'>Bird</p>

                                    </div>
                                    <div className='Minfoparts'>
                                    <label className='Mlabel'>Breed:</label>
                                    <p className='Mp'>Male</p>

                                    </div>
                                    <div className='Minfoparts'>
                                    <label className='Mlabel'>Gender:</label>
                                    <p className='Mp'>Male</p>
                                    </div>
                                </div>
                            </div>
                            <div className='Mcard'>
                                <img className='Mimg'></img>
                                <div className='MLinkHolder'>
                                    <Link className='Mlink'>View Profile</Link>
                                    <Link className='Mlink'>Direct Adoption</Link>
                                </div>
                                <div className='Minfo'>
                                    <div className='Minfoparts'>
                                    <label className='Mlabel'>Name:</label>
                                    <p className='Mp'>Mohamed</p>
                                    </div>
                                    <div className='Minfoparts'>
                                    <label className='Mlabel'>Age:</label>
                                    <p className='Mp'>2 years</p>

                                    </div>
                                    <div className='Minfoparts'>
                                    <label className='Mlabel'>Species:</label>
                                    <p className='Mp'>Bird</p>

                                    </div>
                                    <div className='Minfoparts'>
                                    <label className='Mlabel'>Breed:</label>
                                    <p className='Mp'>Male</p>

                                    </div>
                                    <div className='Minfoparts'>
                                    <label className='Mlabel'>Gender:</label>
                                    <p className='Mp'>Male</p>
                                    </div>
                                </div>
                            </div>
                            <div className='Mcard'>
                                <img className='Mimg'></img>
                                <div className='MLinkHolder'>
                                    <Link className='Mlink'>View Profile</Link>
                                    <Link className='Mlink'>Direct Adoption</Link>
                                </div>
                                <div className='Minfo'>
                                    <div className='Minfoparts'>
                                    <label className='Mlabel'>Name:</label>
                                    <p className='Mp'>Mohamed</p>
                                    </div>
                                    <div className='Minfoparts'>
                                    <label className='Mlabel'>Age:</label>
                                    <p className='Mp'>2 years</p>

                                    </div>
                                    <div className='Minfoparts'>
                                    <label className='Mlabel'>Species:</label>
                                    <p className='Mp'>Bird</p>

                                    </div>
                                    <div className='Minfoparts'>
                                    <label className='Mlabel'>Breed:</label>
                                    <p className='Mp'>Male</p>

                                    </div>
                                    <div className='Minfoparts'>
                                    <label className='Mlabel'>Gender:</label>
                                    <p className='Mp'>Male</p>
                                    </div>
                                </div>
                            </div>
                            <div className='Mcard'>
                                <img className='Mimg'></img>
                                <div className='MLinkHolder'>
                                    <Link className='Mlink'>View Profile</Link>
                                    <Link className='Mlink'>Direct Adoption</Link>
                                </div>
                                <div className='Minfo'>
                                    <div className='Minfoparts'>
                                    <label className='Mlabel'>Name:</label>
                                    <p className='Mp'>Mohamed</p>
                                    </div>
                                    <div className='Minfoparts'>
                                    <label className='Mlabel'>Age:</label>
                                    <p className='Mp'>2 years</p>

                                    </div>
                                    <div className='Minfoparts'>
                                    <label className='Mlabel'>Species:</label>
                                    <p className='Mp'>Bird</p>

                                    </div>
                                    <div className='Minfoparts'>
                                    <label className='Mlabel'>Breed:</label>
                                    <p className='Mp'>Male</p>

                                    </div>
                                    <div className='Minfoparts'>
                                    <label className='Mlabel'>Gender:</label>
                                    <p className='Mp'>Male</p>
                                    </div>
                                </div>
                            </div>
                            <div className='Mcard'>
                                <img className='Mimg'></img>
                                <div className='MLinkHolder'>
                                    <Link className='Mlink'>View Profile</Link>
                                    <Link className='Mlink'>Direct Adoption</Link>
                                </div>
                                <div className='Minfo'>
                                    <div className='Minfoparts'>
                                    <label className='Mlabel'>Name:</label>
                                    <p className='Mp'>Mohamed</p>
                                    </div>
                                    <div className='Minfoparts'>
                                    <label className='Mlabel'>Age:</label>
                                    <p className='Mp'>2 years</p>

                                    </div>
                                    <div className='Minfoparts'>
                                    <label className='Mlabel'>Species:</label>
                                    <p className='Mp'>Bird</p>

                                    </div>
                                    <div className='Minfoparts'>
                                    <label className='Mlabel'>Breed:</label>
                                    <p className='Mp'>Male</p>

                                    </div>
                                    <div className='Minfoparts'>
                                    <label className='Mlabel'>Gender:</label>
                                    <p className='Mp'>Male</p>
                                    </div>
                                </div>
                            </div>
                            <div className='Mcard'>
                                <img className='Mimg'></img>
                                <div className='MLinkHolder'>
                                    <Link className='Mlink'>View Profile</Link>
                                    <Link className='Mlink'>Direct Adoption</Link>
                                </div>
                                <div className='Minfo'>
                                    <div className='Minfoparts'>
                                    <label className='Mlabel'>Name:</label>
                                    <p className='Mp'>Mohamed</p>
                                    </div>
                                    <div className='Minfoparts'>
                                    <label className='Mlabel'>Age:</label>
                                    <p className='Mp'>2 years</p>

                                    </div>
                                    <div className='Minfoparts'>
                                    <label className='Mlabel'>Species:</label>
                                    <p className='Mp'>Bird</p>

                                    </div>
                                    <div className='Minfoparts'>
                                    <label className='Mlabel'>Breed:</label>
                                    <p className='Mp'>Male</p>

                                    </div>
                                    <div className='Minfoparts'>
                                    <label className='Mlabel'>Gender:</label>
                                    <p className='Mp'>Male</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Application;