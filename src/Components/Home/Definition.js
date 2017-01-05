// the crucial libs
import React, { Component } from 'react';

// add the styles
import './styles.css';

/*
  APP COMPONENT
*/
class Definition extends Component {
  render() {
    return (
      <div className="Definition white-bg vh-100 min-vh-100">
        {/* I. noun */}
        <article className="cf min-vh-50"> 
          
          {/* Left Column */}
          <div className="fl w-60 pa2">
            <div className="pt3 pl7 pb0 georgia">
              <p className="mb0 black f-headline">
                <span className="f4 sup">1</span>plug
                <span className=""></span>
              </p>
              <p className="mt3 f3">noun</p>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="fl w-40 pa2">
            <div className="v-mid georgia">
              <p>words words words</p>
            </div>
          </div>
        </article>

        {/* II. verb */}
        <article className="cf"> 
          
          {/* Left Column */}
          <div className="fl w-60 pa2">
           <div className="pt3 pl7 pb0 georgia">
              <p className="mb0 black f-headline">
                <span className="f4 sup">2</span>plug
                <span className=""></span>
              </p>
              <p className="mt3 f3">verb</p>
            </div>   
          </div>

          {/* Right Column */}
          <div className="fl w-40 pa2">
            <div className="v-mid georgia">
              <p>words words words</p>
            </div>
          </div>
        </article>
       

      </div>
    );
  }
}

// the clean export
export default Definition;