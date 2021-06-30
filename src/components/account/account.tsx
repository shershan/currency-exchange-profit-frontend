import React from 'react';
import { AccountProps } from '../../interfaces/props/component-props';
import { PageContainer } from '../page-container/page-container';

export const Account = (props: AccountProps) => {
  return (
    <PageContainer onSignOut={props.onSignOut}>
      <div>
        Account
      </div>
    </PageContainer>
  );
}