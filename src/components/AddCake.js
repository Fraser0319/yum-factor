import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import './../Card.css';

class AddCake extends React.Component {
  render() {
    return (
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
          />
        </CardContent>
        <CardActions>
          <Button size="small">Add Cake</Button>
          <Link to="/">Back</Link>
        </CardActions>
      </Card>
    );
  }
}

export default AddCake;
