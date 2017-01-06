/*s
 *
* HOME PAGE 🏠🕋 🌍
*/

import React, { Component } from 'react';
// import { Link } from 'react-router';

class Home extends Component {


  render() {
    return (
      <div className="HomePage">
        {/** HEAD PAGE WRAPPUH **/}
        <div className="Home black-bg min-vh-100 min-vh-100 pa3">
          {/** U. FIRST SET **/}
            {/** --- nerd wave ~ loader --- **/}

            {/** -- background videos -- **/}

            {/**  --navbar-- **/}
            <nav className="pa3 pa4-ns">
              <a className="link dim green hover-light-purple b f1 f-headline-ns tc db mb3 mb4-ns" href="#" title="Home">nerdwave</a>
              <div className="tc pb3">
                <a className="link dim gray f6 f5-ns dib mr3" href="#" title="Home">Home</a>
                <a className="link dim gray f6 f5-ns dib mr3" href="#" title="About">About</a>
                <a className="link dim gray f6 f5-ns dib mr3" href="#" title="Store">Store</a>
                <a className="link dim gray f6 f5-ns dib" href="#" title="Contact">Contact</a>
              </div>
            </nav>

            {/** -- middle (skroll sections) -- **/}
            <article className="mw5 mw7-ns center bg-light-gray pa3 pa5-ns">
            
              <h4 className="f6">16:9</h4>
              <div className="aspect-ratio aspect-ratio--16x9 mb4">
                <div className="aspect-ratio--object cover " id="pic"></div>
              </div>

              <h4 className="f6">8:5</h4>
              <div className="aspect-ratio aspect-ratio--8x5 mb4">
                <div className="aspect-ratio--object cover" id="pic"></div>
              </div>

              <h4 className="f6">7:5</h4>
              <div className="aspect-ratio aspect-ratio--7x5 mb4">
                <div className="aspect-ratio--object cover" id="pic"></div>
              </div>

              <h4 className="f6">6:4</h4>
              <div className="aspect-ratio aspect-ratio--6x4 mb4">
                <div className="aspect-ratio--object cover" id="pic"></div>
              </div>

              <h4 className="f6">4:3</h4>
              <div className="aspect-ratio aspect-ratio--4x3 mb4">
                <div className="aspect-ratio--object cover" id="pic"></div>
              </div>

              <h4 className="f6">1:1</h4>
              <div className="aspect-ratio aspect-ratio--1x1 mb4">
                <div className="aspect-ratio--object cover" id="pic"></div>
              </div>
            </article>


            {/** -- background videos -- **/}
            
          
            {/** ---title wave shit--- **/}
            
            {/** ++videos++ **/}

            {/** +++ random things, explosions💥, delays +++ **/}

        </div>

        <div className="">
        {/**

        **/}
        </div>

        {/**
         MOR SECTIONZ 
        **/}
 
      </div>
    );
  }
}

// ATTACH IT
export default Home;
