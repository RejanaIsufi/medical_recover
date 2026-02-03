import React from 'react'
import Button from '../../atoms/button/Button'
import Heading from '../../atoms/heading/Heading'
import Paragraph from '../../atoms/paragraph/Paragraph'
import Span from '../../atoms/span/Span'
import Line from '../../atoms/line/Line'
import './content.css'

function Content({
    classN,
    showSpan = false,
    showLine = false,
    showButtons = false,
    span,
    title,
    paragraph,
    lineClass,
    headingClass,
    button2
    , btn1, btn2, buttoni, paragClass
}) {
    return (
        <div className={classN}>

            {showSpan && <Span span={span} />}

            <div>
                {showLine && <Line classN={lineClass} />}
                <Heading classN={headingClass} content={title} />
            </div>

            <Paragraph paragClass={paragClass} content={paragraph} />

            {showButtons && (
                <div className="buttons">
                    <Button
                        classN={buttoni}
                        text={btn1}
                    />
                    <Button
                        classN={button2}
                        text={btn2}
                    />
                </div>
            )}
        </div>
    )
}

export default Content
