const cakes = (state = { cakeList: [], cakeId: 0, inputChar: '' }, action) => {
  switch (action.type) {
    case 'GET_CAKES':
      return Object.assign({}, state, {
        cakeList: action.cakes
      });
    case 'GET_CAKE':
      return Object.assign({}, state, {
        cakeId: action.id
      });
    case 'FILTER_CAKES':
      return Object.assign({}, state, {
        cakeList: state.cakeList.filter(cake => {
          const lcName = cake.name.toLowerCase();
          const filter = action.inputChar.toLowerCase();
          return lcName.includes(filter);
        })
      });
    default:
      return state;
  }
};

export default cakes;
