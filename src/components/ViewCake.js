import React from 'react';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { getCakes, getCake, setTitle } from '../Actions/index';

function mapStateToProps(state) {
  const { cakeId, cakeList, title } = state.cakes;
  let selectedCake = {
    currentCake: cakeList.find(cake => cake._id == cakeId),
    title: title
  };
  return selectedCake;
}

class ViewCake extends React.Component {
  async componentWillMount() {
    this.props.dispatch(setTitle('Detailed View'));
    if (this.props.currentCake == undefined) {
      await this.props.dispatch(getCakes());
    }
    await this.props.dispatch(getCake(this.props.match.params.id));

  }

  render() {
    let template;
    if (this.props.currentCake !== undefined) {
      template = (
        <div>
          <CardMedia
            image={this.props.currentCake.imageUrl}
            style={{ height: 180 }}
          />
          <div className="cakeDetails">
            <Typography
              color="primary"
              gutterBottom
              variant="h5"
              component="h2"
              align="left"
            >
              {this.props.currentCake.name}
            </Typography>
            <Typography color="textSecondary" align="left">
              {this.props.currentCake.comment}
            </Typography>
            <Typography color="textSecondary" align="left">
              Yum Factor {this.props.currentCake.yumFactor} / 5
            </Typography>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <Button size="small" variant="contained" >
                Back
              </Button>
            </Link>
          </div>
        </div>
      );
    } else {
      template = (
        <div>
          <FontAwesomeIcon icon={faCircleNotch} spin size="4x" />
        </div>
      );
    }
    return <div>{template}</div>;
  }
}

export default connect(mapStateToProps)(ViewCake);
