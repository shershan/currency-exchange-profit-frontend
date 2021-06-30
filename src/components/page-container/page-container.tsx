import React from 'react';
import { PageProps } from '../../interfaces/props/component-props';
import { Header } from '../header/header';

export const PageContainer = (props: React.PropsWithChildren<PageProps>) => {
  return (
    <div>
      <Header {...props} />
      {props.children}
    </div>
  );
}