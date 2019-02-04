const cakes = (
  state = { cakeList: [], cakeId: 0, inputChar: '', title: 'Yum Factor' },
  action
) => {
  switch (action.type) {
    case 'GET_CAKES':
      return Object.assign({}, state, {
        title: state.title,
        cakeList: action.cakes
      });
    case 'GET_CAKE':
      return Object.assign({}, state, {
        cakeId: action.id,
        title: state.title
      });
    case 'FILTER_CAKES':
      return Object.assign({}, state, {
        cakeList: state.cakeList.filter(cake => {
          const lcName = cake.name.toLowerCase();
          const filter = action.inputChar.toLowerCase();
          return lcName.includes(filter);
        })
      });
    case 'SET_TITLE':
      if (action.title === undefined) {
        return state.title;
      }
      return Object.assign({}, state, {
        title: action.title
      });
    default:
      return state;
  }
};

export default cakes;
