import React from 'react';
import laptop from '../../assets/images/laptop.png';
const Laptop = () => {
  return (
    <div className='w-screen'>
      <h1 className='text-center text-accent text-3xl'><span  className='font-extrabold'>Laptop </span> Repair Service</h1>
      <section>
      <p className='text-accent  my-5 mx-5'>Are you experiencing issues with your laptop or notebook? 1000ifx Services Ltd. is here to help. As an authorized service center, we have the expertise and resources to handle all types of Laptop repair needs. Whether you have a desktop or a laptop, our team of certified technicians can diagnose and fix a wide range of issues, from hardware failures to software problems. We offer fast turnaround times and competitive pricing, and we stand behind our work with a 100% satisfaction guarantee. Contact us today to schedule your computer repair service and get your device running smoothly again.</p>
      </section>
    <section>
   <div className='grid sm:grid-cols-1 lg:grid-cols-2 gap-6'>
    <div>
      <img className='lg:ml-24' src={laptop} alt="" />
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
    </div>
  );
};

export default Laptop;