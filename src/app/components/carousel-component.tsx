import React, { useState } from "react";
import { Image } from "../models/project-model";

type ImageCarouselProps = {
    images: Image[];
};

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
    const [imgIndex, setImgIndex] = useState(0);

    function previousImageControl() {
        setImgIndex((prevIndex) => (prevIndex - 1 + imagesCounter) % imagesCounter);
    }

    function nextImageControl() {
        setImgIndex((prevIndex) => (prevIndex + 1) % imagesCounter);
    }

    const imagesCounter = images.length
    const imgControllerVisible = imagesCounter > 1;

    const imgController =
        <div className="project-images-controller-container">
            <span>{imgIndex + 1} / {images.length}</span>
            <div className="images-controller-buttons">
                <button onClick={previousImageControl}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.3284 11.0001V13.0001L7.50011 13.0001L10.7426 16.2426L9.32842 17.6568L3.67157 12L9.32842 6.34314L10.7426 7.75735L7.49988 11.0001L20.3284 11.0001Z" fill="currentColor" />
                    </svg>
                </button>
                <button onClick={nextImageControl}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z" fill="currentColor" />
                    </svg>
                </button>

            </div>
        </div>

    return (
        <div>
            <div className="gallery-container">
                <img src={images[imgIndex].src} alt={images[imgIndex].alt}></img>
            </div>
            {
                imgControllerVisible && imgController
            }
        </div>

    );
};

export default ImageCarousel;
