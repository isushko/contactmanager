import React, {Component} from 'react';

class Test extends Component {

    state = {
        title: ''
    };

    componentDidMount() {
        // load remote data
        console.log('did mount');
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.setState({
                    title: data.title
                })
            });
    }

    render() {
        const {title} = this.state;

        return (
            <div>
                <h1>{title}</h1>
            </div>
        );
    }
}

export default Test;