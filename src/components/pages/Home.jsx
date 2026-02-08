import React from 'react'
import Banner from '../organisms/banner/Banner'
import StatsSection from '../organisms/statSection/StatSection'
import Section from '../organisms/section1/Section'
import Departament from '../organisms/ourDepartament/Departament'
import Testimonials from '../organisms/testimonials/Testimonials'
import OurTeam from '../organisms/ourTeam/OurTeam'
import JoinUs from '../organisms/joinUs/JoinUs'

function Home() {
    return (
        <div>

            <Banner />
            <StatsSection />
            <Section />
            <Departament />
            <Testimonials />
            <OurTeam />
            <JoinUs/>
        </div>
    )
}

export default Home
