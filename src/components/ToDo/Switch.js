import React from 'react';

const Switch = ({ isOn, handleToggle }) => {
  return (
    <React.Fragment>
      <input
        checked={isOn}
        onChange={handleToggle}
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
      />
        <label
        style={{ background: isOn && '#06D6A0' }}
        className="react-switch-label"
        htmlFor={`react-switch-new`}
        >
        <span className={`react-switch-button`} />
      </label>
    </React.Fragment>
  );
};

export default Switch;