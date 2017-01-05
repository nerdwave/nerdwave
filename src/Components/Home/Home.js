import React, { Component } from 'react';
import { Link } from 'react-router';

// some interal components
import MouseIcon  from './MouseIcon';
import Definition from './Definition';

class Home extends Component {
  render() {
    return (
      <div className="HomePage">
        <div className="Home black-bg vh-100 min-vh-100 pa3 bb b--gold">
          <nav className="dt w-100 border-box pa3 ph5-ns vhs-top vhs-delay-6">
            <Link className="yellow dtc v-mid mid-gray link dim w-25" href="#" to="/">
              plug
            </Link>
            <div className="dtc v-mid w-75 tr">
              <Link className="link dim yellow f6 f5-ns dib mr3 mr4-ns" to="/about">who</Link>
              <Link className="link dim yellow f6 f5-ns dib mr3 mr4-ns" to="/about">what</Link>
              <Link className="link dim yellow f6 f5-ns dib mr3 mr4-ns" to="/about">where</Link>
              <Link className="link dim yellow f6 f5-ns dib mr3 mr4-ns" to="/about">why</Link>
            </div>
          </nav>
          
          <div className="tc">
            <h1 className="yellow f-headline tracked-tight vhs-flicker vhs-delay-5">plug</h1>
            <h2 className="white f3 vhs-bottom vhs-delay-6">plug in to your neighborhood</h2>
          </div>

          <MouseIcon />
        </div>

        {/* Additional Sections */}
        <Definition />

      </div>
    );
  }
}

export default Home;
