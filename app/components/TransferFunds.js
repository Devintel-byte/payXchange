import React from 'react'
import Image from 'next/image'
import howToImg from '../../public/smiling.jpg'

const TransferFunds = () => {
  return (
    <section id='how-to-transfer-money-internationally' data-csk-entry-type='TextSection' 
    data-csk-entry-display-text='how-to-transfer-money-internationally' 
    className='flex flex-row-reverse sm:flex-col lg:flex-row-reverse text-base font-medium text-black leading-5' style={{fontFamily: 'Gilroy, Arial'}}>
        <div className='relative flex sm:h-80' style={{flex: '1', height: 'inherit'}}>
            <Image src={howToImg} alt='An image of a lady smiling with a laptop in front of her' 
            loading='lazy' sizes='100vw' decoding='async' title='howtosendSML' data-nimg='fill'
            className='absolute h-full w-full left-0 right-0 top-0 bottom-0 object-cover object-center' style={{color: 'transparent'}} />
        </div>
       <div className='flex pt-16 pb-16' style={{flex: '1'}}>
       <div data-testid='text-section-content' className='pl-20 pr-20 block w-full box-border ml-auto mr-auto lg:max-w-2xl'>
            <h2 className='mb-4 font-bold text-4xl m-0'>How to transfer money internationally?</h2>
            <ol className='m-0 block leading-5 text-base font-medium list-decimal' style={{paddingInlineStart: '40px', marginBlockStart: '1em', marginBlockEnd: '1em', marginInlineStart: '0px', marginInlineEnd: '0px'}}>
                <li className='mb-2 marker:text-start marker:indent-0 marker:tabular-nums marker:isolate'>
                    <p className='mb-4 text-xl leading-5 font-medium m-0'>
                    <b> Create an account</b> This is simple. Just sign up using your email address on our app or website. And keep things secure by choosing a strong password.
                    </p>
                </li>
                <li className='mb-2 marker:text-start marker:indent-0 marker:tabular-nums marker:isolate'>
                    <p className='mb-4 text-xl leading-5 font-medium m-0'>
                    <b>We’ll verify your details</b> For even better security, we’ll verify who you are. But this should only take a few minutes.
                    </p>
                </li>
                <li className='mb-2 marker:text-start marker:indent-0 marker:tabular-nums marker:isolate'>
                    <p className='mb-4 text-xl leading-5 font-medium m-0'>
                    <b>Start your transfer</b> Select the receive country and method, and enter the amount you want to send. Our fees and exchange rates are shown upfront.
                    </p>
                </li>
                <li className='mb-2 marker:text-start marker:indent-0 marker:tabular-nums marker:isolate'>
                    <p className='mb-4 text-xl leading-5 font-medium m-0'>
                    <b>Enter your receiver’s details</b> Have your receiver’s details to hand. These may vary depending on how you’re sending them the money.
                    </p>
                </li>
                <li className='mb-2 marker:text-start marker:indent-0 marker:tabular-nums marker:isolate'>
                    <p className='mb-4 text-xl leading-5 font-medium m-0'>
                    <b>Pay for your transfer</b> Choose how you’d like to pay for your transfer: bank deposit, credit or debit card.
                    </p>
                </li>
            </ol>
        </div>
       </div>
    </section>
  )
}

export default TransferFunds
