import React from 'react'

function Heading({ content, classN }) {
    return (
        <div>
            <h1 className={classN}>{content}</h1>
        </div>
    )
}

export default Heading
