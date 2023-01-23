import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import laptop from '../../assets/HomeImage/laptop.png';
import apple from '../../assets/HomeImage/apple.png';
import monitor from '../../assets/HomeImage/monitor.png';
import desktop from '../../assets/HomeImage/desktop.png';
import server from '../../assets/HomeImage/server.png';
import printer from '../../assets/HomeImage/printer.png';
import applePhone from '../../assets/HomeImage/applePhone.png';
import hp from '../../assets/HomeImage/hp.png';
import bg from '../../assets/bg/bg.jpg';
const Home = () => {
  return (
    <div>
      
      <section  style={{
      background: `url(${bg})`,
      backgroundSize: 'cover',
      
    }} className="h-screen">
      <h1 className='lg:text-5xl lg:pt-80 lg:pl-80 sm:text-2xl text-purple-400 font-bold text-between text-center'>Digital Setup Service</h1>
      </section>
      <h1 className='text-accent text-3xl font-bold text-center mt-10'>Which Repair Service Do You Need?</h1>
      <section>
        <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-3 mt-6 mx-5'>
          <div>
            <img src={laptop} alt="" />
            <Link className='text-accent ml-10' to='/laptop'>Laptop Repair</Link>
          </div>
          <div>
            <img src={apple} alt="" />
            <Link className='text-accent ml-10' to='/applemacbook'>Apple Macbook Repair</Link>
          </div>
          <div>
            <img src={monitor} alt="" />
            <Link className='text-accent ml-10' to='/monitor'>Monitor Repair</Link>
          </div>
          <div>
            <img src={desktop} alt="" />
            <Link className='text-accent ml-14' to='/computer'>Desktop Repair</Link>
          </div>
          <div>
            <img src={server} alt="" />
            <Link className='text-accent ml-24' to='/server'>Server Repair</Link>
          </div>
          <div>
            <img src={printer} alt="" />
            <Link className='text-accent ml-24' to='/printer'>Printer Repair</Link>
          </div>
          <div>
            <img src={applePhone} alt="" />
            <Link className='text-accent ml-24' to='/applemacbook'>Apple Phone Repair</Link>
          </div>
          <div>
            <img src={hp} alt="" />
            <Link className='text-accent ml-24' to='/laptop'>Hp Laptop Repair</Link>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default Home;