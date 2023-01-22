import React from 'react';
import server from '../../assets/images/server.png'
const Server = () => {
  return (
    <div className='w-screen '>
    <h1 className='text-center text-accent text-3xl'><span  className='font-extrabold'>Server </span> Repair Service</h1>
    <section>
    <p className='text-accent  my-5 mx-5'>Are you experiencing issues with your computer? 1000ifx Services Ltd. is here to help. As an authorized service center, we have the expertise and resources to handle all types of computer repair needs. Whether you have a desktop or a laptop, our team of certified technicians can diagnose and fix a wide range of issues, from hardware failures to software problems. We offer fast turnaround times and competitive pricing, and we stand behind our work with a 100% satisfaction guarantee. Contact us today to schedule your computer repair service and get your device running smoothly again.</p>
    </section>
  <section>
 <div className='grid sm:grid-cols-1 lg:grid-cols-2 gap-6 snap-none'>
  <div>
    <img className='ml-24 w-96' src={server} alt="" />
  </div>
  <div>
    <p className='text-accent text-justify'>
    Server repair technicians are often known to work late to keep an eye on server transitions. At FieldEngineer.com, we provide a range of roles on our platform for server repair technicians to choose from for their next contract. The list of duties above may differ from the positions listed, but they are essential requirements for a server repair technician.
<br/>
<p  className='my-10'>
We have a nationwide service location with a skilled and international certified engineering team.
</p>

<br/>
A server repair technician is required to have a bank of skills that will make them a desirable candidate to the right hiring manager. These skills are varied, and they won't apply to every role, but the list below includes skills that should be considered. These skills include</p>
  </div>
 </div>
  </section>
  </div>
  );
};

export default Server;