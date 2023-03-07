import { useEffect, useRef } from 'react';
import styles from '../styles';
import {logo} from '../assets';
import {footerLinks, socialMedia } from '../constants';


const Footer = () => {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry =>{
        if (entry.isIntersecting) {
          entry.target.classList.add('slide-in-right');
        }
      });
    }, {threshold: 0.5});
    observer.observe(ref.current)
    return () =>{
      observer.disconnect();
    }
  }, [])
  return(
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`} ref={ref}>
      <div className='flex-1 flex flex-col justify-start mr-10'>
        <img src={logo} alt="hoobank" className='w-[266px] h-[72px] object-contain' />
        <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>A new way to make the payments easy, reliable and secure.</p>
      </div>
      <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10'>
        {footerLinks.map((footerLink)=>(
          <div key={footerLink.title} className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
            <h4 className='font-poppins text-medium text-[18px] leading-[27px] text-white'>{footerLink.title}</h4>
            <ul className='mt-4'>
              {footerLink.links.map((link, index)=>(
                <li key={link.name} className={`font-poppins text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${index !== footerLink.length-1 ? 'mb-3' : 'mb:0' }`}>{link.name}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    <div className='flex justify-between items-center w-full md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]'>
      <p className='font-poppins text-normal text-[18px] leading-[27px] text-dimWhite'>Copyright 2021 HooBank. All Rights Reserved.</p>
      <div className='flex flex-row justify-end md:mt-0 mt-6'>
        {socialMedia.map((social, index)=>(
          <img src={social.icon} key={social.id} alt={social.id} className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length-1 ? 'mr-6' : 'mr-0'}`} />
        ))}
      </div>
    </div>
  </section>
  )
}

export default Footer