import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import "./../Card.css";

class CakeCard extends React.Component {
  render() {
    return (
      <Card className="cakeCard">
        <CardActionArea>
          <CardMedia
            image={this.props.imageUrl}
            title="Unicorn Cake"
            style={{height: 180}}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {this.props.name}
            </Typography>
            <Typography component="p">{this.props.comment}</Typography>
            <Typography component="p">{this.props.yumFactor} / 5</Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Comments
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default CakeCard;
