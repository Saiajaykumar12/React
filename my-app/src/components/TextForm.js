import React,{useState} from "react";

export default function TextForm(props) {

    const[text,setText] = useState('');
    // setText("I am in set text");

    const convertToUpper = () => {
        console.log("clicked");
        let neText = text.toUpperCase();
        setText(neText);
    }

    const convertToLower = () => {
      let newText = text.toLowerCase();
      setText(newText);
    }

    const handleOnChange = (event) => {
        console.log("On Change");
        setText(event.target.value);
    }

  return (
    <>

      <div className="mb-3 mt-3">
        <h2>Enter your text to analyze.</h2>
        <textarea
          className="form-control" value={text} onChange={handleOnChange}
          id="exampleFormControlTextarea1"
          rows="6" mt-3
        ></textarea>
      </div>
      <button className="btn btn-primary btn-sm mx-2" onClick={convertToUpper}>Set To Uppercase</button>
      <button className="btn btn-primary btn-sm" onClick={convertToLower}>Set To Lowercase</button>

       <div className="container my-3">
        <h3>Counting the number of words and charachters</h3>
        <p>This paragraph has {text.split(" ").length} words and {text.length} charachters.</p>
        <h3>Time taken to read the charachters.</h3>
        <p>It has taken {0.008 * text.split(" ").length} minutes</p>
        <h3>Preview of the text</h3>
        <p>{text}</p>
      </div>

    </>
  );
}
