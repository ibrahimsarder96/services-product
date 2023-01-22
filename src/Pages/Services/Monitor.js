import React from 'react';
import monitor from '../../assets/images/monitor.png'
import Footer from '../Shared/Footer/Footer';

const Monitor = () => {
  return (
    <div>
    <h1 className='text-center text-accent text-3xl mt-14'><span  className='font-extrabold'>Monitor </span> Repair Service</h1>
    <section>
    <p className='text-accent  my-5 mx-5'>Are you experiencing issues with your computer? 1000ifx Services Ltd. is here to help. As an authorized service center, we have the expertise and resources to handle all types of computer repair needs. Whether you have a desktop or a laptop, our team of certified technicians can diagnose and fix a wide range of issues, from hardware failures to software problems. We offer fast turnaround times and competitive pricing, and we stand behind our work with a 100% satisfaction guarantee. Contact us today to schedule your computer repair service and get your device running smoothly again.</p>
    </section>
  <section>
 <div className='grid sm:grid-cols-1 lg:grid-cols-2 gap-6'>
  <div>
    <img className='lg:ml-24 w-full' src={monitor} alt="" />
  </div>
  <div>
    <p className='text-accent'>
    1000fix services ltd. the largest and best computer repair service provider in Bangladesh. 
<br/>
<p  className='my-10'>
We have a nationwide service location with a skilled and international certified engineering team.
</p>

<br/>
1000fix services ltd is an authorized service partner of HP, DELL, LENOVO, TOSHIBA, SONY, MOTOROLLA, SAMSUNG, ACER, and more renowned brands in the world.</p>
  </div>
 </div>
  </section>
  <Footer></Footer>
  </div>
  );
};

export default Monitor;