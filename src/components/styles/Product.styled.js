import styled from 'styled-components';

export const StyledProduct = styled.div `
font-family: 'Kumbh Sans', sans-serif;
  .img__section{ 
    width: 100vw;
    height: 50vh;
  }
  .slide {
    display: none;
    width: 100vw;
    height: 50vh;
    overflow: hidden;
  }
  .img {
    width: 100vw; 
    height: fit-content; 
    overflow: hidden;
  }
  .active {
    display: block;
  }
  .prev , 
  .next {
    position: absolute;
    top: 30%;
    border: none;
    padding: 8px 10px;
    border-radius: 50%;
  }

  .btn__img {
    height: 10px;
    width: 10px;
  }
  .prev {
    left: 15px;
  }
  .next {
    right: 15px;
  }
  .product__content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start; 
    width: 90vw;
    margin: 10px 10px;
  }
  .seller {
    font-size: 12px;
    font-weight: 700;
    color: hsl(26, 100%, 55%);
    text-transform: uppercase;
  }
  .product__name {
    color: hsl(220, 13%, 13%);
  }
  .product__desc {
    color: hsl(219, 9%, 45%);
    font-size: 14px;
    font-weight: 400;
  }
  .pricing {
    width: 90vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    align-self: center;
  }
  .product__price {
    font-size: 23px;
    font-weight: 700;
    color: hsl(220, 13%, 13%);
    display: inline;
  }
  .product__discount {
    display: inline;
    font-size: 14px;
    font-weight: 700;
    color: hsl(26, 100%, 55%);
    background-color: hsl(25, 100%, 94%);
    padding: 5px;
    margin-left: 5px;
    border-radius: 5px;
  }
  .previous__price {
    font-size: 14px;
    font-weight: 700;
    color: hsl(220, 14%, 75%);
    text-decoration: line-through;
  }
  .quantity {
    background-color: hsl(223, 64%, 98%);
    width: 90vw;
    border-radius: 5px;
    font-size: 20px;
    font-weight: 700;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    align-self: center;
  }
  .qty__btn {
    color:hsl(26, 100%, 55%);
    font-size: 20px;
    font-weight: 700;
    border: none;
    padding: 10px;
    background-color: hsl(223, 64%, 98%);
  }
  .addToCart {
    width: 90vw;
    padding: 10px;
    border-radius: 5px;
    color: white;
    font-size: 20px;
    font-weight: 700;
    border: none;
    background-color: hsl(26, 100%, 55%);
    text-align:center; 
  }
  .cartImg {
    fill: white;
    margin-right: 5px;
  }
`