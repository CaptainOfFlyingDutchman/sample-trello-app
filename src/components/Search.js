import React, {PropTypes} from 'react';

class Search extends React.Component {
    constructor(props) {
      super(props);
      this.changeHandler = this.changeHandler.bind(this);
      this.state = {
        search: ''
      };
    }

    changeHandler(e) {
      const value = e.target.value;
      this.setState(prevState => {
        return {
          search: value
        };
      });
    }

    renderSearchPanel() {
      const filteredCards = this.props.cards.filter(card => {
        return card.labels.some(label => {
          return label.indexOf(this.state.search) !== -1;
        });
      });
      return (<ul className="search-results">
        {
          filteredCards.map(c => {
            return (<li key={c.id}>
              <h5>{c.title} &mdash; <span className="labels">{c.labels.join(', ')}</span></h5>
              <p>{c.description}</p>
              </li>);
          })
        }
      </ul>);
    }

    render() {
      return (
        <div>
          <label>
            <h3>Search <input type="text" onChange={this.changeHandler} /></h3>
            
          </label>
          {this.state.search !== '' && this.renderSearchPanel()}
        </div>
      );
    }
    
}

Search.propTypes = {
  cards: PropTypes.array.isRequired
};

export default Search;
