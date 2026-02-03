import React from 'react'
import Content from '../../molecules/content/Content'
import ProfileCard from '../../molecules/profileCard/ProfileCard'
import './ourTeam.css'
import profile from '../../assets/images/profile.jpg'
import profile2 from '../../assets/images/profile2.jpg'
import profile3 from '../../assets/images/profile3.jpg'
import profile4 from '../../assets/images/profile4.jpg'

function OurTeam() {
    return (
        <div className='ourTeam'>
            <Content
                classN="departament"
                showSpan
                span="Team"
                headingClass="headingDep"
                title="Our Team"
                paragClass="paragDep"
                paragraph="Problems trying to resolve the conflict between 
the two major realms of Classical physics: Newtonian mechanics "
            />


            <div className="profile_cards">

                <ProfileCard
                    image={profile}
                    name="Julian Jameson"
                    profession="UI Designer"
                    socials={{
                        facebook: "#",
                        instagram: "#",
                        twitter: "#",
                    }}
                />
                <ProfileCard
                    image={profile2}
                    name="Julian Jameson"
                    profession="UI Designer"
                    socials={{
                        facebook: "#",
                        instagram: "#",
                        twitter: "#",
                    }}
                />
                <ProfileCard
                    image={profile3}
                    name="Julian Jameson"
                    profession="UI Designer"
                    socials={{
                        facebook: "#",
                        instagram: "#",
                        twitter: "#",
                    }}
                />
                <ProfileCard
                    image={profile4}
                    name="Julian Jameson"
                    profession="UI Designer"
                    socials={{
                        facebook: "#",
                        instagram: "#",
                        twitter: "#",
                    }}
                />
            </div>


        </div>
    )
}

export default OurTeam
