import React from 'react'

const Entername = ({choices, handleChoiceClick}) => {
  return (
    <div>
       <h1>Entername
        </h1>
        <ul> 
    {
        <div className="choices">
        {choices.map((choice, index) => (
          <button key={index} onClick={() => handleChoiceClick(choice.nextScene)}>
            {choice.text}
          </button>
        ))}
      </div>
    }
    </ul>
    </div>
  )
}

export default Entername