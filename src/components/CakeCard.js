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
            image="images/unicorn.png"
            title="Unicorn Cake"
            style={{height: 160}}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Cake
            </Typography>
            <Typography component="p">Unicorn cake</Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Comment
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default CakeCard;
