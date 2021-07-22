import React, {useState} from 'react';
import './App.css';
import Card from './components/Card/Card';
import Form from './components/Form/Form';



function App() {


  const [githubUsername, setGithubUsername] = useState([])

  const savedUsername = (enteredUsername) => {
    setGithubUsername(enteredUsername)
  }
  

  return (
    <div className="App">
      <Form onSaveUsername={savedUsername} />
      <Card info={githubUsername}/>
    </div>
  );
}

export default App;
