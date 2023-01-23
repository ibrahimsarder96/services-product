import React from 'react';
import printer from '../../assets/images/printer.png'
import Footer from '../Shared/Footer/Footer';

const Printer = () => {
  return (
    <div>
    <h1 className='text-center text-accent text-3xl mt-14'><span  className='font-extrabold'>Printer </span> Repair Service</h1>
    <section>
    <p className='text-accent  my-5 mx-5'>Are you experiencing issues with your computer? Digital Services Ltd. is here to help. As an authorized service center, we have the expertise and resources to handle all types of computer repair needs. Whether you have a desktop or a laptop, our team of certified technicians can diagnose and fix a wide range of issues, from hardware failures to software problems. We offer fast turnaround times and competitive pricing, and we stand behind our work with a 100% satisfaction guarantee. Contact us today to schedule your computer repair service and get your device running smoothly again.</p>
    </section>
  <section>
 <div className='grid sm:grid-cols-1 lg:grid-cols-2 gap-6 snap-none'>
  <div>
    <img className='mx-5 ' src={printer} alt="" />
  </div>
  <div>
    <p className='text-accent text-justify'>
    Get fast and reliable Apple MacBook and Mac device repair services from our certified technicians.
We specialize in all types of Mac repairs, including screen replacement, battery replacement, logic board repair, and more.
Our team has the skills and experience to fix any issue, whether it’s a software or hardware problem. Our repair services come with a warranty, ensuring your satisfaction. Trust us to get your Mac device running like new again and avoid costly replacements. Visit us today to schedule your MacBook and Mac devices repair services.
<br/>
<p  className='my-10'>
We have a nationwide service location with a skilled and international certified engineering team.
</p>

<br/>
Printer Service Center. Any Kind of Color And Laser Jet Printer Repairing Service Provider.
EPSON, Canon, Brother, Samsung, Hp, etc Repair Service Provider.</p>
  </div>
 </div>
  </section>
  <section>
      <h1 className='text-xl font-bold text-accent mt-5 text-center'>Level 3 Service</h1>
      <div className='flex items-center justify-center'>
      <div className="divider bg-orange-400 w-44 h-1 rounded-md">
      </div>
      </div>
      <p className='text-accent mx-5 text-xl font-bold'>Printer Service</p>
      <div>
      <li className='text-accent mx-5'>All Branded Printer Complete Diagnosis</li>  
      <li className='text-accent mx-5'>System Health Checkup</li>  
      <li className='text-accent mx-5'>Paper Jam Issue</li>  
      <li className='text-accent mx-5'>Fuser Wash</li>  
      <li className='text-accent mx-5'>Pickup Rubber Wash</li>  
      <li className='text-accent mx-5'>Driver Update</li>  
      <li className='text-accent mx-5'>Dust Clean</li>  
      <li className='text-accent mx-5'>Network Related Troubleshooting</li>  
      <li className='text-accent mx-5'>Prints Are Very Light In Colour</li>  
      <li className='text-accent mx-5'>The Prints Have Faded Colours</li>  
      </div>
    </section>
  <Footer></Footer>
  </div>
  );
};

export default Printer;