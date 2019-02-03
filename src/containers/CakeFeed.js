import React from 'react';
import CakeCard from '../components/CakeCard';
import { getCakes } from '../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

// const mapStateToProps = state => ({
//   cakes: state.cakes.cakeList
// });

function mapStateToProps(state) {
  const { cakeList } = state.cakes;
  return {
    allCakes: cakeList
  };
}

class CakeFeed extends React.Component {
  async componentDidMount() {
    await this.props.dispatch(getCakes());
  }

  render() {
    return (
      <div>
        <Link to="/add-cake" style={{ textDecoration: 'none' }}>
          <Button size="large" color="primary">
            Add New Cake
          </Button>
        </Link>
        {this.props.allCakes &&
          this.props.allCakes.map(cake => {
            return <CakeCard cake={cake} />;
          })}
      </div>
    );
  }
}

export default connect(mapStateToProps)(CakeFeed);
