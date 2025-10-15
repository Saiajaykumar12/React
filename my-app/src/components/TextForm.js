import React,{useState} from "react";

export default function TextForm(props) {

    const[text,setText] = useState('Set text');
    // setText("I am in set text");

    const convertToUpper = () => {
        console.log("clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleOnChange = (event) => {
        console.log("On Change");
        setText(event.target.value);
    }

  return (
    <>

      <div className="mb-3 mt-3">
        <textarea
          className="form-control" value={text} onChange={handleOnChange}
          id="exampleFormControlTextarea1"
          rows="6" mt-3
        ></textarea>
      </div>
      <button className="btn btn-primary btn-sm" onClick={convertToUpper}>Set To Uppercase</button>

    </>
  );
}
