import React from 'react'
import Content from '../content/Content'
import './card.css'
import Heading from '../../atoms/heading/Heading'
import Paragraph from '../../atoms/paragraph/Paragraph'
import Line from '../../atoms/line/Line'

function Card({ cardHeading, cardDesc }) {
    return (
        <div className='card'>

            <div className='circle'></div>
            <Heading
                classN="title"
                content={cardHeading}
            />
            <Line classN="line" />
            <Paragraph
                paragClass="parag"
                content={cardDesc}
            />
        </div>
    )
}

export default Card
