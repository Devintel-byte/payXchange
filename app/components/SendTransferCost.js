import React from 'react'
import Image from 'next/image'
import sendCost from '../../public/sendcost.jpg'

const SendTransferCost = () => {
  return (
    <section id='how-much-does-it-cost-to-send-money-internationally' data-csk-entry-type='TextSection' 
    data-csk-entry-display-text='how-much-does-it-cost-to-send-money-internationally' 
    className='flex flex-row sm:flex-col lg:flex-row text-base font-medium text-black leading-5 font-sans'>
        <div className='relative flex sm:h-80' style={{flex: '1', height: 'inherit'}}>
            <Image src={sendCost} alt='An image of a lady taking notes on a notepad' 
            loading='lazy' sizes='100vw' decoding='async' title='howtoreceiveSML' data-nimg='fill'
            className='absolute h-full w-full left-0 right-0 top-0 bottom-0 object-cover object-center' style={{color: 'transparent'}} />
        </div>
       <div className='flex pt-16 pb-16' style={{flex: '1'}}>
       <div data-testid='text-section-content' className='pl-20 pr-20 block w-full box-border ml-auto mr-auto lg:max-w-2xl'>
            <h2 className='mb-4 font-bold text-4xl m-0'>How much does it cost to send money internationally?</h2>
                <p className='mb-4 text-xl leading-5 font-medium m-0'>
                    We consistently look for ways to keep transfer costs low, so that you send as much of your hard-earned money as possible.
                </p>
            <ul className='m-0 block leading-5 text-base font-medium list-disc' style={{paddingInlineStart: '40px', marginBlockStart: '1em', marginBlockEnd: '1em', marginInlineStart: '0px', marginInlineEnd: '0px'}}>
                <li className='mb-2 list-item marker:text-start marker:indent-0 marker:tabular-nums marker:isolate'>
                    <p className='mb-4 text-xl leading-5 font-medium m-0'>
                    We&apos;re on average <b>46% cheaper</b> than most banks.
                    </p>
                </li>
                <li className='mb-2 list-item marker:text-start marker:indent-0 marker:tabular-nums marker:isolate'>
                    <p className='mb-4 text-xl leading-5 font-medium m-0'>
                    There are <b>no hidden fees.</b> You&apos;ll see all our fees upfront.
                    </p>
                </li>
                <li className='mb-2 list-item marker:text-start marker:indent-0 marker:tabular-nums marker:isolate'>
                    <p className='mb-4 text-xl leading-5 font-medium m-0'>
                    Our currency converter shows you the <b>exchange rates,</b> and once you select your receive method and delivery partner, you&apos;ll see the total amount your receiver will get.
                    </p>
                </li>
            </ul>
        </div>
       </div>
    </section>
  )
}

export default SendTransferCost
