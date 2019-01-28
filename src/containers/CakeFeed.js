import React from 'react';
import CakeCard from '../components/CakeCard';
import { getCake } from '../actions';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  cakes: state.cakes
});

class CakeFeed extends React.Component {
  async componentDidMount() {
    let response = await fetch(
      process.env.GET_CAKES_API_URL
    );
    let json = await response.json();

    this.props.dispatch(getCake(json));
  }

  render() {
    return (
      <div>
        {this.props.cakes[0] &&
          this.props.cakes[0].map(cake => {
            return (
              <CakeCard
                name={cake.name}
                comment={cake.comment}
                yumFactor={cake.yumFactor}
                imageUrl={cake.imageUrl}
              />
            );
          })}
      </div>
    );
  }
}

export default connect(mapStateToProps)(CakeFeed);