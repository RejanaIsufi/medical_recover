import React from 'react'
import Content from '../../molecules/content/Content'
import Swipeer from '../swiper/Swiper'
import './testimonials.css'

function Testimonials() {
    return (
        <div className='testimonialsCard'>
            <Content
                classN="departament"
                showSpan
                span="Practise Advice"
                headingClass="headingDep"
                title="Leading Medicine"
                paragClass="paragDep"
                paragraph="Problems trying to resolve the conflict between 
the two major realms of Classical physics: Newtonian mechanics "
            />
            <div className='swipe'>
                <Swipeer />
            </div>

        </div>
    )
}

export default Testimonials
