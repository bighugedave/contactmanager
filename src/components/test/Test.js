import React, { Component } from "react";

class Test extends Component {
    state = {
        title: "",
        body: ""
    };

    render() {
        const { title, body } = this.state;

        return (
            <div>
                <h5>Title: {title}</h5>
                <p>{body}</p>
            </div>
        );
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/posts/1")
            .then(response => response.json())
            .then(data =>
                this.setState({
                    title: data.title,
                    body: data.body
                })
            );
    }
}

export default Test;
