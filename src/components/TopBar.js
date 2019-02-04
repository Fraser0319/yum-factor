import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import { getCakes, filterCakes } from '../Actions/index';
import { connect } from 'react-redux';

const styles = theme => ({
  root: {
    width: '100%'
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  title: {
    display: 'block',
    width: 400
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit,
      width: 'auto'
    }
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputRoot: {
    color: 'inherit',
    width: '100%'
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    width: 100,
    '&:focus': {
      width: 400
    }
  }
});

function mapStateToProps(state) {
  const { cakeList, title } = state.cakes;
  return {
    allCakes: cakeList,
    appBarTitle: title
  };
}

class TopBar extends React.Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    await this.props.dispatch(getCakes());
  }

  handleChange(e) {
    if (e.target.value !== '') {
      let inputChar = e.target.value;
      this.props.dispatch(filterCakes(inputChar));
    } else {
      this.props.dispatch(getCakes());
    }
  }

  render() {
    return (
      <div className={this.props.classes.root}>
        <AppBar position="sticky">
          <Toolbar>
            <Typography
              className={this.props.classes.title}
              variant="h6"
              color="inherit"
              noWrap
              align="left"
            >
              {this.props.appBarTitle}
            </Typography>

            <div className={this.props.classes.grow} />
            <div className={this.props.classes.search}>
              {this.props.appBarTitle === 'Yum Factor' && (
                <div>
                  <div className={this.props.classes.searchIcon}>
                    <SearchIcon />
                  </div>
                  <InputBase
                    onChange={this.handleChange.bind(this)}
                    placeholder="Search…"
                    classes={{
                      root: this.props.classes.inputRoot,
                      input: this.props.classes.inputInput
                    }}
                  />
                </div>
              )}
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

TopBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(withStyles(styles)(TopBar));
