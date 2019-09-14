import * as Yup from 'yup';
import { setSpinner } from '../../store/spinners';
import { login } from '../../store/auth';
import history from '../../routes/history';

export const authFormValidation = Yup.object().shape({
  username: Yup.string()
    .required('Поле обязательно для заполения')
    .min(3, 'Поле не может содержать менее 3 сиволов')
    .max(64, 'Поле не может содержать более 64 сиволов'),
  email: Yup.string()
    .required('Поле обязательно для заполения')
    .email('Поле не соответствует формату'),
  password: Yup.string()
    .required('Поле обязательно для заполения')
    .min(3, 'Поле не может содержать менее 3 сиволов')
    .max(64, 'Поле не может содержать более 64 сиволов'),
});

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const authorize = async (dispatch, formValues) => {
  dispatch(setSpinner('auth', true));
  await wait(3000);
  dispatch(login());
  history.push('/stat');
  dispatch(setSpinner('auth', false));
};