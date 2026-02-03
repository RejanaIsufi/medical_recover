import React from "react";
import "./product.css";

const ProductCard = ({
    image,
    badge,
    category,
    title,
    description,
    rating,
    sales,
    oldPrice,
    newPrice,
    buttonText = "Learn More",
}) => {
    return (
        <div className="product-card">
            {/* Image */}
            <div className="card-image">
                {badge && <span className="badge">{badge}</span>}
                <img src={image} alt={title} />

                <div className="card-actions">
                    <span>♡</span>
                    <span>🛒</span>
                    <span>👁</span>
                </div>
            </div>

            {/* Content */}
            <div className="card-content">
                <div className="card-top">
                    <span className="category">{category}</span>
                    {rating && (
                        <span className="rating">⭐ {rating}</span>
                    )}
                </div>

                <h3>{title}</h3>
                <p className="cardParag">{description}</p>

                <div className="sales">
                    ⬇ {sales} Sales
                </div>

                <div className="prices">
                    <span className="old-price">${oldPrice}</span>
                    <span className="new-price">${newPrice}</span>
                </div>

                <button className="learn-more">
                    {buttonText} →
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
