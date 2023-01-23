import React from 'react';
import laptop from '../../assets/images/laptop.png';
import Footer from '../Shared/Footer/Footer';
const Laptop = () => {
  return (
    <div>
      <h1 className='text-center text-accent text-3xl mt-14'><span  className='font-extrabold'>Laptop </span> Repair Service</h1>
      <section>
      <p className='text-accent  my-5 mx-5'>Are you experiencing issues with your laptop or notebook? Digital Services Ltd. is here to help. As an authorized service center, we have the expertise and resources to handle all types of Laptop repair needs. Whether you have a desktop or a laptop, our team of certified technicians can diagnose and fix a wide range of issues, from hardware failures to software problems. We offer fast turnaround times and competitive pricing, and we stand behind our work with a 100% satisfaction guarantee. Contact us today to schedule your computer repair service and get your device running smoothly again.</p>
      </section>
    <section>
   <div className='grid sm:grid-cols-1 lg:grid-cols-2 gap-6'>
    <div>
      <img className='lg:ml-24' src={laptop} alt="" />
    </div>
    <div>
      <p className='text-accent'>
Digital services ltd. the largest and best computer repair service provider in Bangladesh. 
<br/>
<p  className='my-10'>
We have a nationwide service location with a skilled and international certified engineering team.
</p>

<br/>
Digital services ltd is an authorized service partner of HP, DELL, LENOVO, TOSHIBA, SONY, MOTOROLLA, SAMSUNG, ACER, and more renowned brands in the world.</p>
    </div>
   </div>
    </section>
    <section>
      <h1 className='text-xl font-bold text-accent mt-5 text-center'>Windows Error</h1>
      <div className='flex items-center justify-center'>
      <div className="divider bg-orange-400 w-44 h-1 rounded-md">
      </div>
      </div>
      <p className='text-accent text-justify mx-5'>
      Our expert engineers solve windows errors quickly. Our provide the troubleshooting service for:

Computer running slow, Windows freezes or stops responding frequently,
Windows restart without warning, blue screen errors, missing Microsoft Windows .dll files,
Windows programs stop responding, regain computer hard drive space,
fatal exception error, Windows computer starts slow, Windows runtime errors and more.
      </p>
    </section>
    <section>
      <h1 className='text-xl font-bold text-accent my-5 text-center'>Software Troubleshooting</h1>
      <p className='text-accent text-justify mx-5'>
      Our expert engineers solve windows errors quickly. Our provide the troubleshooting service for:

Computer running slow, Windows freezes or stops responding frequently,
Windows restart without warning, blue screen errors, missing Microsoft Windows .dll files,
Windows programs stop responding, regain computer hard drive space,
fatal exception error, Windows computer starts slow, Windows runtime errors and more.
      </p>
    </section>
    <section>
      <h1 className='text-xl font-bold text-accent my-5 text-center'>Hardware Troubleshooting</h1>
      <p className='text-accent text-justify mx-5'>
      Digital services provide computer hardware repair services.

Our Service includes:

-Removing, repairing and replacing faulty RAM, hard disk or video/graphic card.
-Cleaning dust from RAM and Video carts slot/ports and from cooling fan.
-Tightening cable and jumpers on motherboard and/or components.
-Software related hardware problems such as device driver updates or installation
      </p>
    </section>
    <section>
      <h1 className='text-xl font-bold text-accent my-5 text-center'>Level 3 Service</h1>
      <p className='text-accent mx-5'>We provide level 3 computer repair service and Our level3  repair success rate is about 80%
Level-3 repair service mentioned below:</p>
      <div>
      <li className='text-accent mx-5'>CPU socket pin Repair & Replace</li>  
      <li className='text-accent mx-5'>PCH Replace</li>  
      <li className='text-accent mx-5'>Ram Slot Replace</li>  
      <li className='text-accent mx-5'>USB port Replace</li>  
      <li className='text-accent mx-5'>Sound port Replace</li>  
      <li className='text-accent mx-5'>Keyboard pin Replace</li>  
      <li className='text-accent mx-5'>VGA, HDMI Port Replace</li>  
      <li className='text-accent mx-5'>Display Port Replace</li>  
      </div>
    </section>
    <Footer></Footer>
    </div>
  );
};

export default Laptop;