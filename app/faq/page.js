import React from 'react'
import Downloads from '../components/Downloads'
import NavbarOne from '../components/NavbarOne'

const Help = () => {
  return (
    <>
      <NavbarOne/>
      <main className='overflow-hidden block'>
        <section className='relative flex text-center justify-center text-white' style={{background: 'linear-gradient(90deg, rgb(129, 63, 214), rgb(61, 17, 82))', padding: '64px 0px'}}>
          <div className='w-full pl-8 pr-8 block box-border ml-auto mr-auto'>
            <div className='relative p-10 border-solid border-4 mt-9' style={{borderImage: 'linear-gradient(90deg, transparent, transparent) 1 / 1 / 0 stretch'}}>
              <h1 className='text-[3.5rem] mb-4 font-medium leading-[1.08]'>
                <b>Help Hub.</b>
              </h1>
              <h1 className='text-[3.5rem] mb-4 font-medium leading-[1]'>
                <b>Home to your frequently asked question</b>
              </h1>
            </div>
          </div>
        </section>
        <section id='faq-frequently-asked-question-content' className='flex flex-row'>
          <div className='flex flex-[1] pt-16 pb-16'>
            <div className='pl-16 pr-16 w-full block box-border mr-auto ml-auto'>
              <h2 className='mb-4 font-bold text-[2rem] leading-[1.125] m-0'>Frequently asked question</h2>
              <br/>
              <h4 className='mb-2 text-xl font-bold m-0 leading-[1.67]'>
                <a className='underline text-[#813FD6]' href='/'>Common problems</a>
              </h4>
              <p className='mb-4 text-xl font-medium leading-[1.2] m-0'>Here you&apos;ll find guidance on the top ways to solve common problems our customers experience.</p>
              <h4 className='mb-2 text-xl font-bold m-0 leading-[1.67]'>
                <a className='underline text-[#813FD6]' href='/'>Cancellations & Refunds</a>
              </h4>
              <p className='mb-4 text-xl font-medium leading-[1.2] m-0'>Has your transfer been cancelled? Learn why. Need to cancel a transfer? Learn how you can do it yourself and how refunds and recalls work at PayXchange.</p>
              <h4 className='mb-2 text-xl font-bold m-0 leading-[1.67]'>
                <a className='underline text-[#813FD6]' href='/'>Where&apos;s my money?</a>
              </h4>
              <p className='mb-4 text-xl font-medium leading-[1.2] m-0'>Wondering where your money is? Find instructions on how to track the progress of your PayXchange transfers via the website and app.</p>
              <h4 className='mb-2 text-xl font-bold m-0 leading-[1.67]'>
                <a className='underline text-[#813FD6]' href='/'>Getting started with PayXchange</a>
              </h4>
              <p className='mb-4 text-xl font-medium leading-[1.2] m-0'>Discover the basics of sending money through the PayXchange website and app. You will also find information on payout and payment methods.</p>
              <h4 className='mb-2 text-xl font-bold m-0 leading-[1.67]'>
                <a className='underline text-[#813FD6]' href='/'>Refer a friend</a>
              </h4>
              <p className='mb-4 text-xl font-medium leading-[1.2] m-0'>Love our service? Refer a friend and you could both earn rewards with our referral programme. Find out how it works.</p>
              <h4 className='mb-2 text-xl font-bold m-0 leading-[1.67]'>
                <a className='underline text-[#813FD6]' href='/'>My Account</a>
              </h4>
              <p className='mb-4 text-xl font-medium leading-[1.2] m-0'>Learn how to manage your account. Find out how to change your password, PIN and other useful information.</p>
            </div>
          </div>
        </section>
      </main>
      <Downloads/>
    </>
  )
}

export default Help