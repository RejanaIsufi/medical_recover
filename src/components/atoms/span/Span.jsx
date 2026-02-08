import React from 'react'
import './span.css'

function Span({ span,className }) {
    return (
        <div>
            <h5 className={`span ${className}`}>
            {span}
        </h5>
        </div>
    )
}

export default Span
