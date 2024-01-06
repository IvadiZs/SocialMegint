import React, { useState, useEffect } from 'react';
import './style.css';

export function CreatePost() {

    const [postType, setPostType] = useState(''); 

    const handlePostTypeChange = (event) => {
        setPostType(event.target.value); 
    };

    return(
        <div className='card mx-auto p-2 col-sm-6'>
            {/*Legördülő menü*/}
            <select class="form-select" aria-label="Default select example" 
                    value={postType} onChange={handlePostTypeChange}>
                <option selected>Válassz bejegyzés típust!</option>
                <option value="1">Média</option>
                <option value="2">Fórum</option>
                <option value="3">Link</option>
            </select>
            {/*Bejegyzés címe*/}
            <div>
                <p className='.text-light'>Cím</p>
            <input class="form-control" type="text" aria-label="default input example"></input>
            </div>
            {/*Kép feltöltés*/}
            {(postType === "1") && (
                <div class="mb-3">
                <label for="formFile" class="form-label">Tölts fel egy képet!</label>
                <input class="form-control" type="file" id="formFile"></input>
                </div>
            )}
            {/*Link megadás*/}
            {(postType === "3") && (
                <div class="form-floating">
                <textarea class="form-control" placeholder="Másold be ide a posztolni kívánt linket!" id="floatingTextarea"></textarea>
  <             label for="floatingTextarea">Link</label>
            </div>
            )}
        {/*Leírás*/}
        <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Leírás</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        {/*Feltöltés gomb*/}
        <div class="d-grid gap-2">
                <a href="#" class="btn btn-warning">Bejegyzés feltöltése!</a>
            </div>
        </div>
    );
}