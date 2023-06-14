import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { AiOutlineSearch } from 'react-icons/ai';
import axios from 'axios';

const SendField = () => {
  const [inputValue, setInputValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [countries, setCountries] = useState([]);
  const [selectedOption, setSelectedOption] = useState({
    name: 'United States', // Default Country name
    flag: 'https://flagcdn.com/us.svg', // Flag url
    currencyCode: 'USD' // Currency code tag
  })

  useEffect(() => {
    // Fetch countries from API
    const fetchData = async () => {
      try {
        const res = await axios.get('https://restcountries.com/v2/all');
        const jsonData = await res.data;
        setCountries(jsonData);
      } catch (error) {
        console.error('Error fetching country data:', error);
      }
    };

    fetchData();
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (country) => {
    setSelectedOption(country);
    setIsOpen(false);
  };

  const getCurrencyCode = (country) => {
    if (country.currencies && country.currencies.length > 0) {
      return country.currencies[0]?.code || '';
    }
    return '';
  };

  const inputClassName = inputValue 
  ? 'magUnd1 w-0 p-1 min-w-[30px] grow overflow-ellipsis border-0 m-0 block bg-none box-content font-medium placeholder:border-0 text-black' 
  : 'magUnd1 w-0 p-1 min-w-[30px] grow overflow-ellipsis opacity-[0.5] border-0 m-0 block bg-none box-content font-medium placeholder:border-0';

  const filteredCountries = countries.filter((country) => {
    const countryName = country.name.toLowerCase();
    const inputValueLowerCase = inputValue.toLowerCase();
    return countryName.includes(inputValueLowerCase);
  });

  return (
    <div className="relative dropdown-container font-sans">
      <button
        id="states-button"
        data-dropdown-toggle="dropdown-states"
        className="dropdown-toggle flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-white"
        type="button"
        onClick={toggleDropdown}
      >
        {selectedOption ? (
          <>
            <Image 
            src={selectedOption.flag} 
            alt="country-flag" 
            width={32} 
            height={32} 
            className="self-center cursor-pointer mr-2" />
            <div className='flex flex-col'>
            <strong className="text-white text-lg font-bold m-0">
            {getCurrencyCode(selectedOption)}
            <span className="text-white text-xl">{selectedOption.currencyCode}</span>
            </strong>
            </div>
            <svg
              className="inline-block transition-transform duration-200 transform font-semibold"
              style={{ fontSize: '2.5em', color: 'white', fill: 'currentcolor', width: '1em', height: '1em' }}
              focusable="false"
              viewBox="0 0 24 24"
              color="white"
              aria-hidden="true"
            >
              <path d="M15.88 9.29L12 13.17 8.12 9.29a.9959.9959 0 00-1.41 0c-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41-.39-.38-1.03-.39-1.42 0z" />
            </svg>
          </>
        ) : (
          <span>Loading...</span>
        )}
      </button>
      {isOpen && (
        <div
          id="dropdown-states"
          className="dropdown-list absolute w-[364px] bg-white"
        >
          <div
            className="w-full"
            aria-expanded="true"
            role="combobox"
            aria-owns="send-field-container-search-input-popup"
            aria-controls=""
          >
            <div className="w-full border-0 rounded-2xl m-0 p-0 inline-flex flex-col relative min-w-0 align-top">
              <div className="magInp magUnd flex-wrap relative w-full cursor-text inline-flex box-border items-center font-medium">
                <div className="magInpStart magInpRoot sticky">
                  <AiOutlineSearch size={18} className="text-purple-400 font-medium" />
                </div>
                <input
                  aria-invalid="false"
                  autoComplete="off"
                  id="send-field-container-search-input"
                  placeholder="Enter a country or currency"
                  type="text"
                  aria-autocomplete="list"
                  autoCapitalize="none"
                  spellCheck="false"
                  aria-controls="send-field-container-search-input-popup"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value.toLowerCase())}
                  className={inputClassName}
                  style={{height: '1.1876em', fontSize: '1rem' }}
                />
              </div>
            </div>
          </div>
          <div className="w-[362px] relative z-[1300]" role="presentation">
            <div
              className="overflow-hidden m-0 shadow-none text-[#586069]"
              style={{ fontSize: '0.8125rem', borderBottomLeftRadius: '16px', borderBottomRightRadius: '16px' }}
            >
              <ul className="py-2 text-[#586069] max-h-[40vh] overflow-auto" aria-labelledby="states-button dropdown-list">
                {filteredCountries.map((country) => (
                  <li
                    key={country.alpha3Code}
                    onClick={() => handleOptionClick(country)}
                    className={`${
                    selectedOption && selectedOption.alpha3Code === country.alpha3Code ? 'selected' : '' 
                    } flex outline-0 box-border cursor-pointer items-center justify-start font-medium leading-5 list-none`}
                    style={{ minHeight: 'auto', padding: '12px 19px' }}
                    tabIndex="-1"
                    role="option"
                    aria-selected="false"
                    aria-disabled="false"
                    data-option-index="0"
                  >
                    <div className="w-full items-center flex cursor-pointer">
                      <Image
                        src={country.flag}
                        alt={country.name}
                        width={32}
                        height={32}
                        className="self-center cursor-pointer mr-1"
                        style={{ color: 'transparent' }}
                      />
                      <div className="w-full items-center flex cursor-pointer">
                        <p className="text-[#444C4C] text-base leading-5 font-medium m-0">
                          {country.name}
                        </p>
                      </div>
                      <p className="text-base text-[#444C4C] leading-5 font-medium m-0">
                      {getCurrencyCode(country)}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SendField;
