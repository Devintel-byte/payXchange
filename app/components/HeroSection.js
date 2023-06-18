'use client'

import React, {useState} from 'react'
import Image from 'next/image'
import heroImage from '../../public/hero-image1.jpg'
import trustPilot from '../../public/logo-white-trustpilot-copy.svg'
import dynamic from 'next/dynamic'

const Component1 = dynamic(() => import('./SendField'))
const Component2 = dynamic(() => import('./ReceiveField'))

const HeroSection = () => {

    const [inputValue, setInputValue] = useState('');
    const [ isOpen, setIsOpen ] = useState(false);
    
    const handleChange = (e) => {
        const value = e.target.value

        if (value === '' || /^\d+$/.test(value)) {
            setInputValue(value)
          }
    };

    const toggleDropdown = () => {
        setIsOpen(!isOpen)
    }

  return (
    <main className='block font-sans'>
        <section className="relative from-slate-300">
        <div className="dSec flex items-end flex-row gap-10">
        <div className="hSec">
            <Image src={heroImage} alt="image of lady smiling" quality={100} title="hero-homepage" loading="eager" decoding="async" data-nimg='fill' 
            className="imgStyle h-full w-full object-cover left-0 right-0 top-0 bottom-0 absolute" 
            sizes="100vw" priority
            />
            <div id="hero-content" className="text-left justify-start relative">
            <h1 className="text-left text-white mb-1" style={{fontSize: '3.25rem', lineHeight: '1.02'}}>
                <b>International money transfer</b>
            </h1>
            <br/>
            <p className="text-white" style={{fontSize: '1.5rem', lineHeight: '1.1'}}>
                <b>Fast, flexible and secure international money transfers across the world. Save time and money when you send money internationally with us.</b>
            </p>
            <a className="sendBtn text-white bg-purple-700 hover:bg-purple-900 mt-4 shadow-none inline-flex cursor-pointer outline-none items-center justify-center relative box-border" href="/" tabIndex='0' aria-disabled='false' name='send-money-button'>
                <span className="w-full">Send money</span>
            </a>
            <div id="sponsors" className="flex mt-4 text-left justify-start">
                <a href="/" className="mb-0 h-12 inline-block m-0">
                    <Image src={trustPilot} alt="trust pilot" />
                </a>
                <div className="flex ml-4 pl-4 border-l border-solid border-l-white">
                    <a href="/" className="m-0">
                        <span className="block text-white font-bold" style={{fontSize: '1.25rem', lineHeight: '1.2'}}>Great</span>
                        <span className="block text-white font-bold" style={{fontSize: '1.25rem', lineHeight: '1.2'}}>84,095+ reviews</span>
                    </a>
                </div>
            </div>
            </div>
        </div>
        <div className="chFrame relative">
            <div className="chFrame-bg text-white text-center p-4">
                <p className="text-base font-medium m-0">Exchange rate</p>
                <div className="flex text-white mb-0 justify-center">
                    <span className="text-2xl font-bold">
                        <strong>1 USD = 1.32794 CAD</strong>
                    </span>
                </div>
            </div>
            <div data-testid='calculator' className="calcFrame relative p-8 shadow-none">
                <div id="pxElement" data-testid='pxElement' hidden className="verFy text-white z-1000 top-0 left-0 h-full p-3 absolute text-center items-center flex-col justify-center">
                    <h2>This is an added security measure to keep your information safe. Click and hold to help us verify you.</h2>
                </div>

                <div className="mb-6" id="send-field-container">
                    <div className="flex mb-2 rounded-se-lg">
                        <div className="tabSpace conSpace flex flex-col p-4 border-2 border-solid border-purple-900 bg-white">
                            <span className=" text-zinc-700 text-base font-medium m-0">You send</span>
                            <div className="text-purple-700 font-bold pr-2 inline-flex cursor-text relative text-base box-border items-center">
                                <input autoComplete="off" 
                                id="send-field-amount" 
                                placeholder="100.00" 
                                type="decimal" 
                                inputMode="numeric" 
                                pattern="[0-9]*" 
                                value={inputValue}
                                onChange={handleChange} 
                                aria-labelledby="send-field-amount"
                                className="inputFrame shadow-none h-9 p-0 text-4xl w-full border-0 m-0 block min-w-0 bg-none box-content font-bold leading-5 outline-none placeholder:text-purple-700"/>
                            </div>
                        </div>

                        <div className="tabSpace2 selCountry cursor-pointer bg-purple-950 flex items-center justify-center">
                        <div data-testid='field-country-select' 
                        className="conSpace flex items-center justify-between" 
                        style={{padding: '24px 16px'}}>
                        <Component1/>
                        </div>
                        </div>
                    </div>
                </div>

                <div className="mb-6" id="receive-field-container">
                <div className="flex mb-2 rounded-se-lg">
                    <div className="tabSpace conSpace flex flex-col p-4 border-2 border-solid border-purple-900 bg-white">
                        <span className=" text-zinc-700 text-base font-medium m-0">They Get</span>
                        <div className="text-purple-700 font-bold pr-2 inline-flex cursor-text relative text-base box-border items-center">
                            <input autoComplete="off" 
                            id="recieve-field-amount"
                            placeholder="100.00" 
                            type="decimal" 
                            inputMode="numeric" pattern="[0-9]*" 
                            value={inputValue} 
                            onChange={handleChange} 
                            aria-labelledby="send-field-amount" 
                            className="inputFrame shadow-none h-9 p-0 text-4xl w-full border-0 m-0 block min-w-0 bg-none box-content font-bold leading-5 outline-none placeholder:text-purple-700"/>
                        </div>
                    </div>
                    <div className="tabSpace2 selCountry cursor-pointer bg-purple-950 flex items-center">
                        <div data-testid='field-country-select' 
                        className="conSpace flex items-center justify-between" 
                        style={{padding: '24px 16px'}}>
                        <Component2/>
                        </div>
                    </div>
                    </div>
                </div>
                
                <div>
                    <div className="w-full m-root items-center flex justify-between mb-2" data-testid='payout-method-container'>
                        <div className="conSpace">
                            <span className="font-medium text-base">Receive method</span>
                        </div>
                        <div className="flex justify-end conSpace">
                            <div className="" data-testid='payment-method-select'>
                                <div className="border-0 m-0 inline-flex p-0 relative min-w-0 flex-col align-top" aria-expanded='false' aria-haspopup='listbox'>
                                    <div className="relative rounded inline-flex box-border items-center font-normal text-base cursor-pointer" 
                                    style={{paddingRight: '14px'}}
                                    onClick={toggleDropdown}>
                                        <input 
                                        id='payment-method-label'
                                        className="inputFrame inputStyle text-black font-bold w-full border-0 m-0 block box-content bg-none min-w-0 outline-0 focus:border-0  focus:shadow-none focus:ring-0 cursor-pointer" 
                                        aria-invalid='false' 
                                        type="text" 
                                        aria-labelledby="payment-method-label" 
                                        value='Bank transfer' 
                                        readOnly />
                                        <div className="ml-2 flex whitespace-nowrap items-center" 
                                        style={{height: '0.01em', maxHeight: '2em'}}
                                        >
                                        <svg className="w-4 h-4 inline-block font-bold shrink-0 select-none" 
                                        style={{fontSize: '2rem', color: '#22AABA', fill: 'currentcolor', width: '1em', height: '1em'}} 
                                        focusable="false" 
                                        viewBox="0 0 24 24" 
                                        aria-hidden="true" 
                                        data-testid="payout-select-input-img">
                                        <path d="M15.88 9.29L12 13.17 8.12 9.29a.9959.9959 0 00-1.41 0c-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41-.39-.38-1.03-.39-1.42 0z">
                                        </path>
                                        </svg>
                                        </div>
                                        <fieldset className="pl-2 rounded right-0 left-0 bottom-0 m-0 absolute overflow-hidden pointer-events-none" aria-hidden='true' style={{top: '-5px', padding: '0 8px', border: '2px solid #000000'}}>
                                            <legend className="p-0 text-left" style={{width: '0.01px', font: '1rem', lineHeight: '11px'}}>
                                                <span></span>
                                            </legend>
                                        </fieldset>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {isOpen && (
                            <div role='tooltip'
                            className='w-[366px] absolute top-0 left-0 z-[1300] mt-2 overflow-hidden' 
                            style={{transform: 'translate3d(32px, 338px, 0px)', willChange: 'transform', color: '#586069', border: '1px solid #eaecef', borderRadius: '15px', boxShadow: '0 2px 7px 6px rgba(0, 0, 0, 0.1)'}}>
                                <ul id='payout-method-dropdown-list' 
                                className='max-w-[27.5rem] overflow-y-auto text-[0.875rem] px-4 py-2 font-medium rounded-2xl bg-white leading-[1.57] m-0'>
                                    <div className='text-[#3D1152] mt-2 pl-2 mb-4 pr-2 font-bold leading-[1.2] text-[1.25rem] m-0'>Receive method</div>
                                    <div className='border-[#813FD6] border-[3px] border-solid block rounded mb-2 w-full relative box-border text-left no-underline cursor-pointer' 
                                    style={{padding: '12px 8px'}}
                                    role='option'
                                    aria-selected='true'
                                    tabIndex='0'
                                    >
                                        <div className='mb-3'>
                                            <p className='text-[#813FD6] text-base leading-5 font-medium m-0'>
                                                <strong>Bank Transfer</strong>
                                            </p>
                                            <p className='text-base leading-5 font-medium m-0'>Send directly to a bank</p>
                                        </div>
                                        <p className='text-[0.875rem] leading-5 font-medium m-0'>90% of bank transfers with PayXchange are completed the same day.</p>
                                    </div>
                                    <div className='border-[#813FD6] block rounded mb-2 w-full relative box-border text-left no-underline cursor-pointer' 
                                    style={{border: '3px solid transparent', padding: '12px 8px'}}
                                    role='option'
                                    aria-selected='true'
                                    tabIndex='1'
                                    >
                                        <div className='mb-3'>
                                            <p className='text-[#813FD6] text-base leading-5 font-medium m-0'>
                                                <strong>Airtime Top up</strong>
                                            </p>
                                            <p className='text-base leading-5 font-medium m-0'>Send money for airtime top up</p>
                                        </div>
                                        <p className='text-[0.875rem] leading-5 font-medium m-0'>90% of PayXchange airtime transfers are received in less than 10 minutes.</p>
                                    </div>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
                <button className="block mt-6 w-full text-xl text-white bg-purple-700 box-border shadow-none p-4 rounded font-bold m-0 border-0 cursor-pointer outline-0 relative select-none" style={{minWidth: 'unset'}}>
                    <span className="">Continue</span>
                </button>
            </div>
        </div>
        </div>
        </section>
    </main>
  )
}

export default HeroSection