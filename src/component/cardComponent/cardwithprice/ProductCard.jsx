import React from 'react';
import './style.scss'
import CardImg from "../../../asset/com.png";


const ProductCard = ({ imgPath, heading, Description, buttonText,offer,timeOutOffer ,actualRate,actualMoney  }) => {
  return (
    <div className="productCard">
      <div className='imgSection'>
        <img src={CardImg} alt=""  />
      </div>
      <div className="cardbody">
        <div className='cardOffer'>
        <span className='offer '>20% off</span>
        <span className='offer '>Limited time</span>
        </div>
        <h5 className="card-title">Webbuilder 1</h5>
        <p className="card-text">Computer  Modern clasic with wix support</p>
        <div className="rateSection">
        <span className='rate'>$49.96</span>
        <span className='rate2'>$39.96</span>
        <span className='offerRed'>(20% off)</span></div>
        <button >View Deal</button>
      </div>
    </div>
  );
}

export default ProductCard;
