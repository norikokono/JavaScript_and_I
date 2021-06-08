// https://www.geeksforgeeks.org/how-to-use-chip-component-in-reactjs/

import React from "react";
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";
  
export default function ChipComponent() {
  const handleClick = () => {
    alert("Clicked!!");
  };
  
  return (
    <div style={{ display: "block", padding: 30 }}>
      <h4>How to use Chip Component in ReactJS?</h4>
      <Chip label="Simple Basic Chip" />
      <Chip label="Disabled Chip" disabled />
      <Chip
        avatar={<Avatar>M</Avatar>}
        label="Simple Clickable Chip"
        onClick={handleClick}
      />
    </div>
  );
}