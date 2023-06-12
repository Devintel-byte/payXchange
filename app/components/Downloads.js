import React from 'react'
import Image from 'next/image'
import appstore from '../../public/appstore.svg'
import playstore from '../../public/googleplay.svg'
import phoneMockup from '../../public/phoneMApp.png'

const Downloads = () => {
  return (
    <section style={{padding: '40px 0', backgroundColor: '#F8F7F2', fontFamily: 'Gilroy, Arial'}}>
        <div className='block w-full box-border ml-auto mr-auto' style={{padding: '0 40px', maxWidth: '960px'}}>
            <div className='flex flex-row-reverse' style={{gap: '64px 40px'}}>
                <div className='text-left justify-center flex flex-col' style={{flex: '1'}}>
                    <h2 className='mb-2 font-bold m-0' style={{fontSize: '2rem', lineHeight: '1.125'}}>
                        A fast and secure way to send money on the go
                    </h2>
                    <p className='mb-8 font-medium' style={{fontSize: '1.25rem', lineHeight: '1.2'}}>
                    Download our app for free to send money online in minutes to over 130 other countries. Track your payments and view your transfer history from anywhere.
                    </p>
                    <div className='justify-start flex-row flex items-center' style={{gap: '16px 16px'}}>
                        <a className='flex underline m-0' style={{color: '#813FD6'}} href='/'>
                            <Image src={appstore} width={135} height={40} loading='lazy' title='App Store' alt='app-store-download' style={{color: 'transparent'}} />
                        </a>
                        <a className='flex underline m-0' style={{color: '#813FD6'}} href='/'>
                            <Image src={playstore} width={135} height={40} loading='lazy' title='App Store' alt='app-store-download' style={{color: 'transparent'}} />
                        </a>
                    </div>
                </div>
                <div className='relative mb-0 ml-auto mr-auto' style={{maxWidth: '400px', flex: '1'}}>
                    <Image src={phoneMockup} width={1000} height={1328} decoding='async' title='mobile-app' loading='lazy' alt='download-phone-mockup' style={{color: 'transparent'}} />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Downloads