import React from "react";

const Fotter = ()=>{
    return(
        <>
          <footer class="footer">
      <div class="footer__container container2 grid">
         <div class="footer__content grid">
            <div>
               <a href="#" class="footer__logo">Yoga</a>

               <p class="footer__description">
                  Take care of your health and <br/>
                  your mind with the best <br/>
                  Yoga classes.
               </p>
            </div>

            <div class="footer__data grid">
               <div>
                  <h3 class="footer__title">Address</h3>

                  <p class="footer__info">
                     12345 M/01 Sol <br/>
                     Avenue, Lima, Peru
                  </p>
               </div>

               <div>
                  <h3 class="footer__title">Contact</h3>

                  <p class="footer__info">
                     +123 456 7890 <br/>
                     yoga@email.com
                  </p>
               </div>

               <div>
                  <h3 class="footer__title">Office</h3>

                  <p class="footer__info">
                     Monday - Saturday <br/>
                     9AM - 10PM
                  </p>
               </div>
            </div>
         </div>

         <div class="footer__group">
            <ul class="footer__social">
               <li>
                  <a href="https://www.facebook.com/" target="_blank" class="footer__social-link">
                     <i class="ri-facebook-circle-line"></i>
                  </a>
               </li>

               <li>
                  <a href="https://www.instagram.com/" target="_blank" class="footer__social-link">
                     <i class="ri-instagram-line"></i>
                  </a>
               </li>

               <li>
                  <a href="https://twitter.com/" target="_blank" class="footer__social-link">
                     <i class="ri-twitter-line"></i>
                  </a>
               </li>

               <li>
                  <a href="https://www.youtube.com/" target="_blank" class="footer__social-link">
                     <i class="ri-youtube-line"></i>
                  </a>
               </li>
            </ul>

            <span class="footer__copy">
               &#169; Copyright Bedimcode. All rights reserved
            </span>
         </div>
      </div>
   </footer>
        </>
    )
}

export default Fotter;