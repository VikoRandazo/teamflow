import React, { FC } from 'react';
import styles from './AuthForm.module.scss';
import Login from './Login/Login';
import Register from './Register/Register';

interface AuthFormProps {}

const AuthForm: FC<AuthFormProps> = () => (
  <div className={styles.AuthForm}>
    <Login /> 
  </div>
);

export default AuthForm;
