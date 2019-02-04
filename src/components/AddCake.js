import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import { setTitle } from '../Actions/index';
import './../App.css';

function mapStateToProps(state) {
  const { title } = state.cakes;
    return {appBarTitle: title}
}

class AddCake extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cakeName: '',
      comment: '',
      yumFactor: '',
      imageUrl: '',
      errors: ''
    };

    this.handleChangeCakeName = this.handleChangeCakeName.bind(this);
    this.handleChangeComment = this.handleChangeComment.bind(this);
    this.handleChangeYumFactor = this.handleChangeYumFactor.bind(this);
    this.handleChangeImageUrl = this.handleChangeImageUrl.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.props.dispatch(setTitle('Add A New Cake'));
  }

  async validateForm() {
    let errorMessage = [];
    if (this.state.cakeName === '') {
      errorMessage.push('You must enter a cake name');
    }
    if (this.state.yumFactor === '') {
      errorMessage.push('You must enter a yum factor');
    }
    if (this.state.imageUrl === ''){
      this.setState({
        imageUrl: "https://realfood.tesco.com/media/images/RFO-MedHeroCarousel-963x613-VicSponge-320cdbcb-d75b-4b53-80e8-07a523b7f36d-0-963x613.jpg"
      })
    }

    if (errorMessage.length > 0) {
      this.setState({
        errors: errorMessage
      });
      return false;
    }

    return true;
  }

  async handleSubmit(event) {
    event.preventDefault();
    if (await this.validateForm()) {
      const request = new Request(process.env.ADD_NEW_CAKE_API_URL, {
        credentials: 'same-origin',
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
        body: JSON.stringify({
          name: this.state.cakeName,
          comment: this.state.comment,
          imageUrl: this.state.imageUrl,
          yumFactor: this.state.yumFactor
        })
      });

      const response = await fetch(request);
      const result = await response.json();
      this.props.history.push('/');
    }
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
      <form onSubmit={this.handleSubmit} id="cakeForm">
        {this.state.errors &&
          this.state.errors.map(error => {
            return <p style={{ color: 'red' }}>{error}</p>;
          })}
        <TextField
          id="textInput"
          error={this.state.name === ''}
          label="Cake Name"
          placeholder="Cake Name"
          fullWidth
          required
          margin="normal"
          InputLabelProps={{
            shrink: true
          }}
          value={this.state.cakeName}
          onChange={this.handleChangeCakeName}
        />
        <TextField
          id="textInput"
          label="Comment"
          placeholder="Comment"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true
          }}
          value={this.state.comment}
          onChange={this.handleChangeComment}
        />
        <FormControl />
        <TextField
          error={this.state.name === ''}
          id="textInput"
          label="Yum Factor"
          placeholder="Yum Factor"
          fullWidth
          type="number"
          required
          margin="normal"
          InputLabelProps={{
            shrink: true
          }}
          value={this.state.yumFactor}
          onChange={this.handleChangeYumFactor}
        />
        <TextField
          id="textInput"
          label="Image URL"
          placeholder="Image URL"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true
          }}
          value={this.state.imageUrl}
          onChange={this.handleChangeImageUrl}
        />
        <div className="buttonGroup">
          <Button
            size="medium"
            variant="contained"
            color="primary"
            type="submit"
            id="addButton"
          >
            Add Cake
          </Button>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Button size="medium" variant="contained" id="backButton">
              Back
            </Button>
          </Link>
        </div>
      </form>
    );
  }
}

export default connect(mapStateToProps)(AddCake);
