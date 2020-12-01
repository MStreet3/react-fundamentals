// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {

  const inputRef = React.useRef(null);
  const [inputText, setInputText] = React.useState(null);

  function handleSubmit(e){
    e.preventDefault();
    onSubmitUsername(inputRef.current.value)
  }

  function handleChange(e){
    e.preventDefault();
    setInputText(inputRef.current.value.toLowerCase())
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input ref={inputRef} value={inputText} onChange={handleChange} type="text" id="usernameInput"/>
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
