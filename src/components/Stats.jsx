import React, {useRef,useEffect} from 'react';
import styles from '../styles';
import { stats } from '../constants/index';

const Stats = () => {
  const ref2 = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry =>{
        if (entry.isIntersecting) {
          entry.target.classList.add('slide-in-right');
        }
      });
    }, {threshold: 0.5});
    observer.observe(ref2.current)
    return () =>{
      observer.disconnect();
    }
  }, [])
  return (
    <section className={`${styles.flexCenter} w-full flex-wrap sm:mb-20 mb-6 ${styles.paddingX}`} ref={ref2}>
      {stats.map((stat)=>(
        <div className={`flex-1 flex justify-start items-center m-3 `} key={stat.id}>
          <h4 className='text-white font-poppins font-semibold md:text-[40px] text-[30px] xs:leading-[53px] leading-[43px]'>{stat.value}</h4>
          <p className='text-white font-normal text-gradient font-poppins md:text-[20px] text-[15px] xs:leading-[27px] leading-[21px] uppercase ml-3'>{stat.title}</p>
        </div>
      ))}
    </section>
  )
}

export default Stats;