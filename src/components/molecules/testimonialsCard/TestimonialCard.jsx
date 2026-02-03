import React from 'react'
import Image from '../../atoms/image/Image'
import './testimonial.css'
import { FaRegStar, FaStar } from 'react-icons/fa'

function TestimonialCard({ parag, src, namee, proff }) {
    return (
        <div className='testimoonials'>
            <div className="stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStar />
            </div>
            <p>{parag}</p>
            <div className='testimonialContent'>
                <Image src={src} />

                <div className="testimonialName">
                    <h3>{namee}</h3>
                    <p>{proff}</p>
                </div>
            </div>
        </div>
    )
}

export default TestimonialCard
