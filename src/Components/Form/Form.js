import React from 'react'

import "./Form.css"

export default function Form() {
  return (
    <section  className="quickPay-section" >
    <div className="container" >
      <div className="row" >
        <div className="col-xl-12">
          <div className="contact-form-wrapper">
            <div className="row">
              <div className="col-xl-10 col-lg-8 mx-auto">
                <div className="section-title text-center">
                  <span> Quick Payment </span>
                </div>
              </div>
            </div>
            <hr/>
            <form action="#" className="contact-form quickPay-form">
              <div className="row">

                <div className="col-md-12">
                <label className='label'>I want to buy </label>

                    <select className="form-select" id='select1' aria-label="Default select example" required>
                      <option defaultValue="Open this select menu">Buy Airtime</option>
                      <option value="1">Buy data </option>
                      <option value="2">Pay Electricity bill</option>
                      <option value="3">Pay internet bill</option>
                    </select>
                </div>
               

              </div>
              <div className="row">
                <div className="col-md-6">
                  <input type="number" name="phone" id="phone" placeholder="Phone" required />
                </div>
                <div className="col-md-6">
                  <input type="number" name="subject" id="tel" placeholder="Enter your Amount" required />
                </div>
              </div>
             
              <div className="row">
                <div className="col-12">
                  <div className="button text-center rounded-buttons">
                    <button type="submit" className="btn primary-btn rounded-full">
                      Pay now
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
/**
 * for button 
 * https://codepen.io/hilwat/pen/BeemVX
 */

/**4
 * <div class="wrapper">
  <header class="header"><h1 class="titlehead">Accessible CSS Select Box</h1></header>
  <p class="selectstyle selectstyle--style1">
    <label for="favcity1" class="selectstyle__label">Choose your #1 favorite city?</label>
    <span class="selectstyle__box">
      <select id="favcity1" name="favcity1" class="selectstyle__box__select">
        <option value="0">No favorite</option>
        <optgroup label="Asia">
          <option value="3">Delhi</option>
          <option value="4">Hong Kong</option>
          <option value="8">Mumbai</option>
          <option value="11">Tokyo</option>
        </optgroup>
        <optgroup label="Europe">
          <option value="1">Amsterdam</option>
          <option value="5">London</option>
          <option value="7">Moscow</option>
        </optgroup>
        <optgroup label="North America">
          <option value="6">Los Angeles</option>
          <option value="9">New York</option>
        </optgroup>
        <optgroup label="South America">
          <option value="2">Buenos Aires</option>
          <option value="10">Sao Paulo</option>
        </optgroup>
      </select>
    </span>
  </p>

  <p class="selectstyle selectstyle--style2">
    <label for="favcity2" class="selectstyle__label">Choose your #2 favorite city?</label>
    <span class="selectstyle__box">
      <select id="favcity2" name="favcity2" class="selectstyle__box__select">
        <option value="0">No favorite</option>
        <optgroup label="Asia">
          <option value="3">Delhi</option>
          <option value="4">Hong Kong</option>
          <option value="8">Mumbai</option>
          <option value="11">Tokyo</option>
        </optgroup>
        <optgroup label="Europe">
          <option value="1">Amsterdam</option>
          <option value="5">London</option>
          <option value="7">Moscow</option>
        </optgroup>
        <optgroup label="North America">
          <option value="6">Los Angeles</option>
          <option value="9">New York</option>
        </optgroup>
        <optgroup label="South America">
          <option value="2">Buenos Aires</option>
          <option value="10">Sao Paulo</option>
        </optgroup>
      </select>
    </span>
  </p>

  <p class="selectstyle selectstyle--style3">
    <label for="favcity3" class="selectstyle__label">Choose your #3 favorite city?</label>
    <span class="selectstyle__box">
      <select id="favcity3" name="favcity3" class="selectstyle__box__select">
        <option value="0">No favorite</option>
        <optgroup label="Asia">
          <option value="3">Delhi</option>
          <option value="4">Hong Kong</option>
          <option value="8">Mumbai</option>
          <option value="11">Tokyo</option>
        </optgroup>
        <optgroup label="Europe">
          <option value="1">Amsterdam</option>
          <option value="5">London</option>
          <option value="7">Moscow</option>
        </optgroup>
        <optgroup label="North America">
          <option value="6">Los Angeles</option>
          <option value="9">New York</option>
        </optgroup>
        <optgroup label="South America">
          <option value="2">Buenos Aires</option>
          <option value="10">Sao Paulo</option>
        </optgroup>
      </select>
    </span>
  </p>
  <p id="favs" class="comment"></p>
  <p class="comment">For accessibility, a simple select box is often best. A little CSS lets us retain all the WCAG goodness of the semantic element along with freedom to style.</p>

  <footer class="footer"><a href="https://shearspiremedia.com" target="_blank">Created by ShearSpire Media</a></footer>
</div>
 */