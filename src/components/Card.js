import React, {PropTypes} from 'react';
import LaneButtons from './LaneButtons';
import Comment from './Comments';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.changeLane = this.changeLane.bind(this);
  }

  changeLane(e, lane) {
    this.props.changeCard(this.props.card.id, lane);
  }

  render() {
    const { title, description, comments, labels } = this.props.card;
    return (
      <div className="card">
        <div>
          <LaneButtons card={this.props.card} changeLane={this.changeLane} />
        </div>
        <div>
          <h4>{title} &mdash; <span className="labels">{labels.join(', ')}</span></h4>
          <p>{description}</p>
          <b>Comments</b>
          <ul>
            {comments.map((comment, i) => {
              return <li key={i}><Comment comment={comment} /></li>;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  card: PropTypes.object.isRequired,
  changeCard: PropTypes.func.isRequired
};

export default Card;
