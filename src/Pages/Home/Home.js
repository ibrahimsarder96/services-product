import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import laptop from '../../assets/HomeImage/laptop.png';
import apple from '../../assets/HomeImage/apple.png';
import monitor from '../../assets/HomeImage/monitor.png';
import desktop from '../../assets/HomeImage/desktop.png';
import server from '../../assets/HomeImage/server.png';
import printer from '../../assets/HomeImage/printer.png';

const Home = () => {
  return (
    <div>
      <h1 className='text-accent text-2xl font-bold text-center mt-10'>Which Repair Service Do You Need?</h1>
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
            <Link className='text-accent ml-10' to='/monitor'>Monitor</Link>
          </div>
          <div>
            <img src={desktop} alt="" />
            <Link className='text-accent ml-14' to='/computer'>Desktop</Link>
          </div>
          <div>
            <img src={server} alt="" />
            <Link className='text-accent ml-24' to='/server'>Server</Link>
          </div>
          <div>
            <img src={printer} alt="" />
            <Link className='text-accent ml-24' to='/printer'>Printer</Link>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default Home;