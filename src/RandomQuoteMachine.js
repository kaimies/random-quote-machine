import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './RandomQuoteMachine.css';

class RandomQuoteMachine extends Component {
    state = {
        quote: {
            author: '',
            quote: '',
        },
    };

    fetchQuote = () => {
       fetch('https://talaikis.com/api/quotes/random/')
        .then(response => response.json())
        .then((json) => {
            const { quote, author } = json;
            this.setState({ quote: {
                quote,
                author,
            } });
        })
        .catch(err => console.log(err));
    }

    componentDidMount() {
        this.fetchQuote();
    }

    render() {
        const urlEncodedText = encodeURI(`"${this.state.quote.quote.trim()}" ${this.state.quote.author} #quotes`);
        const tweetUrl = `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${urlEncodedText}`;

        return (
            <div className="container">
                <div id="quote-box" className="quote-box">
                    <h2 id="text">
                        <FontAwesomeIcon icon="quote-left" size="2x" color="#3773b8" />
                        &nbsp;
                        {this.state.quote.quote}
                    </h2>
                    <p id="author" className="quote-author">- {this.state.quote.author}</p>
                    <div className="buttons">
                        <a id="tweet-quote" className="button tweet" target="_blank" rel="noopener noreferrer" href={tweetUrl}>
                            <FontAwesomeIcon icon={['fab', 'twitter']} />
                        </a>
                        <button id="new-quote" className="button new-quote" onClick={this.fetchQuote}>New quote</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default RandomQuoteMachine;