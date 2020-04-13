import { omit } from 'lodash';
import categories from '../data/categories.json';
import options from '../data/options.json';
import products from '../data/products.json';

export default (
  state={
    categories,
    error: null,
    options,
    products,
    selectedOptions: {},
    selectedProductId: null,
  },
  action={}
) => {
  switch (action.type) {
    case 'SELECT_PRODUCT':
      return {
        ...state,
        selectedProductId: action.payload.id,
      };
    case 'REMOVE_OPTION':
      return {
        ...state,
        selectedOptions: omit(state.selectedOptions, [action.payload.id])
      };
    case 'SET_OPTION':
      return {
        ...state,
        selectedOptions: {
          ...state.selectedOptions,
          ...action.payload
        }
      };
    case 'SET_INFO':
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          ...action.payload
        }
      };
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload.error
      };
    case 'REMOVE_ERROR':
      return omit(state, ['error'])
    default:
      return state
  }
}
