import React, {useState} from 'react'


const TextForm = (props) => {
    const [text, settext] = useState("")

    const handleUpClick = () => {
    //   console.log("Uppercase was clicked");
      let newText = text.toUpperCase();
      settext(newText)
      props.alertFunction("text has been uppercased", "success")
    }
    const handleOnChange = (event) => {
    //   console.log("Content changed");
      settext(event.target.value)
    }

    const handleClear = (params) => {
        settext("")
      
    }
    
    
    
    return (

        <div className="container my-3">
            <div className="box1 mb-3 ">
                <h1>{props.heading}</h1>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleOnChange}></textarea>
                <button className="btn btn-primary my-3" onClick={handleUpClick}>Convert to uppercase</button>
                <button className="btn btn-primary my-3 mx-3" onClick={handleClear}>Clear</button>
                
            </div>
            <div className="box2 mb-3">
                <h1>Your text summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
            </div>

        </div>


    )
}

export default TextForm
