import React, {useState} from 'react'

export default function Textbox(props) {

    const [text, setText] = useState("");
    // const[mystyle, setMystyle] = useState({
    //     color : "black",
    //     backgroundColor : "white"
    // })

    // const [btnText, setbtnText] = useState("Dark Mode");

    const handleUpClick = ()=>{
       // console.log("clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handlecopyClick = ()=>{
        var copyText = text;
        // copyText.select();
        // copyText.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(copyText);
        props.showalert("Copied to Clipboard", "success");
    }

    const handleClearClick = ()=>{
        setText("");
    }

    // const handledarkClick = ()=>{

    //     if(mystyle.backgroundColor === "white"){
    //         setMystyle({
    //             color : 'white',
    //             backgroundColor : "Black"
    //         })
    //     }
    //     else{
    //         setMystyle({
    //             color : 'black',
    //             backgroundColor : "white"
    //         })
    //     }
    //     if(btnText === "Dark Mode"){
    //         setbtnText("Light Mode");
    //     }
    //     else{
    //         setbtnText("Dark Mode");
    //     }
    // }

    const handlespaceClick = ()=>{
        setText(text.replace(/\s+/g, " "));
    }

    const handleOnChange = (event)=>{
        // console.log("handle On Change function");
        setText(event.target.value);
    }
    
    return (
        <>
        <div className = "container">
             <h1 style = {{color : props.mode==='light'?'black':'white'}}>{props.heading}</h1>
        <div className="mb-3">
            {/* <label htmlfor="exampleFormControlTextarea1" className="form-label">Example textarea</label> */}
            <textarea className="form-control" value = {text} onChange = {handleOnChange} id="exampleFormControlTextarea1" rows="8" placeholder="Enter Text Here" style = {{backgroundColor : props.mode==='light'?'white':'#13466e', color: props.mode==='light'?'black':'white'}}></textarea>
        </div>
        <button type="button" disabled = {text.length === 0} className="btn btn-primary" onClick = {handleUpClick}>Convert to UpperCase</button>
        <button type="button" disabled = {text.length === 0} className="btn btn-primary mx-3" onClick = {handleLowClick}>Convert to LowerCase</button>        
        <button type="button" disabled = {text.length === 0} className="btn btn-primary" onClick = {handlecopyClick}>Copy</button>
        <button type="button" disabled = {text.length === 0} className="btn btn-primary mx-3" onClick = {handleClearClick}>Clear</button>
        <button type="button" disabled = {text.length === 0} className="btn btn-primary" onClick = {handlespaceClick}>Remove Extra Spaces</button>        
        
        </div>
        <div className="container" style = {{color: props.mode==='light'?'black':'white'}}>
            <h2>Text Summary</h2>
            <p>{text.split(" ").filter((element)=>{return element.length !== 0}).length} words and {text.length - text.split(" ").length+1} characters</p>
            <p>{0.008*text.split(" ").filter((element)=>{return element.length !== 0}).length} minutes read</p>
            <h2>Preview</h2>
        </div>
        </>
    )
}
