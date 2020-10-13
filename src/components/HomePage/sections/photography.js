import React from 'react';
import {NavLink} from 'react-router-dom';

const SectionPhotography = () => (
<section className="largeContainer photography">
    <div className="two-col columns">
      <div className="col">
        <h2 className="centered">
          <span>Hobbies and interests</span>
          My photography hobbies
        </h2>
        <p>
          Photography has always been a huge interest of mine, I like to travel quite a lot and capturing memories of amazing scenery feels like more than just a hobby to me. I like being able to capture pictures of buildings at interesting angles which can capture the most detail. I love being able to find the history in scenery and monuments. Checkout the photography I have captured overtime, I would also be more than happy to even provide this as a service if you are local.
        </p>
        <NavLink to="/photography" className="btn">
            View my photography
        </NavLink>
      </div>
      <div className="col">
        {/* <div className="photography-collage">
          <div className="row">
            <a className="photo blockHover" target="_blank" style={{backgroundImage:url('<?php echo $insta[0]->image; ?>');" href="<?php echo $insta[0]->url; ?>"></a>
            <a className="photo blockHover" target="_blank" style="backgroundImage:url('<?php echo $insta[1]->image; ?>');" href="<?php echo $insta[1]->url; ?>"></a>
          </div>
          <div className="row">
            <a className="photo blockHover" target="_blank" style="backgroundImage:url('<?php echo $insta[2]->image; ?>');" href="<?php echo $insta[2]->url; ?>"></a>
            <a className="photo blockHover" target="_blank" style="backgroundImage:url('<?php echo $insta[3]->image; ?>');" href="<?php echo $insta[3]->url; ?>"></a>
          </div> */}
        {/* </div> */}
      </div>
    </div>
  </section>
)

export default SectionPhotography