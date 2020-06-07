import React from 'react';
import './index.css';
import { observer } from 'mobx-react';

import { TextField, Button } from '@material-ui/core';
import { identityStore } from '../../store';

export const LoginForm = observer((props: any) => {
  const { identity } = identityStore;
  const { isAuthenticated } = identity;

  return(
    <div className="login-page">
      <div className="wrapper">
        <span className="form-title">
          myContactList
        </span>
        <div className="form-inputs">
          <TextField 
            label="login"
            value=''
          />
          <TextField 
            label="password"
            value=''
          />
        </div>
          <div className="form-button">
            <Button
              color="primary"
              variant="outlined"
              size="medium"
              onClick={ identityStore.login }
            > Вход </Button>
          </div>
      </div>
    </div>
  )
})