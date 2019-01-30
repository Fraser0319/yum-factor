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
import './../Card.css';

const mapStateToProps = state => ({
  cake: state.cakes[0]
});

class ViewCake extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.match.params.id);
    console.log(this.props.cake);
    this.result = this.props.cake.filter(
      cake => cake._id == this.props.match.params.id
    );
  }

  render() {
    return (
      <div>
        <Card className="cakeCard">
          <CardActionArea>
            <CardMedia image={this.result[0].imageUrl}style={{ height: 180 }} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {this.result[0].name}
              </Typography>
              <Typography color="textSecondary">Yum Factor {this.result[0].yumFactor} / 5</Typography>
              <Typography color="textSecondary">{this.result[0].comment}</Typography>
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
      </div>
    );
  }
}

export default connect(mapStateToProps)(ViewCake);
