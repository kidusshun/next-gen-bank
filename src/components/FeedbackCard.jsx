import React from 'react';
import styles from '../styles'
import { quotes } from '../assets';

const FeedbackCard = ({content, name, title, img}) => {
  return (
    <div className='flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 my-5 feedback-card'>
      <img src={quotes} alt="quotation" className='q-[42px] h-[27px] object-contain' />
      <p className='font-poppins font-normal text-[18px] leading-[32px] text-white my-10'>{content}</p>
      <div className='flex justify-start items-center'>
        <img src={img} alt={name} className='w-[48px] h-[48px] rounded-full mr-4' />
        <div>
          <h1 className='font-poppins font-semibold text-[20px] leading-[32px] text-white'>{name}</h1>
          <p className='font-poppins text-[16px] leading-[24px] text-dimWhite'>{title}</p>
        </div>
      </div>
    </div>
  )
}

export default FeedbackCard