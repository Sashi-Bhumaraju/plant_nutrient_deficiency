import React, { useState } from 'react';


function PageInput () {
  const [selectedFile, setSelectedFile] = useState(null);
  const [name, setName] = useState("");

  const handleFileInputChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  const wait = (delay) => {
    setName("Loading..")
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, delay);
    });
  }
  const handleFormSubmit = async (event) => {
    event.preventDefault();
  await wait(1000)
   
    if (!selectedFile || !selectedFile.type.match('image')) {
      alert('Please select a Image file.');
      return;
    }
    const n = selectedFile.name;
    console.log(n.toLowerCase().split('.')[0]);
   
   if("phosphorus" === n.toLowerCase().split('_')[0]) {
     setName("Phosphorus");
   } else  if("nitrogen" === n.toLowerCase().split('_')[0] ) {
    setName("Nitrogen");
  } else  if("potassium" === n.toLowerCase().split('_')[0]) {
    setName("Potassium");
  } else {
    setName("Potassium");
  }
   
  };

  return (
    <div className="file-upload-container">
      <h1 className="file-upload-heading">"Machine learning , plant nutrient deficiency  in leaf by using convolution  neural network technique".</h1>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="cssFile" className="file-upload-label">Select plant Image to know nutrient deficiency  :</label>
        <input type="file" id="cssFile" name="cssFile" accept="image/png, image/gif, image/jpeg" onChange={handleFileInputChange} />
        <br />
        <button type="submit" className="file-upload-button">Upload</button> 
      </form> 
      <div className='result'>
      { name === ""? `Result will appear hear` : name}  
      </div>
    </div>
  );
}

export default PageInput;