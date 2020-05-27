import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            
            <div className="footer">
                        {/* LinkedIn */}
                        <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-linkedin-square ml-4" aria-hidden="true" />
                        </a>

                        {/* Github */}
                        <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-github-square ml-4" aria-hidden="true" />
                        </a>

                        {/* Facebook */}
                        <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-facebook-square ml-4" aria-hidden="true" />
                        </a>
            </div>
                   
         
        );
    }
}

export default Footer;
