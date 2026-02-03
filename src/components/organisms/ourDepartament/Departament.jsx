import React from 'react'
import Content from '../../molecules/content/Content'
import './ourDepartament.css'
import ProductCard from '../../molecules/productCard/ProductCard'
import Image from '../../assets/images/product-cover-124 sec-.png'
import Image2 from '../../assets/images/product-cover-125 sec-.png'
import Image3 from '../../assets/images/product-cover-126 sec-.png'

function Departament() {
    return (
        <div className='ourDapartament'>

            <Content
                classN="departament"
                showSpan
                span="Practise Advice"
                headingClass="headingDep"
                title="Our Departament"
                paragClass="paragDep"
                paragraph="Problems trying to resolve the conflict between 
the two major realms of Classical physics: Newtonian mechanics "
            />


            <div className="productCards">

                <ProductCard
                    image={Image}
                    badge="Sale"
                    category="Painless procedures"
                    title="Quick examination"
                    description="We focus on ergonomics and meeting you where you work."
                    rating="4.9"
                    sales={15}
                    oldPrice="16.48"
                    newPrice="6.48"
                />
                <ProductCard
                    image={Image2}
                    badge="Sale"
                    category="Painless procedures"
                    title="Quick examination"
                    description="We focus on ergonomics and meeting you where you work."
                    rating="4.9"
                    sales={15}
                    oldPrice="16.48"
                    newPrice="6.48"
                />
                <ProductCard
                    image={Image3}
                    badge="Sale"
                    category="Painless procedures"
                    title="Quick examination"
                    description="We focus on ergonomics and meeting you where you work."
                    rating="4.9"
                    sales={15}
                    oldPrice="16.48"
                    newPrice="6.48"
                />
            </div>



        </div>
    )
}

export default Departament
