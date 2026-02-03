import React from 'react'
import Content from '../../molecules/content/Content'
import './banner.css'
import Card from '../../molecules/card/Card'

function Banner() {
    return (
        <div className='banner'>

            <div className="allContent">
                <Content
                    classN="content"
                    showSpan
                    span="Join Us"
                    title="A Great Place to Receive Care"
                    paragraph="Medical Recover is most focused in helping you discover your most beauiful smile"
                    showButtons
                    btn1="Get Quote Now"
                    btn2="Learn More"
                    button2="button2"
                    buttoni="buttoni"
                    headingClass="heading"
                    lineClass="line"
                    paragClass="parag"
                />
                <div className='space'></div>
            </div>


            <div className='cards'>

                <Card
                    cardHeading="Online Appoinment"
                    cardDesc="The gradual accumulation of 
information about atomic and 
small-scale behaviour..."

                />
                <Card
                    cardHeading="Emergency Case"
                    cardDesc="The gradual accumulation of 
information about atomic and 
small-scale behaviour..."

                />
                <Card
                    cardHeading="Cancer Care"
                    cardDesc="The gradual accumulation of 
information about atomic and 
small-scale behaviour..."

                />
            </div>

        </div>
    )
}

export default Banner
