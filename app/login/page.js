import React from 'react'
import NavbarOne from '../components/NavbarOne'

const LogIn = () => {
  return (
    <>
      <NavbarOne/>
      <main id='main-content' className='overflow-hidden'>
        <div>
          <div className='bg-[#F5F5F5]'>
            <div className='max-w-7xl w-full block box-border mr-auto ml-auto' style={{padding: '0px 64px'}}>
              <div className='w-full flex flex-wrap box-border'>
                <div className='grow-0 basis-1/2 max-w-[50%] m-0 box-border'>
                  <div className='mt-[130px] mb-12 rounded-lg text-black bg-white font-sans' 
                  style={{padding: '56px 64px', borderRadius: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12', transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'}}>
                    <h1 className='text-5xl mb-8 leading-[1.2] m-0 text-left font-bold'>Sign in and send money to your friends and family</h1>
                    <form>
                    <div className="relative mb-4" data-te-input-wrapper-init>
                      <input
                        type="email"
                        className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-4 py-[0.75rem] leading-[1.6] outline outline-1 outline-[#813FD6] transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="email-input"
                        aria-describedby="emailHelp"
                        placeholder="Enter email" />
                      <label
                        for="email-input-label"
                        className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-[#813FD6] font-bold transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:font-normal peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200">
                        Email
                        </label>
                    </div>

                    <div className="relative mb-4 w-full inline-flex" data-te-input-wrapper-init>
                      <input
                        type="password"
                        className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-4 py-[0.75rem] leading-[1.6] outline outline-1 outline-[#813FD6] transition-all duration-200 ease-linear focus:placeholder:opacity-100 focus:outline-2 focus:outline-[#813FD6] data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="password-input"
                        placeholder="Password" />
                      <label
                        for="password-input-label"
                        className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-[#813FD6] font-bold transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:font-normal peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200">
                        Password
                      </label>
                        <button 
                        className='opacity-50 text-[#813FD6] overflow-visible p-[0.625rem] text-center text-[1.5rem] rounded-[50%] relative select-none cursor-pointer outline-0 border-0 m-0 items-center align-middle no-underline justify-center bg-transparent' 
                        style={{flex: '0 0 auto', transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'}}>
                          <span className='flex w-full text-[#813FD6]'>
                            <svg className="fill-[currentColor] w-[1em] h-[1em] inline-block shrink-0 font-semibold text-[1.25rem] select-none"
                            style={{transition: 'fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'}} 
                            focusable="false" 
                            viewBox="0 0 24 24" 
                            aria-hidden="true" 
                            data-testid="visibility-on-icon">
                            <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z">
                            </path>
                            </svg>
                          </span>
                        </button>
                    </div>
                  </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default LogIn