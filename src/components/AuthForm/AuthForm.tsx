import React, { FC } from 'react';
import styles from './AuthForm.module.scss';
import Login from './Login/Login';

interface AuthFormProps {}

const AuthForm: FC<AuthFormProps> = () => (
  <div className={styles.AuthForm}>
    <Login /> 
  </div>
);

export default AuthForm;
