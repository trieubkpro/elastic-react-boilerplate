import {
    SET_ONLY_SHOW_2_PRODUCTS
} from './constants';
import  { makeAction } from '../../core/make_action';

export default {
    setAmountToShow: makeAction(SET_ONLY_SHOW_2_PRODUCTS, 'payload')
}