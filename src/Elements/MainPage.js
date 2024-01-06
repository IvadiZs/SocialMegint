import React, { useState, useEffect } from 'react';
import './style.css';

export function MainPage() {
    const [images, setImages] = useState([]);
    const [forum, setForum] = useState([]);
    const [links, setLinks] = useState([]);
    const [imageIndex, setImageIndex] = useState(0);
    const [forumIndex, setForumIndex] = useState(0);
    const [linkIndex, setLinkIndex] = useState(0);

    const changeImageIndex = (operation) => {
        if (operation === "decrement") {
            setImageIndex(imageIndex - 3);
        } else if (operation === "increment"){
            setImageIndex(imageIndex + 3);
        }
    }

    const changeForumIndex = (operation) => {
        if (operation === "decrement") {
            setForumIndex(forumIndex - 3);
        } else if (operation === "increment"){
            setForumIndex(forumIndex + 3);
        }
    }

    const changeLinkIndex = (operation) => {
        if (operation === "decrement") {
            setLinkIndex(linkIndex - 3);
        } else if (operation === "increment"){
            setLinkIndex(linkIndex + 3);
        }
    }

    // Tesztadatok
    useEffect(() => {
        setImages([
            { Title: "1. Kép", Image: require(`./Tesztadatok-torolheto/rat1.gif`) },
            { Title: "2. Kép", Image: require(`./Tesztadatok-torolheto/rat2.gif`) },
            { Title: "3. Kép", Image: require(`./Tesztadatok-torolheto/rat3.gif`) },
            { Title: "4. Kép", Image: require(`./Tesztadatok-torolheto/rat4.gif`) },
            { Title: "5. Kép", Image: require(`./Tesztadatok-torolheto/rat5.gif`) },
        ]);

        setForum([
            { Title: "Cím1", Content: "Ez a cím1 szövege és még több szöveg ami rengeteg sok szöveg de komolyan nagyon nagyon sok" },
            { Title: "Cím2", Content: "Ez a cím2 szövege és még több szöveg ami rengeteg sok szöveg de komolyan nagyon nagyon sok" },
            { Title: "Cím3", Content: "Ez a cím3 szövege és még több szöveg ami rengeteg sok szöveg de komolyan nagyon nagyon sok" },
            { Title: "Cím4", Content: "Ez a cím4 szövege és még több szöveg ami rengeteg sok szöveg de komolyan nagyon nagyon sok" },
            { Title: "Cím5", Content: "Ez a cím5 szövege és még több szöveg ami rengeteg sok szöveg de komolyan nagyon nagyon sok" },
        ]);

        setLinks([
            { Title: "Link no1", Link: "https://link1.com/" },
            { Title: "Link no2", Link: "https://link2.com/" },
            { Title: "Link no3", Link: "https://link3.com/" },
            { Title: "Link no4", Link: "https://link4.com/" },
            { Title: "Link no5", Link: "https://link5.com/" },
        ]);
    }, []);

    return (
        <div>
            <div>
                {/* 1. blokk: Média tartalmak */}
                <div style={{ display: "flex", alignItems: "center" }}>
                    {/* Vissza gomb */}
                    <div>
                        {(imageIndex !== 0) && (
                            <button className='gomb' onClick={() => changeImageIndex("decrement")}>
                                {"<<"}
                            </button>
                        )}
                    </div>

                    {/* Első poszt */}
                    {images.slice(imageIndex, imageIndex + 3).map((image, i) => (
                        <div key={i} className='card mx-auto p-2' style={{ width: "20%", border: "none" }}>
                            <h1>{image.Title}</h1>
                            <img
                                src={image.Image}
                                style={{
                                    width: "20vh",
                                    height: "20vh"
                                }}
                                alt={`image-${imageIndex + i + 1}`}
                            />
                            <div className='card-body'>
                                <h5 className='card-title'>Leírás</h5>
                                {/* Bővebben gomb nélkül */}
                            </div>
                        </div>
                    ))}

                    {/* Tovább gomb */}
                    <div>
                        {(images.length > imageIndex + 2) && (
                            <button className='gomb' onClick={() => changeImageIndex("increment")}>
                                {">>"}
                            </button>
                        )}
                    </div>
                </div>

                {/* 2. blokk: Fórum posztok */}
                <div style={{ display: "flex", alignItems: "center" }}>
                    {/* Vissza gomb */}
                    <div>
                        {(forumIndex !== 0) && (
                            <button className='gomb' onClick={() => changeForumIndex("decrement")}>
                                {"<<"}
                            </button>
                        )}
                    </div>

                    {/* Fórum posztok */}
                    {forum.slice(forumIndex, forumIndex + 3).map((post, i) => (
                        <div key={i} className='card mx-auto p-2' style={{ width: "20%", border: "none" }}>
                            <h5 className='card-header'>{post.Title}</h5>
                            <div className="card-body">
                                <p className='card-text'>{post.Content.slice(0, 30)}{post.Content.length > 30 ? "..." : ""}</p>
                                {/* Bővebben gomb nélkül */}
                            </div>
                        </div>
                    ))}

                    {/* Tovább gomb */}
                    <div>
                        {(forum.length > forumIndex + 2) && (
                            <button className='gomb' onClick={() => changeForumIndex("increment")}>
                                {">>"}
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {/* 3. blokk: Linkek */}
            <div style={{ display: "flex", alignItems: "center" }}>
                {/* Vissza gomb */}
                <div>
                    {(linkIndex !== 0) && (
                        <button className='gomb' onClick={() => changeLinkIndex("decrement")}>
                            {"<<"}
                        </button>
                    )}
                </div>

                {/* Linkek */}
                {links.slice(linkIndex, linkIndex + 3).map((link, i) => (
                    <div key={i} className="card text-center mx-auto p-2" style={{ width: "20%", border: "none" }}>
                        <div className="card-header">
                            <ul className="nav nav-pills card-header-pills">
                                <li className="nav-item">
                                    <a className="nav-link" href={link.Link}>Link</a>
                                </li>
                            </ul>
                            <div className="card-body">
                                {link && (
                                    <>
                                        <h5 className="card-title">{link.Title}</h5>
                                        {/* Bővebben gomb nélkül */}
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                ))}

                {/* Tovább gomb */}
                <div>
                    {(links.length > linkIndex + 2) && (
                        <button className='gomb' onClick={() => changeLinkIndex("increment")}>
                            {">>"}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
