import React, { FunctionComponent } from 'react';

const Loader: FunctionComponent = () => {
  return (
    <div className="dialog-content">
      <div className="loading-dialog-content">
        <div className="dialog-loading-content">
          <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
        <div className="dialog-loading-detail">
          <p><b>Please wait</b><br />
          </p>
        </div>
      </div>
    </div>
  );
}

export default Loader;
