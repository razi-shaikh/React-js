import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const reactElement = React.createElement(
    'a',
    {
        href : 'google.com',
        target : '_blank',
    },
    'click me'//custom react element
)

function MyApp (){
    return (
      <div>
        <h1>Function Call</h1>
      </div>
    )
  }

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
    <App/>
    <MyApp/>
    </>
    // MyApp()
    // reactElement
)
