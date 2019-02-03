export const GET_CAKES = 'GET_CAKES';
export const GET_CAKE = 'GET_CAKE';
export const FILTER_CAKES = 'FILTER_CAKES';
export const SET_TITLE = 'SET_TITLE';

async function fetchAllCakes() {
  let response = await fetch(process.env.GET_CAKES_API_URL);
  return await response.json();
}

export function filterCakes(inputChar) {
  return { type: FILTER_CAKES, inputChar };
}

export function setTitle(title) {
  return { type: SET_TITLE, title };
}

export function getCake(id) {
  return { type: GET_CAKE, id };
}

export function getCakes() {
  return function(dispatch) {
    return fetchAllCakes().then(cakes => dispatch({ type: GET_CAKES, cakes }));
  };
}
