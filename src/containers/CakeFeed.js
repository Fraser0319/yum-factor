import React from 'react';
import CakeCard from '../components/CakeCard';
import { getCake } from '../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';

const mapStateToProps = state => ({
  cakes: state.cakes
});

class CakeFeed extends React.Component {
  async componentDidMount() {
    let response = await fetch(process.env.GET_CAKES_API_URL);
    let json = await response.json();

    this.props.dispatch(getCake(json));
  }

  render() {
    return (
      <div>
      <Link to="/add-cake" style={{textDecoration: 'none'}}>
      <Button size="large"  color="primary">Add New Cake</Button>
      </Link>
        {this.props.cakes[0] &&
          this.props.cakes[0].map(cake => {
            return (
              <CakeCard
                cake={cake}
              />
            );
          })}
      </div>
    );
  }
}

export default connect(mapStateToProps)(CakeFeed);
