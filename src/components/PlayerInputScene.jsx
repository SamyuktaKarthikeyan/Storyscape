import React from 'react'

// PlayerInputScene.js
const PlayerInputScene = ({ text, handleInputSubmit }) => {
    const [inputValue, setInputValue] = useState('');
  
    const handleChange = (e) => {
      setInputValue(e.target.value);
    };
  
    const handleSubmit = () => {
      handleInputSubmit(inputValue);
    };
  
    return (
      <div>
        <p>{text}</p>
        <input type="text" value={inputValue} onChange={handleChange} />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    );
  };
export default PlayerInputScene