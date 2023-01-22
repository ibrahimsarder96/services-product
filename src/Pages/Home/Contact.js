import React from 'react';
import Footer from '../Shared/Footer/Footer';

const Contact = () => {
  return (
    <div>
      <h1 className='text-accent text-2xl font-bold mx-5'>Contact Info</h1>
      <p className='text-gray-500 text-xl font-bold mx-5'>Contact Information to reach  us for you service.</p>
      <section className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5 mx-5'>
        <div>
          <h1  className='text-accent text-center text-xl font-bold mt-12'>Address</h1>
          <p className='text-accent'>586/1 (4th Floor), Begum Rokeya Sarani,<br/> Gulshan, Gulshan, Dhaka-1212,<br/> Bangladesh</p>
        </div>
        <div>
          <h1  className='text-accent text-center text-xl font-bold mt-12'>E-Mail Address</h1>
          <p className='text-accent text-center'>info@gmail.com</p>
        </div>
        <div>
          <h1  className='text-accent text-center text-xl font-bold mt-12'>E-mail Address</h1>
          <p className='text-accent text-center'>+8801798-097005</p>
          <p className='text-accent text-center'>13456</p>
        </div>
        <div>
          <h1  className='text-accent text-center text-xl font-bold mt-12'>Working Days/Hours</h1>
          <p className='text-accent text-center'>SAT - THU / 09:00AM - 06:00PM</p>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default Contact;