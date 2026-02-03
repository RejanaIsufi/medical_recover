import React from 'react'
import Content from '../../molecules/content/Content'
import './section.css'
import Image from '../../assets/images/meddical.png'

function Section() {
    return (
        <div className='container3'>
            <div className="contenti">
                <Content
                    classN="contentsec"
                    showLine
                    title="Meet Our Experts"
                    headingClass="sectionHeading"
                    showButtons
                    lineClass="linesec"
                    button2="buttoni2"
                    buttoni="button"
                    btn1="Learn More >"
                    paragClass="paragCl"
                    paragraph="Problems trying to resolve the conflict between 
the two major realms of Classical physics: 
Newtonian mechanics "
                />

            </div>
            <img src={Image} alt="" />
        </div>
    )
}

export default Section
