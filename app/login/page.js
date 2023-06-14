'use client'
import React, { useState, useEffect } from 'react';
import NavbarOne from '../components/NavbarOne';
import Image from 'next/image';
import appstore from '../../public/appstore.svg'
import playstore from '../../public/googleplay.svg'
import loginImage from '../../public/800___px_-_800___px.avif'

const LogIn = () => {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordInputType, setPasswordInputType] = useState('password');
  const [isFormValid, setIsFormValid] = useState(false);
  const [lastField, setLastField] = useState('');

  const handleEmailFocus = () => {
    setEmailFocused(true);
  };

  const handleEmailBlur = () => {
    setEmailFocused(false);
  };

  const handleEmailChange = (event) => {
    setEmailValue(event.target.value);
    setLastField('email');
  };

  const handlePasswordFocus = () => {
    setPasswordFocused(true);
  };

  const handlePasswordBlur = () => {
    setPasswordFocused(false);
  };

  const handlePasswordChange = (event) => {
    setPasswordValue(event.target.value);
    setLastField('password');
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
    setPasswordInputType(passwordVisible ? 'password' : 'text');
  };

  useEffect(() => {
    setIsFormValid(
      (lastField === 'password' && passwordValue.length > 0) ||
      (lastField === 'email' && emailValue.length > 0)
    );
  }, [emailValue, passwordValue, lastField]);

  return (
    <>
      <NavbarOne />
      <main id="main-content" className="overflow-hidden">
        <div>
          <div className="bg-[#F5F5F5]">
            <div className="max-w-7xl w-full block box-border mx-auto" style={{ padding: '0px 64px' }}>
              <div className="w-full flex flex-wrap box-border">
                <div className="flex-grow-0 flex-basis-1/2 max-w-[50%] m-0 box-border">
                  <div className="mt-[130px] mb-12 rounded-lg text-black bg-white font-sans px-[56px] py-[64px] transition-all duration-300 ease-in-out">
                    <h1 className="text-5xl mb-8 leading-[1.2] m-0 text-left font-bold">
                      Sign in and send money to your friends and family
                    </h1>
                    <form action="">
                      <div className="w-full mb-4 relative">
                        <label
                          htmlFor="email-input"
                          className={`labelDecor absolute top-0 left-0 font-bold text-[1.2rem] pointer-events-none transition-all duration-300 ease-in-out ${
                            emailValue.length > 0 || emailFocused ? 'hidden' : ''
                          }`}
                          style={{ transformOrigin: 'top left', fontSize: emailFocused ? '0.8rem' : '' }}
                        >
                          Email
                        </label>
                        <div className={`relative text-black ${emailFocused ? 'border-[#813FD6]' : 'border'}`}>
                          <input
                            id="email-input"
                            type="email"
                            name="email"
                            className={`w-full px-4 py-[1.25rem] border-0 bg-transparent focus:outline-none ${
                              emailFocused ? 'text-black' : ''
                            }`}
                            onFocus={handleEmailFocus}
                            onBlur={handleEmailBlur}
                            onChange={handleEmailChange}
                            value={emailValue}
                          />
                          <div
                            className={`absolute bottom-0 left-0 right-0 h-[1px] bg-[#813FD6] transition-all duration-300 ease-in-out ${
                              emailFocused ? 'scale-x-129' : 'scale-x-0'
                            }`}
                          ></div>
                        </div>
                      </div>

                      <div className="w-full mb-4 relative">
                        <label
                          htmlFor="password-input"
                          className={`labelDecor absolute top-0 left-0 font-bold text-[1.2rem] pointer-events-none transition-all duration-300 ease-in-out ${
                            passwordValue.length > 0 || passwordFocused ? 'hidden' : ''
                          }`}
                          style={{ transformOrigin: 'top left', fontSize: passwordFocused ? '0.8rem' : '' }}
                        >
                          Password
                        </label>
                        <div className={`relative text-black ${passwordFocused ? 'border-[#813FD6]' : 'border'}`}>
                          <input
                            id="password-input"
                            type={passwordInputType}
                            name="password"
                            className={`w-full px-4 py-[1.25rem] border-0 bg-transparent focus:outline-none ${
                              passwordFocused ? 'text-[#813FD6]' : ''
                            }`}
                            onFocus={handlePasswordFocus}
                            onBlur={handlePasswordBlur}
                            onChange={handlePasswordChange}
                            value={passwordValue}
                          />
                          <div
                            className={`absolute bottom-0 left-0 right-0 h-[1px] bg-[#813FD6] transition-all duration-300 ease-in-out ${
                              passwordFocused ? 'scale-x-129' : 'scale-x-0'
                            }`}
                          ></div>
                          <div
                            className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
                            style={{ color: '#813FD6' }}
                            onClick={togglePasswordVisibility}
                          >
                            {passwordVisible ? (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="#813FD6"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M19.07 13.99C18.8833 14.6556 18.605 15.275 18.244 15.83M14.12 8.53999C15.6088 9.345 16.815 10.5513 17.62 12M10 14.12C10.0018 14.04 10.0038 13.96 10.006 13.88M4.93 10.06C5.73494 9.25599 6.85507 8.71616 8 8.53999C7.42797 9.34997 7.43901 10.52 8.034 11.115C8.62901 11.71 9.79993 11.722 10.61 11.15C10.45 12.2834 9.91304 13.3677 9.06998 14.0699C8.22693 14.7721 7.15545 14.9992 6.06 14.72C6.69283 15.1934 7.50771 15.4173 8.34 15.34C7.65506 15.7474 6.8355 16.0011 6 16C3.79086 16.0044 1.99212 14.1886 2 12C2.00216 10.315 2.72361 8.71723 4.01 7.67C3.91159 8.51734 4.08884 9.382 4.52 10.12C4.42718 10.1732 4.34125 10.2322 4.26 10.3M12 20H12.01M6 20H6.01M18 20H18.01M12 4H12.01M6 4H6.01M18 4H18.01"
                                />
                              </svg>
                            ) : (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 12a9 9 0 016.9 14.62L19.31 21.3A1 1 0 0021 20.69l-6.4-2.41A9 9 0 019 12z"
                                />
                              </svg>
                            )}
                          </div>
                        </div>
                      </div>

                      <button
                        type="submit"
                        className={`bg-[#813FD6] hover:bg-[#6600CC] text-white font-bold py-3 px-8 rounded focus:outline-none ${
                          isFormValid ? '' : 'bg-gray-300 cursor-not-allowed'
                        }`}
                        disabled={!isFormValid}
                      >
                        Continue
                      </button>
                    </form>

                    <div className='rounded-lg mt-8' style={{border: '1px solid #BDBDBD'}}>
                        <a className='flex p-4 no-underline m-0 text-black hover:text-purple-500' href='#'>
                          <span className='grow text-base font-medium leading-5'>Forgotten password? Reset it here</span>
                          <svg className="w-4 h-4 inline-block shrink-0 text-[1.25rem] select-none font-semibold" 
                          style={{fill: 'currentcolor', transition: 'fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'}}
                          focusable="false" 
                          viewBox="0 0 24 24" 
                          aria-hidden="true">
                          <path d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5z">
                          </path>
                          </svg>
                        </a>
                        <hr className='bg-[#BDBDBD] h-[1px]'/>
                        <a className='flex p-4 no-underline m-0 text-black hover:text-purple-500' href='#'>
                          <span className='grow text-base font-medium leading-5'>New to PayXchange? Signing up here</span>
                          <svg className="w-4 h-4 inline-block shrink-0 text-[1.25rem] select-none font-semibold" 
                          style={{fill: 'currentcolor', transition: 'fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'}}
                          focusable="false" 
                          viewBox="0 0 24 24" 
                          aria-hidden="true">
                          <path d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5z">
                          </path>
                          </svg>
                        </a>
                      </div>
                    
                  </div>
                </div>
                <div className="flex-grow-0 flex-basis-1/2 max-w-[50%] m-0 box-border">
                  <div className='flex flex-col-reverse' id='login-download-section'>
                  <div className='mt-0 mb-[136px] flex flex-col items-center'>
                    <h2 className='text-center font-bold text-xl leading-[1.2] m-0'>Download the mobile app</h2>
                    <div className='flex w-full flex-wrap mt-4 items-center flex-row justify-center' 
                    style={{gap: '0px 16px', padding: '0px 16px'}}>
                      <a className='flex underline m-0' 
                      style={{color: '#813FD6'}} href='/'>
                          <Image 
                          src={appstore} 
                          width={200} 
                          height={59.2593} 
                          loading='lazy' 
                          title='App Store' 
                          alt='app-store-download' 
                          style={{color: 'transparent'}} />
                      </a>
                      <a className='flex underline m-0' 
                      style={{color: '#813FD6'}} href='/'>
                          <Image 
                          src={playstore} 
                          width={200} 
                          height={59.2593} 
                          loading='lazy' 
                          title='App Store' 
                          alt='app-store-download' 
                          style={{color: 'transparent'}} />
                      </a>
                    </div>
                  </div>
                  <div className='ml-8 min-h-[650px] flex-[1] relative'>
                    <Image 
                    className='text-transparent object-cover max-w-none h-[100vh]' 
                    style={{objectPosition: 'left bottom'}}
                    src={loginImage} 
                    alt='An octagon sharp with a centered position coin' 
                    width={800} 
                    height={700}
                    decoding='async'
                    title='PayXchange login display Desktop'
                    priority
                    />         
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default LogIn;
