import React from 'react';
import {NavLink} from 'react-router-dom'
import HomepageHeader from './Header'
import {SectionServices, SectionStudyBlocks, SectionPhotography} from './sections'

const HomePage = () => (
    <div>
        <HomepageHeader/>
        <main>
            <SectionServices/>
            <div className="largeContainer mobileHidden" style={{padding:0}}>
                <img src="/images/background/seperator.png" style={{width:'100%'}}/>
            </div>
            <SectionStudyBlocks/>
            <SectionPhotography/>
        </main>
    </div>
)

export default HomePage