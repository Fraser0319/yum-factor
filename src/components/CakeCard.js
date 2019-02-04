import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import './../App.css';

class CakeCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Card className="cakeCard">
        <CardMedia image={this.props.cake.imageUrl} style={{ height: 140 }} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" align="left">
            {this.props.cake.name}
          </Typography>
        </CardContent>
        <CardActions>
          <Link
            to={`/cake/${this.props.cake._id}`}
            style={{ textDecoration: 'none' }}
          >
            <Button size="small" color="primary">
              View Details
            </Button>
          </Link>
        </CardActions>
      </Card>
    );
  }
}
export default CakeCard;
