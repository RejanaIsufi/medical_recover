import React from 'react'
import './joinUs.css'
import Content from '../../molecules/content/Content'

function JoinUs() {
  return (
    <div className='joinUs'>

       <Content  
       classN="joinUsContent"
       showSpan 
       spanCl="joinSpan"
         span="Newsletter "
            title="JOIN US"
            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit auctor dui, sed efficitur ipsum."
       paragClass="parag"
       />
<div className="inputi">

        <input type="email" placeholder='Your Email'/>
        <button> Subcribe</button>
       </div>
    </div>

  )
}

export default JoinUs


// // import React from 'react'
// import './joinUs.css'
// import Content from '../../molecules/content/Content'

// function JoinUs(spanCl) {
//   return (
//     <div className='joinUs'>

// <span>Newsletter</span>
//        <Content  
//        classN="joinUsContent"
//             title="JOIN US"
//             paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit auctor dui, sed efficitur ipsum."
//             paragClass="parag"
//        />
//     </div>
//   )
// }

// export default JoinUs