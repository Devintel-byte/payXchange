import React from 'react'

const CardSlider = ({ cardData }) => {

  return (
    <div className='relative flex flex-row gap-4'>
      {cardData.map(card => (
            <div className='h-full p-2' style={{fontFamily: 'Gilroy, Arial'}} key={card.id}>
            <div className='text-white flex h-[15.5rem] w-[15.5rem] relative bg-purple-700 rounded-lg shadow-none'>
                  <div className='h-full flex p-4 relative items-start flex-col'>
                      <h3 className='mb-2 font-bold leading-5 text-xl m-0 card-title'>{card.title}</h3>
                      <p className='mb-2 text-base leading-5 font-medium card-descr'>{card.descr}</p>
                      <a className='mt-auto leading-5 text-base box-border rounded inline-flex cursor-pointer m-0 relative select-none items-center align-middle justify-center no-underline bg-transparent outline-none hover:border-x-slate-800' style={{color: '#FFFFFF', border: '2px solid #FFFFFF', padding: '0.625rem', minWidth: 'unset', textTransform: 'initial'}} href='/'>
                          <span className='w-full' style={{justifyContent: 'inherit', display: 'inherit', alignItems: 'inherit'}}>{card.read}</span>
                      </a>
                  </div>
              </div>
            </div>
          ))}
    </div>
  )
}

export default CardSlider
