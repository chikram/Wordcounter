import React from 'react'
import { useState } from 'react';

export default function Form(probs) {
    const [text, setText] = useState("");

    const handleUpClick = () => {
        let newtext = text.toUpperCase();
        setText(newtext)
        probs.showAlert("Text has been Converted to Upperrcase", "success")
    }
    const handleLowClick = () => {
        let newtext = text.toLowerCase();
        setText(newtext);
        probs.showAlert("Text has been Converted to Lowercase", "success");

    }
    const handleCopy = () => {
        const copy = document.getElementById("myBox");
        copy.select();
        copy.setSelectionRange(0.9999);
        navigator.clipboard.writeText(copy.value);

    }
    const clr = () => {
        let newtext = "";
        setText(newtext);
        probs.showAlert("Text has been Cleared", "success");

    }
    const handleOnChange = (event) => {
        setText(event.target.value);

    }

    return (
        <>
            <div className="container" style={{ color: probs.mode === 'dark' ? 'white' : 'black' }} >
                <h1 >{probs.head}</h1>
                <div className="mb-3">
                    <textarea className="form-control" style={{ backgroundColor: probs.mode === 'dark' ? 'black' : 'white', color: probs.mode === 'dark' ? 'white' : 'black' }} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn-primary " onClick={handleUpClick}>Convert To Uppercase</button>
                <button className="btn-primary mx-2 " onClick={handleLowClick}>Convert To Lowercase</button>
                <button className="btn-primary mx-2 " onClick={handleCopy}>Copy Text</button>
                <button className="btn-primary mx-2 " onClick={clr}>Clear Text</button>

            </div>
            <div className="container my-3" style={{ color: probs.mode === 'dark' ? 'white' : 'black' }}>
                <h3 >Your Text Summary</h3 >
                <p> {text.split(" ").length} words and {text.length}character</p>
                <p>{0.008 * text.split(" ").length}Time Required to Read words</p>
            </div>
        </>
    )
}
