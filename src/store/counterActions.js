import { incrementByAmount } from './counter-slice';
import { fetchCount } from './counterAPI';

export const addAsyncAmount = (counter) => {
  return async (dispatch) => {
    const amount = await fetchCount(counter);
    dispatch(incrementByAmount(Number(amount.data)));
  };
};