import React from 'react';
import {NavLink} from 'react-router-dom'

const SectionStudyBlocks = () => (
    <section className="smallContainer case--study-blocks">
    <h2 className="centered">
      <span>Let's showcase</span>
      My builds and designs
    </h2>
    <div className="case-study--block_group">
      <div className="block">
        <NavLink className="case-block blockHover" style={{backgroundImage:`linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('/images/background/case-study/slt-for-kids.png')`}} to="/portfolio/case-study/slt-for-kids">
          <h3>01 SLT for Kids</h3>
        </NavLink>
      </div>
      <div className="block">
        <div className="row">
          <NavLink className="case-block blockHover" style={{backgroundImage:`linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('/images/background/case-study/oakley-and-friends.jpg')`}} to="/portfolio/case-study/oakley-and-friends">
            <h3>02 Oakley and friends</h3>
          </NavLink>
        </div>
        <div className="row">
          <NavLink className="case-block blockHover" style={{backgroundImage:`linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('http://evertonmatchshirt.com/wp-content/uploads/2019/05/59393541_551872112002506_4035969257538846720_n-1.jpg')`}} to="/portfolio/case-study/everton-match-shirt/">
            <h3>03 Everton Match Shirt</h3>
          </NavLink>
          <NavLink className="case-block blockHover" style={{backgroundImage:`linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('/images/case-study/txgroup-search/laptop-search-one.jpg')`}} to="/portfolio/case-study/txgroup-search/">
            <h3>04 Tx Group Search</h3>
          </NavLink>
        </div>
      </div>
    </div>
    <div className="centered small-group">
      <p>My projects show what I can achieve as an individual, a project should be developed with the user in mind. As a web designer user interaction is one of my main aims when visiting a website, making a website look good should only be the first steps of developing a system for users. Explore my thought process throughout each of my projects, as this is a reflection of what I can provide for you as a service.</p>
      <NavLink className="btn" to="/portfolio">View all projects</NavLink>
    </div>

  </section>
)

export default SectionStudyBlocks