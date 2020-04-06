export const selectProductId = ({ id }) => ({
  type: 'SELECT_PRODUCT',
  payload: { id }
});

export const viewProduct = ({ id }) => ({
  type: 'VIEW_PRODUCT',
  payload: { id }
});

export const setUserInfo = ({ id, e }) => (dispatch, getState) => {
  const value = e.target.value;
  dispatch(setInfo({ id, value }));
};

const setInfo = ({ id, value }) => ({
  type: 'SET_INFO',
  payload: {
    [`${id}`]: value
  }
});