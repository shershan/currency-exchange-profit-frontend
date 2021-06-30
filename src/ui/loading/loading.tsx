import React from "react";
import { CircularProgress } from '@material-ui/core'
import { ILoadingProps as LoadingProps } from "../../interfaces/props/ui-props";

export const Loading = (props: LoadingProps) => {
  if (props.isLoading) {
    return (
      <div style={{ position: 'absolute', width: '100%', height: '100%', backgroundColor: 'black', opacity: '20%' }}>
        <div style={{margin: '100px auto', textAlign: 'center'}}>     
             <CircularProgress color='primary' />
        </div>
      </div>
    );
  } else {
    return <React.Fragment></React.Fragment>
  }
}