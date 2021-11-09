
import React, {useState} from 'react';
import { StyledProduct } from './styles/Product.styled';
import img1 from './images/image-product-1.jpg';
import img2 from './images/image-product-2.jpg';
import img3 from './images/image-product-3.jpg';
import img4 from './images/image-product-4.jpg';
import prev from './images/icon-previous.svg';
import next from './images/icon-next.svg';

const images = [img1, img2, img3, img4]; 

function Product() {
const qty = 0;
const length = images.length; 
const [current, setCurrent] = useState(0);

const nextSlide = () => {
  setCurrent(current === length - 1 ? 0 : current + 1)
}

const prevSlide =() => {
  setCurrent(current === 0 ? length - 1 : current - 1)
}
  return (
    <StyledProduct>
    <section className="product__container">
      <article className="product">
        <div className="img__section">
          <button className="prev" onClick={prevSlide}>
            <img src={prev} alt="" className="btn__img"/>
          </button>
          <button className="next" onClick={nextSlide}>
            <img src={next} alt="" className="btn__img"/>
          </button>
          {images.map((slide, index) => {
              return (
                <div className={index === current ? 'slide active' : 'slide'}>
                {index === current && (<img src={slide} alt="shoes" className="img"/>)}
                </div>
              )
          })}
        </div>
        <div className="product__content">
          <p className="seller">Sneaker Company</p>
          <h2 className="product__name">Fall Limited Edition Sneakers</h2>
          <p className="product__desc">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
          <div className="pricing">
          <div>
            <p className="product__price">$125.00</p>
            <p className="product__discount">50%</p>
          </div>
            <p className="previous__price">$250.00</p>
          </div>
          <div className="quantity">
            <button className="qty__btn">-</button>
            {qty}
            <button className="qty__btn">+</button>
          </div>
          <button className="addToCart">
            <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#fff" fill-rule="nonzero" className="cartIcon"/></svg>
            Add to cart
          </button>
        </div>
      </article>
    </section>
    </StyledProduct>
    
  )
}

export default Product