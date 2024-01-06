import React, { useState, useEffect } from 'react';

export function ForumPostList() {

    const [forum, setForum] = useState([]);
    const [forumIndex, setForumIndex] = useState(0);
    const [selectedPost, setSelectedPost] = useState(null);
    const [modalIndex, setModalIndex] = useState(null);

    const changeForumIndex = (operation) => {
        if (operation === "decrement") {
            setForumIndex(forumIndex - 9);
        } else if (operation === "increment") {
            setForumIndex(forumIndex + 9);
        }
    }

    useEffect(() => {
        setForum([
            {
                Title: "Cím1",
                Content: "Ez a cím1 szövege"
            },
            {
                Title: "Cím2",
                Content: "Ez a cím2 szövege"
            },
            {
                Title: "Cím3",
                Content: "Ez a cím3 szövege"
            },
            {
                Title: "Cím4",
                Content: "Ez a cím4 szövegeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
            },
            {
                Title: "Cím5",
                Content: "Ez a cím5 szövege"
            },
            {
                Title: "Cím6",
                Content: "Ez a cím6 szövege"
            },
            {
                Title: "Cím7",
                Content: "Ez a cím7 szövege"
            },
            {
                Title: "Cím8",
                Content: "Ez a cím8 szövege"
            },
            {
                Title: "Cím9",
                Content: "Ez a cím9 szövege"
            },
            {
                Title: "Cím10",
                Content: "Ez a cím10 szövege"
            },
            {
                Title: "Cím11",
                Content: "Ez a cím11 szövege"
            },
        ]);
    }, []);

    const openPostModal = (index) => {
        setModalIndex(forumIndex + index); // Correct calculation of modalIndex
    }

    const closePostModal = () => {
        setModalIndex(null);
    }

    const renderForumPosts = () => {
        return forum.slice(forumIndex, forumIndex + 9).map((post, index) => (
            <div key={index} className='card mx-auto p-2' style={{ flex: "1 0 30%", margin: "8px" }}>
                <>
                    <h5 className='card-header'>{post.Title}</h5>
                    <div className="card-body">
                        <p className='card-text'>{post.Content.substring(0, 30)}...</p>
                        <button className='gomb' onClick={() => openPostModal(index)}>
                            Bővebben
                        </button>
                    </div>
                </>
            </div>
        ));
    }

    const renderModal = () => {
        if (modalIndex !== null) {
            const post = forum[modalIndex];
            return (
                <div className="modal" style={{ backdropFilter: "blur(5px)", backgroundColor: "rgba(0, 0, 0, 0.5)", position: "fixed", top: 0, left: 0, width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <div className='card mx-auto p-2' style={{ width: "80%", zIndex: 1000 }}>
                        <>
                            <h5 className='card-header'>{post.Title}</h5>
                            <div className="card-body">
                                <p className='card-text'>{post.Content}</p>
                                <button className='gomb' onClick={closePostModal}>
                                    Bezárás
                                </button>
                            </div>
                        </>
                    </div>
                </div>
            );
        }
    }

    return (
        <div>
            <div style={{
                display: "flex",
                flexWrap: "wrap",
            }}>
                {renderForumPosts()}
            </div>

            <div style={{ textAlign: "center", marginTop: "10px", marginRight: "150px" }}>
                {(forumIndex !== 0) && (
                    <button className='gomb' onClick={() => changeForumIndex("decrement")}>
                        {"<<"}
                    </button>
                )}
            </div>

            <div style={{ textAlign: "center", marginTop: "10px", marginLeft: "150px" }}>
                {(forum.length > forumIndex + 9) && (
                    <button className='gomb' onClick={() => changeForumIndex("increment")}>
                        {">>"}
                    </button>
                )}
            </div>

            {renderModal()}
        </div>
    );
}
