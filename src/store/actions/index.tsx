import {setTag} from '../slices/tagSlice';
import {logOut} from '../slices/userSlice';
import {setScreen} from '../slices/tabSlice';
import {setStart} from '../slices/startSlice';
import {setRememberMe} from '../slices/userSlice';
import {setCurrency} from '../slices/currencySlice';
import {setDashboard, setDoctorList} from '../slices/versionSlice';
import {addToFavorite, removeFromFavorite} from '../slices/favoriteSlice';

export const actions = {
  setTag,
  logOut,
  setStart,
  setScreen,
  setCurrency,
  setDashboard,
  setDoctorList,
  setRememberMe,
  addToFavorite,
  removeFromFavorite,
};
