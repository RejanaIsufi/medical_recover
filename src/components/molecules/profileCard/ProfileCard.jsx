import React from "react";

import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import "./profileCard.css";

const ProfileCard = ({
    image,
    name,
    profession,
    socials = {},
}) => {
    return (
        <div className="profile-card">
            <div
                className="profile-image"
            >
                <img src={image} alt={name} />
            </div>

            <div className="profile-content">
                <h3 className="profile-name">{name}</h3>
                <p className="profile-role">{profession}</p>

                <div className="profile-socials">
                    {socials.facebook && (
                        <a href={socials.facebook} aria-label="Facebook">
                            <FaFacebookF />
                        </a>
                    )}
                    {socials.instagram && (
                        <a href={socials.instagram} aria-label="Instagram">
                            <FaInstagram />
                        </a>
                    )}
                    {socials.twitter && (
                        <a href={socials.twitter} aria-label="Twitter">
                            <FaTwitter />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;
