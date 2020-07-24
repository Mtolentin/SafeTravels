import React from 'react';
import '../../css/marker.css';

const Marker = (props) => (
  <React.Fragment>
    <div>
      <div 
        className="pin bounce"
        style={{ backgroundColor: props.color, cursor: 'pointer' }}
        title={props.name}
      />
      <div className="pulse" />
    </div>
      {props.show && (
        <div
          style={{
            width: 100,
            height: 100
          }}
        >Info window</div>
      )}
  </React.Fragment>
);

export default Marker;