import React from 'react';
import CakeCard from '../components/CakeCard';
import { getCakes } from '../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import Fab from '@material-ui/core/Fab';
import { withStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';

function mapStateToProps(state) {
  const { cakeList } = state.cakes;
  return {
    allCakes: cakeList
  };
}

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
    position: 'relative',
    minHeight: 200
  },
  fab: {
    position: 'fixed',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2
  }
});

class CakeFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
    this.setLoading = this.setLoading.bind(this);
  }

  setLoading(loadingState) {
    this.setState({
      loading: loadingState
    });
  }
  async componentDidMount() {
    await this.props.dispatch(getCakes());
    this.setLoading(false);
  }

  render() {
    let template;
    if (!this.state.loading) {
      template = (
        <div>
          {this.props.allCakes &&
            this.props.allCakes.map(cake => {
              return <CakeCard key={cake._id} cake={cake} />;
            })}
          <Link to="/add-cake" style={{ textDecoration: 'none' }}>
            <Fab className={this.props.classes.fab} color="primary">
              <AddIcon />
            </Fab>
          </Link>
        </div>
      );
    } else {
      template = <FontAwesomeIcon icon={faCircleNotch} spin size="4x" />;
    }
    return <div>{template}</div>;
  }
}

export default connect(mapStateToProps)(withStyles(styles)(CakeFeed));
