import React from 'react';
import { Link } from 'react-router-dom';
import laptop from '../../assets/HomeImage/laptop.png';
import apple from '../../assets/HomeImage/apple.png';
import monitor from '../../assets/HomeImage/monitor.png';
import desktop from '../../assets/HomeImage/desktop.png';
import server from '../../assets/HomeImage/server.png';
import printer from '../../assets/HomeImage/printer.png';
import applePhone from '../../assets/HomeImage/applePhone.png';
import hp from '../../assets/HomeImage/hp.png';
const Service = () => {
  return (
    <div>
      <h1 className='text-accent text-3xl font-bold text-center mt-10'>Which Repair Service Do You Need?</h1>
      <section>
        <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-3 mt-6 mx-5'>
          <div>
            <img  src={laptop} alt="" />
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
      <section>
      <h1  className='text-accent text-center font-bold text-3xl mt-20'>What we do ?</h1>
        <div>
        <h1 className='text-accent text-xl font-bold mx-5'>Best Laptop Repair Service</h1>
          <p className='text-accent  mx-5'>Digital Services Ltd. is the top provider of <span className='text-blue-400'><Link to='/laptop'>laptop repair services</Link></span> in Bangladesh. We are authorized by some of the most reputable brands in the industry, including HP, Dell, Acer, Toshiba, Lenovo, Sony, Samsung, Huawei, Xiaomi, Gigabyte, Dahua, and more.</p>
        </div>
        <div>
        <h1 className='text-accent text-xl font-bold mx-5'>Best Computer Repair Service</h1>
          <p className='text-accent  mx-5'>Digital Services Ltd. is the premier provider of <span className='text-blue-400'><Link to='/computer'>computer repair services</Link></span> in Bangladesh. We hold authorized partnerships with some of the industry’s leading brands including HP, Dell, Acer, Toshiba, Lenovo, Sony, Samsung, and more.</p>
        </div>
        <div>
        <h1 className='text-accent text-xl font-bold mx-5'>Best Printer Repair Service</h1>
          <p className='text-accent  mx-5'>Digital Services Ltd. is the leading provider of <span className='text-blue-400'><Link to='/printer'>printer repair services</Link></span> in Bangladesh. We hold authorized partnerships with some of the industry’s most respected brands such as HP, Epson, Canon, Brothers and more.</p>
        </div>
        <div>
        <h1 className='text-accent text-xl font-bold mx-5'>Best Server Repair Service</h1>
          <p className='text-accent  mx-5'>Digital Services Ltd is a leading provider of server repair services. Our team of certified technicians are skilled in repairing servers of all types, including rack servers, blade servers, and tower servers. We provide on-site and remote repair services, and can also provide regular maintenance to keep your servers running smoothly. We are authorized by some of the industry’s leading brands, including HP, Dell, and Lenovo, and we use only the highest-quality replacement parts to ensure your server is back up and running quickly. With Digital Services, you can trust that your server repairs will be done quickly, efficiently and to the highest standards. Contact us today to schedule your <span className='text-blue-400'><Link to='/server'>server repair service.</Link></span></p>
        </div>
      </section>
    </div>
  );
};

export default Service;