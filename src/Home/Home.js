import React, { useState, useEffect } from 'react';
import './Home.css';
import logo from '../raillogo/logo.jpg'
import searchimg from '../raillogo/searchimg.jpg';
import instagram from '../raillogo/instagram.png';
import twitter from '../raillogo/twitter.png';
import facebook from '../raillogo/facebook.png';
import telegram from '../raillogo/telegram.png';
import whatsapp from '../raillogo/whatsapp.png';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [bookingConfirmation, setBookingConfirmation] = useState(null);

    useEffect(() => {
        const bookingDetails = localStorage.getItem('bookingConfirmation');
        if (bookingDetails) {
            setBookingConfirmation(JSON.parse(bookingDetails));
            localStorage.removeItem('bookingConfirmation'); // Clear after displaying
        }
    }, []);

    const trains = [
        {
            id: 1,
            name: 'Rajdhani Express',
            img: 'https://tse1.mm.bing.net/th?id=OIP.iQm9eVUUDPPOs6l5MMBE-AHaEK&pid=Api&P=0&h=180',
            location: 'Mumbai to Delhi',
            timing: '10:00 AM - 08:00 PM',
        },
        {
            id: 2,
            name: 'Shatabdi Express',
            img: 'https://tse1.mm.bing.net/th?id=OIP.I8CRn8Fu9CMPg0atQ1KWKwHaE8&pid=Api&P=0&h=180',
            location: 'Bangalore to Chennai',
            timing: '06:00 AM - 12:00 PM',
        },
        {
            id: 3,
            name: 'Garib Rath',
            img: 'https://tse1.mm.bing.net/th?id=OIP.lqbDQoOfEZewen6u5yqBzwHaFj&pid=Api&P=0&h=180',
            location: 'Kolkata to Patna',
            timing: '08:00 AM - 04:00 PM',
        },
        {
            id: 4,
            name: 'Duronto Express',
            img: 'https://tse1.mm.bing.net/th?id=OIP.eoAJZx6k3IHcaD4rEncJpgHaEo&pid=Api&P=0&h=180',
            location: 'Hyderabad to Bangalore',
            timing: '07:00 AM - 02:00 PM',
        }
    ];

    const navigate = useNavigate();
    const go = () => navigate('/Sign');
    const goToLogin = () => navigate('/');
    const handleBooking = (trainId) => navigate(`/Booking/${trainId}`);

    return (
        <div>
            <div id='line'>
                <img src={logo} alt='log'/>
                <ul id='u'>
                    <li>Home</li>
                    <li onClick={goToLogin}>Login</li>
                    <li onClick={go}>Register</li>
                    <li>aboutUs</li>
                    <li>contactUs</li>
                </ul>
            </div>
            <div className='back'>
                <div id='sear'>
                    <img src={searchimg} alt='search' className='imm'/>
                    <p>.</p> 
                    <input type='text' placeholder='     Search for Booking' id='inp' />
                    <button id='in'>Search</button>
                </div>
             {bookingConfirmation && (
                <div className="booking-confirmation">
                    <h2>Ticket Booked</h2>
                    <p><strong>Train ID:</strong> {bookingConfirmation.trainId}</p>
                    <p><strong>Date:</strong> {bookingConfirmation.date}</p>
                    <p><strong>Passenger:</strong> {bookingConfirmation.passengerName}</p>
                    <p><strong>Count:</strong> {bookingConfirmation.passengerCount}</p>
                </div>
              )}
              </div>
                <div>
                    <h1 id='wel'>RAILWAY TICKET RESERVATION SYSTEM</h1>
                </div>
            
            <div className='train-list'>
                {trains.map(train => (
                    <div key={train.id} className='train-card'>
                        <img src={train.img} alt={train.name} className='train-img'/>
                        <h3>{train.name}</h3>
                        <p><strong>Location:</strong> {train.location}</p>
                        <p><strong>Timing:</strong> {train.timing}</p>
                        <button className='book-btn' onClick={() => handleBooking(train.id)}>Book Now</button>
                    </div>
                ))}
            </div>

            {/* Contact Us Section */}
            <div className='contact-us'>
                <h2>Contact Us</h2>
                <div className='social-icons'>
                    <div id='fi'>
                        <img src={instagram} alt='Instagram' className='social-icon'/>
                        <h3>Instagram</h3>
                    </div>
                    <div id='se'>
                        <img src={twitter} alt='Twitter' className='social-icon'/>
                        <h3>Twitter</h3>
                    </div>
                    <div id='th'>
                        <img src={facebook} alt='Facebook' className='social-icon'/>
                        <h3>FaceBook</h3>
                    </div>
                    <div id='fo'>
                        <img src={telegram} alt='Telegram' className='social-icon'/>
                        <h3>Telegram</h3>
                    </div>
                    <div id='fiv'>
                        <img src={whatsapp} alt='WhatsApp' className='social-icon'/>
                        <h3>WhatsApp</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
