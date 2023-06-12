import dynamic from 'next/dynamic'
import React from 'react'

// const Componentfooter = dynamic(() => import('../components/SelectorCountry'))

const Footer = () => {
  return (
    <footer className='bg-black text-white font-medium leading-5' style={{padding: '40px 0', fontFamily: 'Gilroy, Arial', fontSize: '16px'}}>
        <div className='pr-16 pl-16 mr-auto ml-auto w-full block'>
            <div className='flex flex-wrap box-border m-[-20px]' style={{width: 'calc(100% + 40px)'}}>
                <div className='p-5 flex-grow-0 basis-1/3 m-0 box-border'>
                    <h4 className='font-bold m-0' style={{fontSize: '2rem', lineHeight: '1.125'}}>Send money online</h4>
                    <hr className='bg-white mt-2 mb-2 border-none m-0' style={{height: '0.125rem'}}/>
                    <ul className=' grid-cols-1 list-none m-0 grid' style={{gap: '8px 16px'}}>
                        <li>
                            <a href='/' target='_self' name='send-money-nigeria' 
                            className='text-white no-underline m-0 text-xl leading-6'>Send money to Nigeria</a>
                        </li>
                        <li>
                            <a href='/' target='_self' name='send-money-canada' 
                            className='text-white no-underline m-0 text-xl leading-6'>Send money to Canada</a>
                        </li>
                        <li>
                            <a href='/' target='_self' name='send-money-usa' 
                            className='text-white no-underline m-0 text-xl leading-6'>Send money to USA</a>
                        </li>
                        <li>
                            <a href='/' target='_self' name='send-money-ghana' 
                            className='text-white no-underline m-0 text-xl leading-6'>Send money to Ghana</a>
                        </li>
                        <li>
                            <a href='/' target='_self' name='send-money-denmark' 
                            className='text-white no-underline m-0 text-xl leading-6'>Send money to Denmark</a>
                        </li>
                    </ul>
                </div>
                <div className='p-5 flex-grow-0 basis-1/3 m-0 box-border'>
                    <h4 className='font-bold m-0' style={{fontSize: '2rem', lineHeight: '1.125'}}>Company</h4>
                    <hr className='bg-white mt-2 mb-2 border-none m-0' style={{height: '0.125rem'}}/>
                    <ul className=' grid-cols-1 list-none m-0 grid' style={{gap: '8px 16px'}}>
                        <li>
                            <a href='/' target='_self' name='send-money-nigeria' 
                            className='text-white no-underline m-0 text-xl leading-6'>How it works</a>
                        </li>
                        <li>
                            <a href='/' target='_self' name='send-money-canada' 
                            className='text-white no-underline m-0 text-xl leading-6'>About us</a>
                        </li>
                        <li>
                            <a href='/' target='_self' name='send-money-usa' 
                            className='text-white no-underline m-0 text-xl leading-6'>Blog</a>
                        </li>
                        <li>
                            <a href='/' target='_self' name='send-money-ghana' 
                            className='text-white no-underline m-0 text-xl leading-6'>Review</a>
                        </li>
                        <li>
                            <a href='/' target='_self' name='send-money-denmark' 
                            className='text-white no-underline m-0 text-xl leading-6'>Mobile app</a>
                        </li>
                        <li>
                            <a href='/' target='_self' name='send-money-denmark' 
                            className='text-white no-underline m-0 text-xl leading-6'>Career - we&apos;re hiring!</a>
                        </li>
                        <li>
                            <a href='/' target='_self' name='send-money-denmark' 
                            className='text-white no-underline m-0 text-xl leading-6'>Partners and affiliates</a>
                        </li>
                    </ul>
                </div>
                <div className='p-5 lg:grid-cols-4 sm:grid-cols-12 flex-grow-0 basis-1/3 m-0 box-border'>
                    <h4 className='font-bold m-0' 
                    style={{fontSize: '2rem', lineHeight: '1.125'}}>Help & Resources</h4>
                    <hr className='bg-white mt-2 mb-2 border-none m-0' style={{height: '0.125rem'}}/>
                    <ul className=' grid-cols-1 list-none m-0 grid' style={{gap: '8px 16px'}}>
                        <li>
                            <a href='/' target='_self' name='send-money-nigeria' 
                            className='text-white no-underline m-0 text-xl leading-6'>FAQ</a>
                        </li>
                        <li>
                            <a href='/' target='_self' name='send-money-canada' 
                            className='text-white no-underline m-0 text-xl leading-6'>Cash pickup</a>
                        </li>
                        <li>
                            <a href='/' target='_self' name='send-money-usa' 
                            className='text-white no-underline m-0 text-xl leading-6'>Bank transfer</a>
                        </li>
                        <li>
                            <a href='/' target='_self' name='send-money-ghana' 
                            className='text-white no-underline m-0 text-xl leading-6'>Mobile money</a>
                        </li>
                        <li>
                            <a href='/' target='_self' name='send-money-denmark' 
                            className='text-white no-underline m-0 text-xl leading-6'>Airtime topup</a>
                        </li>
                        <li>
                            <a href='/' target='_self' name='send-money-denmark' 
                            className='text-white no-underline m-0 text-xl leading-6'>Contact us</a>
                        </li>
                    </ul>
                </div>
                <div className='p-5 flex-grow-0 basis-1/3 m-0 box-border'>
                    <h4 className='font-bold m-0' 
                    style={{fontSize: '2rem', lineHeight: '1.125'}}>Legal</h4>
                    <hr className='bg-white mt-2 mb-2 border-none m-0' style={{height: '0.125rem'}}/>
                    <ul className=' grid-cols-1 list-none m-0 grid' style={{gap: '8px 16px'}}>
                        <li>
                            <a href='/' target='_self' name='send-money-nigeria' 
                            className='text-white no-underline m-0 text-xl leading-6'>Terms and conditions</a>
                        </li>
                        <li>
                            <a href='/' target='_self' name='send-money-canada' 
                            className='text-white no-underline m-0 text-xl leading-6'>Privacy policy</a>
                        </li>
                        <li>
                            <a href='/' target='_self' name='send-money-usa' 
                            className='text-white no-underline m-0 text-xl leading-6'>Cookies policy</a>
                        </li>
                        <li>
                            <a href='/' target='_self' name='send-money-ghana' 
                            className='text-white no-underline m-0 text-xl leading-6'>Financial statement</a>
                        </li>
                        <li>
                            <a href='/' target='_self' name='send-money-denmark' 
                            className='text-white no-underline m-0 text-xl leading-6'>Modern slave statement</a>
                        </li>
                        <li>
                            <a href='/' target='_self' name='send-money-denmark' 
                            className='text-white no-underline m-0 text-xl leading-6'>Gender pay gap</a>
                        </li>
                    </ul>
                </div>
                {/* <div className='p-5 flex-grow-0 basis-full m-0 box-border max-w-full'>
                    <hr className='bg-white mt-2 mb-2 border-none m-0' style={{height: '0.125rem'}}/>
                </div> */}
            </div>
            {/* <div className='items-center flex flex-row' style={{gap: '8px 24px', margin: '24px 0'}}>
                <h4 className='m-0 font-bold' style={{fontSize: '2rem', lineHeight: '1.125'}}>Choose your Region</h4>
            </div> */}
        </div>
    </footer>
  )
}


export default Footer