import React from 'react'
import cardData from '../data/cardData'
import CardSlider from './CardSlider'
//import Slider from 'react-slick'

const BuyMethod = () => {
//     const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1, 
//     // prevArrow: <PrevArrow/>,
//     // nextArrow: <NextArrow/>,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: false,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: false,
//         },
//       },
//     ], 
//   };

//   const PrevArrow = (props) => (
//     <button
//       {...props}
//       className="slick-arrow slick-prev"
//       aria-label="Previous"
//     />
//   );

//   const NextArrow = (props) => (
//     <button
//       {...props}
//       className="slick-arrow slick-next"
//       aria-label="Next"
//     />
//   );

  return (
    <section className='text-base leading-5 font-medium' id='ways-to-send-money-internationally-cards' style={{padding: '80px 0', fontFamily: 'Gilroy, Arial'}}>
    <div className='pl-20 pr-20 block box-border ml-auto mr-auto w-full'>
        <h2 className='m-root font-bold' style={{fontSize: '2rem', lineHeight: '1.125', marginBottom: '8px'}}>Ways to send money internationally</h2>
        <p className='mb-8 font-medium' style={{fontSize: '1.5rem', lineHeight: '1.16666666667'}} data-testid='cards-description'>The cost and speed of a money transfer depends on the receiving country, the receive method as well as how it is paid for. Currently, there are a maximum of four different receive methods available on PayXchange.</p>
        <CardSlider cardData={cardData}/>
    </div>
    </section>
  )
}

export default BuyMethod