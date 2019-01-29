import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import './../Card.css';

class ViewCake extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Card className="cakeCard">
          <CardActionArea>
            <CardMedia style={{ height: 180 }} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Cake Name
              </Typography>
              <Typography color="textSecondary">Yum Factor 1 / 5</Typography>
              <Typography color="textSecondary">Comments</Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <Button size="small" color="primary">Back</Button>
            </Link>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default ViewCake;
