export const GET_CAKES = 'GET_CAKES'

export function getCake(cake) {
  return { type: GET_CAKES, cake }
}