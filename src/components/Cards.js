import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Gain better insight into how your buildings are performing.</h1>
      <h2>We are changing the way businesses approach facilities management. Providing you with real-time insights, on-site, that ensures compliance, reduces risk, drives efficiency and reduces costs.</h2>
      <h2>Using the latest smart technology, we help you optimise how your facilities perform – capturing and translating data from occupancy and footfall to asset tracking and building management with a specific focus on affordability and return on investment.</h2>
      <h2>Seeing everything through the prism of user experience, we have developed a product that is truly unique, underpinned by a customer-first corporate philosophy.</h2>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/time.png'
              text='Save time with our real-time Cleaning Schedule'
              label='Time'
              path='/services'
            />
            <CardItem
              src='images/savings.jpg'
              text='Check out your savings through data visualization tools'
              label='Analysis'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/occupancy.jpg'
              text='Keep tabs on occupancy levels'
              label='Occupancy'
              path='/services'
            />
            <CardItem
              src='images/sensor.jpg'
              text='Use our sensors to detect heat levels'
              label='Sensors'
              path='/products'
            />
            <CardItem
              src='images/save.jpg'
              text='Lots of $$$ saved'
              label='Money'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
