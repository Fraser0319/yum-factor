import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import { getCakes, filterCakes } from '../actions';
import { connect } from 'react-redux';

const styles = theme => ({
  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
});

function mapStateToProps(state) {
  const { cakeList } = state.cakes;
  return {
    allCakes: cakeList
  };
}

class TopBar extends React.Component {

  constructor(props) {
    super(props);
  }

  async componentDidMount(){
    await this.props.dispatch(getCakes());
    
  }

  handleChange(e){
    console.log(e.target.value);
    if(e.target.value !== "") {
      let inputChar = e.target.value;
      this.props.dispatch(filterCakes(inputChar));
    } else {
      this.props.dispatch(getCakes());
    }
  }

  render(){
    return (
      <div className={this.props.classes.root}>
        <AppBar position="sticky">
          <Toolbar>
            <Typography className={this.props.classes.title} variant="h6" color="inherit" noWrap>
              Cake App
            </Typography>
            <div className={this.props.classes.grow} />
            <div className={this.props.classes.search}>
              <div className={this.props.classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                onChange={this.handleChange.bind(this)}
                placeholder="Search…"
                classes={{
                  root: this.props.classes.inputRoot,
                  input: this.props.classes.inputInput,
                }}
              />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

TopBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(withStyles(styles)(TopBar));