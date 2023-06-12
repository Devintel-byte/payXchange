import React from 'react'
import Downloads from '../components/Downloads'
import NavbarTwo from '../components/NavbarTwo'
import BuyMethod from '../components/BuyMethod'
import Image from 'next/image'
import vidImage from '../../public/pexels-karolina-grabowska-4467738.jpg'
import svgIcon1 from '../../public/1.svg'
import mapIcon from '../../public/2.svg'
import fingerSelect from '../../public/3.svg'
import labelIcon from '../../public/4.svg'
import clock1 from '../../public/clock.svg'
import vaultLock from '../../public/safe.svg'
import labelWhite from '../../public/value.svg'
import posterImg from '../../public/white-shirt-lady.jpg'

const HowItWorks = () => {
  return (
    <>
    <NavbarTwo/>

    <main className='bg-white text-black overflow-hidden block'>
      <section id='how-to-send-relaunch' className='block'>
        <div role='button' tabIndex='0' className='pt-[215px] pb-[120px] relative cursor-pointer'>
          <Image src={vidImage} 
          alt='video-image-bg'
          loading='lazy'
          decoding='async'
          sizes='100vw'
          data-nimg='fill'
          className='absolute object-cover brightness-50 h-full w-full inset-0 text-transparent' style={{objectPosition: 'center center'}}/>
          <div className='max-w-[640px] block w-full box-border ml-auto mr-auto pl-6 pr-6'>
            <div className='flex relative items-center justify-center mb-9'>
              <div className='w-[7.5rem] h-[7.5rem] opacity-40 bg-white' style={{borderRadius: '50%'}}></div>
              <svg className="w-20 h-20 absolute inline-block select-none font-semibold shrink-0 text-[1.25rem]" 
              style={{color: 'white', fill: 'currentcolor', transition: 'fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'}}
              focusable="false" 
              viewBox="0 0 24 24" 
              aria-hidden="true">
              <path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z">
              </path>
              </svg>
              <div className='vidStyle absolute w-[7.5rem] h-[7.5rem] opacity-0 bg-white' style={{borderRadius: '50%'}}></div>
            </div>
            <div className='relative'>
              <h2 className='text-white mb-4 text-center text-[2rem] leading-[1.125] font-bold m-0'>
              How to send with PayXchange
              </h2>
              <p className='text-white mb-4 text-center text-xl leading-[1.2] font-medium m-0'>
              We make international money transfer fast, simple and secure. Whichever method you choose, it only takes a few steps to send money online with us. Watch our video or read on to get started.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='items-center block' style={{padding: '40px 0'}}>
        <div className='pr-16 pl-16 block box-border w-full ml-auto mr-auto'>
          <h2 className='font-bold text-[2rem] leading-[1.125] mb-4 m-0 text-center'>How to send money</h2>
          <ol className='flex flex-row gap-6 m-0 p-0 list-none items-start justify-center text-center'>
            <li 
            className='p-6 items-center w-full relative rounded-lg shadow-none text-black bg-[#F8F7F2]'
            style={{transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'}}>
              <Image src={svgIcon1}
              width={50}
              height={50}
              title='shield-icon'
              loading='lazy'
              decoding='async'
              alt='secured-vault'
              className='text-transparent block text-center list-none' style={{margin: '0px auto 16px'}}
              />
              <h3 className='inline-block text-[#813FD6] mb-1 m-0 text-xl text-bold leading-[1.2]'>
                <span className='inline-block mr-1 mb-1 m-0 top-auto left-auto relative font-bold'>1.</span>
                <span className='text-[#813FD6] m-0 text-center font-bold'>Create an account</span>
              </h3>
              <div className='m-auto max-w-[20rem] text-center text-black'>
                <p className='text-base leading-5 font-medium m-0'>
                  <a href='/' target='_blank' rel='noopener noreferrer'
                  className='underline text-[#813FD6] m-0'>
                    <b>Sign up with your email address </b>
                  </a>
                  and choose a strong password. You can use the app or the website to register.
                </p>
              </div>
            </li>
            <li 
            className='p-6 items-center w-full relative rounded-lg shadow-none text-black bg-[#F8F7F2]'
            style={{transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'}}>
              <Image src={mapIcon}
              width={50}
              height={50}
              title='map-icon'
              loading='lazy'
              decoding='async'
              alt='map-icon'
              className='text-transparent block text-center list-none' style={{margin: '0px auto 16px'}}
              />
              <h3 className='inline-block text-[#813FD6] mb-1 m-0 text-xl text-bold leading-[1.2]'>
                <span className='inline-block mr-1 mb-1 m-0 top-auto left-auto relative font-bold'>2.</span>
                <span className='text-[#813FD6] m-0 text-center font-bold'>Start a transfer</span>
              </h3>
              <div className='m-auto max-w-[20rem] text-center text-black'>
                <p className='text-base leading-5 font-medium m-0'>
                Select the receive country, enter amount and choose the receive method. See our fees and exchange rate upfront.
                </p>
              </div>
            </li>
            <li 
            className='p-6 items-center w-full relative rounded-lg shadow-none text-black bg-[#F8F7F2]'
            style={{transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'}}>
              <Image src={fingerSelect}
              width={50}
              height={50}
              title='finger-select'
              loading='lazy'
              decoding='async'
              alt='a finger select icon'
              className='text-transparent block text-center list-none' style={{margin: '0px auto 16px'}}
              />
              <h3 className='inline-block text-[#813FD6] mb-1 m-0 text-xl text-bold leading-[1.2]'>
                <span className='inline-block mr-1 mb-1 m-0 top-auto left-auto relative font-bold'>3.</span>
                <span className='text-[#813FD6] m-0 text-center font-bold'>Enter receiver&apos;s details</span>
              </h3>
              <div className='m-auto max-w-[20rem] text-center text-black'>
                <p className='text-base leading-5 font-medium m-0'>
                Keep your receiver&apos;s information ready! These details depend on the receive method you choose to send money.
                </p>
              </div>
            </li>
            <li 
            className='p-6 items-center w-full relative rounded-lg shadow-none text-black bg-[#F8F7F2]'
            style={{transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'}}>
              <Image src={labelIcon}
              width={50}
              height={50}
              title='label-tag-icon'
              loading='lazy'
              decoding='async'
              alt='label tag icon'
              className='text-transparent block text-center list-none' style={{margin: '0px auto 16px'}}
              />
              <h3 className='inline-block text-[#813FD6] mb-1 m-0 text-xl text-bold leading-[1.2]'>
                <span className='inline-block mr-1 mb-1 m-0 top-auto left-auto relative font-bold'>4.</span>
                <span className='text-[#813FD6] m-0 text-center font-bold'>Pay for your transfer</span>
              </h3>
              <div className='m-auto max-w-[20rem] text-center text-black'>
                <p className='text-base leading-5 font-medium m-0'>
                You can either pay by bank transfer to the WorldRemit account or by using a debit/credit card for faster delivery.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <BuyMethod/>

      <section className='text-center block' style={{padding: '40px 0', background: 'linear-gradient(90deg, rgb(129, 63, 214), rgb(61, 17, 82))'}}>
        <div className='pr-16 pl-16 block box-border w-full ml-auto mr-auto'>
        <p className='font-bold text-[2.5rem] leading-[1.125] mb-4 m-0 text-center text-white'>Why choose PayXchange?</p>
        <div className='p-0 m-[-40px] justify-center flex flex-wrap box-border text-center' style={{width: 'calc(100% + 80px)'}}>
          <div className='p-10 grow-0 basis-1/3 max-w-[33.333333%] m-0 box-border text-center' display-text="it's-easy-with-us">
            <Image src={clock1} alt='clock-icon'
            width={64}
            height={64}
            loading='lazy'
            decoding='async'
            className='text-transparent block text-center list-none' style={{margin: '0px auto 16px'}}
            />
            <p className='text-[2rem] font-bold leading-[1.125] mb-2 text-white m-0'>It&apos;s easy with us</p>
            <p className='text-white text-base font-medium leading-5 m-0 text-center'>Sending money is so easy and fast with us. Plus, you can get regular updates and track your money every step of the way.</p>
          </div>
          <div className='p-10 grow-0 basis-1/3 max-w-[33.333333%] m-0 box-border text-center' display-text="it's-easy-with-us">
            <Image src={vaultLock} 
            alt='vault-safe'
            title='vault safe icon'
            width={64}
            height={64}
            loading='lazy'
            decoding='async'
            className='text-transparent block text-center list-none' style={{margin: '0px auto 16px'}}
            />
            <p 
            className='text-[2rem] font-bold leading-[1.125] mb-2 text-white m-0'>
            Always safe
            </p>
            <p 
            className='text-white text-base font-medium leading-5 m-0 text-center'>
            WorldRemit is an authorised and regulated money transfer service. Our security checks protect your money and personal information at all times.
            </p>
          </div>
          <div className='p-10 grow-0 basis-1/3 max-w-[33.333333%] m-0 box-border text-center' display-text="it's-easy-with-us">
            <Image src={labelWhite} 
            alt='label-icon-white'
            title='labe icon white'
            width={64}
            height={64}
            loading='lazy'
            decoding='async'
            className='text-transparent block text-center list-none' style={{margin: '0px auto 16px'}}
            />
            <p 
            className='text-[2rem] font-bold leading-[1.125] mb-2 text-white m-0'>
            Trusted by millions
            </p>
            <p 
            className='text-white text-base font-medium leading-5 m-0 text-center'>
            Over 5 million customers trust us to transfer money to their friends and family worldwide. It&apos;s your money. We get it to your loved ones, quickly and safely.
            </p>
          </div>
        </div>
        </div>
      </section>

      <section className='flex relative text-center justify-center' style={{padding: '64px 0', color: 'rgb(255, 255, 255'}}>
        <Image src={posterImg} 
        alt='image poster' 
        sizes='100vw'
        loading='lazy'
        decoding='async' 
        className='absolute w-full h-full brightness-[0.7] left-0 right-0 top-0 bottom-0 object-cover object-center text-transparent'
        />
        <div className='w-full pr-8 pl-8 block mr-auto ml-auto box-border'>
          <div className='relative p-10 border-solid border-4' style={{borderImage: 'linear-gradient(90deg, transparent, transparent) 1 / 1 / 0 stretch'}}>
            <h2 className='font-bold text-[3.5rem] leading-[1.08] m-0 mb-4'>Start sending money with PayXchange today!</h2>
            <br/>
            <a href='/' 
            className='text-white bg-[#813FD6] shadow-none p-4 min-w-[unset] box-border text-xl font-bold leading-[1.2] rounded b-0 outline-0 inline-flex relative items-center m-0 cursor-pointer select-none no-underline justify-center align-middle'>
              <span className='w-full'>Get started</span>
            </a>
          </div>
        </div>
      </section>

      <Downloads/>
    </main>
    </>
  )
}

export default HowItWorks