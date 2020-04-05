import React from 'react';
import './userIndex.css';

function TopCover() {
    return (
        <section id="user-index-section">
            <div className="hero-main">
                <div className="hero-home-gradient">
                    <div id="user-index-cover-cont"className="container hero-background">
                    <div id="user-index-cover-row" className="row hero-home-content">
                    <div className="whitepart" id="hero-text">
                        <div className="col-xs-12 col-md-10 col-md-offset-1">
                             <h1 className="display-2" id="d2-overrides">Go Premium. Be happy.</h1>
                        <div className="row" id="user-index-row-2">
                            <a href="/eg-en/purchase/panel/">
                            <button id="index-cover-btn"> Start Free Trial </button>
                            </a>
                        </div>
                        </div>
                        </div>
                      </div>                      
                    </div>
                </div>                
            </div>
         </section>
            
 );
}

export default TopCover;





