import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';

import './../Card.css';
import { setTitle } from '../actions';

class AddCake extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cakeName: '', comment: '', yumFactor: '', imageUrl: '' };

    this.handleChangeCakeName = this.handleChangeCakeName.bind(this);
    this.handleChangeComment = this.handleChangeComment.bind(this);
    this.handleChangeYumFactor = this.handleChangeYumFactor.bind(this);
    this.handleChangeImageUrl = this.handleChangeImageUrl.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.props.dispatch(setTitle('Add A New Cake'));
  }

  async handleSubmit(event) {
    event.preventDefault();
    const request = new Request(process.env.ADD_NEW_CAKE_API_URL, {
      credentials: 'same-origin',
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      body: JSON.stringify({
        name: this.state.cakeName,
        comment: this.state.comment,
        imageUrl:
          'https://img.taste.com.au/9isesBer/taste/2016/11/caramello-cake-105070-1.jpeg',
        yumFactor: this.state.yumFactor
      })
    });

    const response = await fetch(request);
    const result = await response.json();
    console.log(result);
    this.props.history.push('/');

    // once done redirect to the home page.
  }

  handleChangeCakeName(event) {
    this.setState({ cakeName: event.target.value });
  }

  handleChangeComment(event) {
    this.setState({ comment: event.target.value });
  }

  handleChangeYumFactor(event) {
    this.setState({ yumFactor: event.target.value });
  }

  handleChangeImageUrl(event) {
    this.setState({ imageUrl: event.target.value });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Card className="cakeCard">
          <CardContent>
            <Typography variant="h5" component="h2">
              Add a new cake
            </Typography>
            <TextField
              id="outlined-full-width"
              label="Cake Name"
              style={{ margin: 8 }}
              placeholder="Cake Name"
              fullWidth
              margin="normal"
              variant="outlined"
              InputLabelProps={{
                shrink: true
              }}
              value={this.state.cakeName}
              onChange={this.handleChangeCakeName}
            />
            <TextField
              id="outlined-full-width"
              label="Comment"
              style={{ margin: 8 }}
              placeholder="Comment"
              fullWidth
              margin="normal"
              variant="outlined"
              InputLabelProps={{
                shrink: true
              }}
              value={this.state.comment}
              onChange={this.handleChangeComment}
            />
            <TextField
              id="outlined-full-width"
              label="Yum Factor"
              style={{ margin: 8 }}
              placeholder="Yum Factor"
              fullWidth
              margin="normal"
              variant="outlined"
              InputLabelProps={{
                shrink: true
              }}
              value={this.state.yumFactor}
              onChange={this.handleChangeYumFactor}
            />
            <TextField
              id="outlined-full-width"
              label="Image URL"
              style={{ margin: 8 }}
              placeholder="Image URL"
              fullWidth
              margin="normal"
              variant="outlined"
              InputLabelProps={{
                shrink: true
              }}
              value={this.state.imageUrl}
              onChange={this.handleChangeImageUrl}
            />
          </CardContent>
          <CardActions>
            <Button size="small" color="primary" type="submit">Add Cake</Button>
            <Link to="/" style={{textDecoration: 'none'}}><Button size="small" color="primary">Back</Button></Link>
          </CardActions>
        </Card>
      </form>
    );
  }
}

export  default connect()(AddCake);
