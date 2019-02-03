const cakes = (state = { cakeList: [], cakeId: 0 }, action) => {
  switch (action.type) {
    case 'GET_CAKES':
      return Object.assign({}, state, {
        cakeList: action.cakes
      });
    case 'GET_CAKE':
      return Object.assign({}, state, {
        cakeId: action.id
      });
    default:
      return state;
  }
};

export default cakes;
