import React, { useState } from 'react'


export default function Textgame(props) {
    const forUppercase = () => {

        let newText = text.toUpperCase();

        setText(newText);
    }

    const forLowercase = () => {

        let newText2 = text.toLowerCase();

        setText(newText2);
    }
    
    const forclearText=()=>{

        setText("")
    }

    const handleCopy=()=>{

        var text= document.getElementById("exampleFormControlTextarea1");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleextraSpace=()=>{

        let newText= text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    const handleOnchange = (event) => {

        console.log("onchange applied")
        setText(event.target.value);
    }
    const [text, setText] = useState('')
    return (
            <>
            
        <div className="container" style={{color: props.mode==='light'?'black':'white'}}>
            <h1 className="my-2">{props.heading}</h1>
            <div className="mb-3 my-4">

                <textarea className="form-control" id="exampleFormControlTextarea1" style={{backgroundColor: props.mode==='light'?'white':'#13466e'}} onChange={handleOnchange} rows="8" value={text}></textarea>
            </div>

            <button className="btn btn-primary " onClick={forUppercase}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={forLowercase}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={forclearText}>Clear Text</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-2" onClick={handleextraSpace}>Clear Extraspace</button>
        </div>

        <div className="container my-3" style={{color: props.mode==='light'?'black':'white'}}>
            <h1>Your Text summary!</h1>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters.</p>
            <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read.</p>
            <h2>Preview</h2>
            <p>{text.length>0?text: "Enter text to preview here"}</p>
        </div>
        </>

    )
}
