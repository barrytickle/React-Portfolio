import React from 'react';
import {NavLink} from 'react-router-dom';

const HomepageHeader = () => (
    <header className="largeContainer columns two-col home-header">
        <div className="col">
            <h1>Hello, I'm Barry</h1>
            <p>
            I help clients to <b>achieve</b> their business objectives without spending large amounts of money by providing facilities like: Shared Web Hosting, Personal Bespoke Websites, Blogs, Ecommerce, Dashboard designs and SSL Certificates (in association with world's most trusted SSL providers).
            </p>
            <div className="flex flex-row">
                <div >
                    <NavLink to="/contact-me" className="btn btn-outline">
                        Let's get started
                    </NavLink>
                    <NavLink to="#learn-more" className="btn btn-outline">
                        Learn More
                    </NavLink>
                </div>
            </div>
        </div>
        <div className="col">
            <img src="/images/portrait/me-pattern.png"/>
        </div>
    </header>
)

export default HomepageHeader