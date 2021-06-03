// create your App component here
import React from 'react'

class App extends React.Component {
    render() {
        return (
            <div>Hello</div>
        )
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json (Links to an external site.)')
        .then(resp => resp.json)
        .then(data => data)
    }
}

export default App