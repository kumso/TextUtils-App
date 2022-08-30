import React, { useState } from 'react'


export default function TextForm(props) {

    const clearText = () => {
        let newText = ''
        setText(newText);
    }
    const handleLowClick = () => {
        // console.log('Button Clicked', text)
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleUpClick = () => {
        // console.log('Button Clicked', text)
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleOnChange = (event) => {
        // console.log('On Change')
        setText(event.target.value);
    }

    // learn this syntax
    const [text, setText] = useState('');
    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading} </h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="=myBox" rows="8" style={{ backgroundColor: props.mode === 'dark' ? 'gray' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}></textarea>
                </div>
                <button className="btn btn-info mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-info mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
                <button className="btn btn-info mx-2" onClick={clearText}>Reset</button>
            </div>
            <div className="container my-4" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Text Summary</h2>
                <p>{text.trim().split(' ').filter(currText => {
                    let newString = currText.trim()
                    if (newString.length > 0) {
                        return true;
                    }
                    else {
                        return false;
                    }
                }).length} Words and {text.length} Charcters</p>
                <p>{0.008 * text.split(' ').length} Minutes Read</p>

                <h2>Preview</h2>
                <p>{text.length === 0 ? "Enter something in the above textbox to preview" : text}</p>
            </div>
        </>
    )
}
