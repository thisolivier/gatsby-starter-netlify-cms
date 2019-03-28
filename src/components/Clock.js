import React from 'react'

const Clock = class extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            time: new Date()
        }
    }
    
    componentDidMount(){
        this.timerId = setInterval(() => this.tick(), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timerId)
    }

    render() {
        const now = this.state.time
        let hour = now.getHours()
        let minute = now.getMinutes()
        let second = now.getSeconds()
        return <span>{hour}:{minute} || {second}</span>
    }

    tick() {
        this.setState({ time: new Date() })
    }
}

export default Clock