const cakes = (state = [], action) => {
  switch (action.type) {
    case 'GET_CAKES':
      return [
        ...state,
         action.cake
      ];
    default:
      return state;
  }
};

export default cakes;
