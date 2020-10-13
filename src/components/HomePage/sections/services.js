import React from 'react';

const SectionServices = () => (
    <section className="section-services largeContainer" id="learn-more">
    <h2 className="centered">
      <span>What do I do?</span>
      I do a lot of things, here are the
      services I can provide for you
    </h2>
    <div className="flex flex-row blob-icons">
        <div className="flex flex-column flex-align-center">
          <img src="/images/icons/blobs/seo.svg" alt="SVG icon" title="SVG icon"/>
          <h3>SEO Marketer</h3>
          <p>I help your website perform well, ensuring you rank high for the right search criteria in Google.</p>
        </div>
        <div className="flex flex-column flex-align-center">
          <img src="/images/icons/blobs/web-design.svg" alt="SVG icon" title="SVG icon"/>
          <h3>Web designer</h3>
          <p>I design then develop bespoke websites which your visitors will love becoming purely focused on conversion.</p>
        </div>
        <div className="flex flex-column flex-align-center">
          <img src="/images/icons/blobs/hosting.svg" alt="SVG icon" title="SVG icon"/>
          <h3>Hosting provider</h3>
          <p>I help you every step of the way, giving you the option to have your domain and hosting managed for a small sum each month.</p>
        </div>
    </div>
  </section>
)

export default SectionServices