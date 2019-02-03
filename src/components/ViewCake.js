import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCake } from '../actions';
import { getCakes } from '../actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'
import './../Card.css';

function mapStateToProps(state) {
  const { cakeId, cakeList } = state.cakes;
  let selectedCake = {
    currentCake: cakeList.find(cake => cake._id == cakeId)
  };
  return selectedCake;
}

class ViewCake extends React.Component {
  async componentWillMount() {
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
          <Card className="cakeCard">
            <CardActionArea>
              <CardMedia
                image={this.props.currentCake.imageUrl}
                style={{ height: 180 }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {this.props.currentCake.name}
                </Typography>
                <Typography color="textSecondary">
                  Yum Factor {this.props.currentCake.yumFactor} / 5
                </Typography>
                <Typography color="textSecondary">
                  {this.props.currentCake.comment}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Link to="/" style={{ textDecoration: 'none' }}>
                <Button size="small" color="primary">
                  Back
                </Button>
              </Link>
            </CardActions>
          </Card>
          <FontAwesomeIcon icon={faCircleNotch} spin size="4x"/>
        </div>
      );
    } else {
      template = (
        <div>
          <FontAwesomeIcon icon={faCircleNotch} spin size="4x" />
        </div>
      );
    }
    return (
      <div>
        {template}
      </div>
    );
  }
}

export default connect(mapStateToProps)(ViewCake);
