import React, { useState, useEffect } from 'react';
import './style.css';

export function LinkPostList() {
    const [links, setLinks] = useState([]);
    const [linkIndex, setLinkIndex] = useState(0);

    const changeLinkIndex = (operation) => {
        if (operation === "decrement") {
            setLinkIndex(linkIndex - 9);
        } else if (operation === "increment") {
            setLinkIndex(linkIndex + 9);
        }
    }

    useEffect(() => {
        setLinks([
            {
                Title: "Link no1",
                Link: "https://link1.com/"
              },
              {
                Title: "Link no2",
                Link: "https://link2.com/"
              },
              {
                Title: "Link no3",
                Link: "https://link3.com/"
              },
              {
                Title: "Link no4",
                Link: "https://link4.com/"
              },
              {
                Title: "Link no5",
                Link: "https://link5.com/"
              },
              {
                Title: "Link no6",
                Link: "https://link6.com/"
              },
              {
                Title: "Link no7",
                Link: "https://link7.com/"
              },
              {
                Title: "Link no8",
                Link: "https://link8.com/"
              },
              {
                Title: "Link no9",
                Link: "https://link9.com/"
              },
              {
                Title: "Link no10",
                Link: "https://link10.com/"
              },
              {
                Title: "Link no11",
                Link: "https://link11.com/"
              },
              {
                Title: "Link no12",
                Link: "https://link12.com/"
              },
              {
                Title: "Link no13",
                Link: "https://link13.com/"
              }
        ]);
    }, []);

    const renderLinkCards = () => {
        const cards = [];
        for (let i = 0; i < 3; i++) {
            const row = [];
            for (let j = 0; j < 3; j++) {
                const index = i * 3 + j + linkIndex;
                row.push(
                    <div className="col-md-4" key={index}>
                        {links.length > index && (
                            <div className="card text-center mx-auto p-2 mb-3">
                                <div className="card-header">
                                    <ul className="nav nav-pills card-header-pills">
                                        <li className="nav-item">
                                            <a className="nav-link" href={links[index].Link} target="_blank">{links[index].Link}</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="card-body">
                                    <>
                                        <h5 className="card-title">{links[index].Title}</h5>
                                        <p className="card-text">Leírás</p>
                                    </>
                                </div>
                            </div>
                        )}
                    </div>
                );
            }
            cards.push(<div className="row" key={i}>{row}</div>);
        }
        return cards;
    };

    return (
        <div>
            {/* Render link cards */}
            {renderLinkCards()}

            {/*Vissza gomb*/}
            <div style={{ textAlign: "center", marginTop: "10px", marginRight: "150px" }}>
                {linkIndex !== 0 && (
                    <button className='gomb' onClick={() => changeLinkIndex("decrement")}>
                        {"<<"}
                    </button>
                )}
            </div>

            {/* Előre gomb */}
            <div style={{ textAlign: "center", marginTop: "10px", marginLeft: "150px" }}>
                {links.length > linkIndex + 9 && (
                    <button className='gomb' onClick={() => changeLinkIndex("increment")}>
                        {">>"}
                    </button>
                )}
            </div>
        </div>
    );
}