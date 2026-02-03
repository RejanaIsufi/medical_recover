import React from 'react'

function Paragraph({ content, paragClass }) {
    return (
        <div>
            <h4 className={paragClass}>{content}</h4>
        </div>
    )
}

export default Paragraph