import React, { useState, useEffect } from 'react';
import './style.css';

export function MediaPostList() {
    const [images, setImages] = useState([]);
    const [imageIndex, setImageIndex] = useState(0);

    const changeImageIndex = (operation) => {
        if (operation === "decrement") {
            setImageIndex(imageIndex - 9);
        } else if (operation === "increment") {
            setImageIndex(imageIndex + 9);
        }
    }

    // Teszt adatok
    useEffect(() => {
        setImages([...Array(12).keys()].map((index) => ({
            Title: `${index + 1}. Kép`,
            Image: require(`./Tesztadatok-torolheto/rat1.gif`),
        })));
    }, []);

    return (
        <div>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
                {images.slice(imageIndex, imageIndex + 9).map((image, idx) => (
                    <div key={idx} className='card mx-auto p-2 col-sm-4'>
                        {image && (
                            <>
                                <h1>{image.Title}</h1>
                                <img
                                    src={image.Image}
                                    style={{
                                        width: "20vh",
                                        height: "20vh"
                                    }}
                                    alt={`image-${imageIndex + idx + 1}`}
                                />
                                <p>Leírás</p>
                            </>
                        )}
                    </div>
                ))}
            </div>

            {/* Vissza gomb */}
            <div style={{ textAlign: "center", marginTop: "10px", marginRight: "150px" }}>
                {(imageIndex !== 0) && (
                    <button className='gomb' onClick={() => changeImageIndex("decrement")}>
                        {"<<"}
                    </button>
                )}
            </div>

            {/* Előre gomb */}
            <div style={{ textAlign: "center", marginTop: "10px", marginLeft: "150px" }}>
                {(images.length > imageIndex + 9) && (
                    <button className='gomb' onClick={() => changeImageIndex("increment")}>
                        {">>"}
                    </button>
                )}
            </div>
        </div>
    );
}
