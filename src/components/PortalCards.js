import React from 'react';
import './PortalCards.css';
import CardItem from './CardItem';

function PortalCards() {
  return (
    <div className='cards'>
      <h1>Control *BUSINESSES* Savings</h1>
      <h2>Choose your Service:</h2>
      
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/time.png'
              text='Cleaning Schedule'
              label='Schedule'
              path='/services'
            />
            <CardItem
              src='images/savings.jpg'
              text='Roll Up Analysis'
              label='Analysis'
              path='/products'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/help.jpg'
              text='Need Help?'
              label='A helping hand'
              path='/help'
            />
            <CardItem
              src='images/contact-us.png'
              text='Contact Us'
              label='Get in Contact'
              path='/contact'
            />
            {/* <CardItem
              src='images/save.jpg'
              text='Lots of $$$ saved'
              label='Money'
              path='/sign-up'
            /> */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PortalCards;
