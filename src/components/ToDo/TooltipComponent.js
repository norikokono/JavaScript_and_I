// https://www.geeksforgeeks.org/how-to-use-tooltip-component-in-reactjs/?ref=rp

import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import CakeIcon from '@material-ui/icons/Cake';
import EmojiNatureIcon from '@material-ui/icons/EmojiNature';
import MoodIcon from '@material-ui/icons/Mood';
import NaturePeopleIcon from '@material-ui/icons/NaturePeople';
import RedditIcon from '@material-ui/icons/Reddit';
import LocalFloristIcon from '@material-ui/icons/LocalFlorist';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAlt';
  
export default function TooltipComponent() {
  return (
    <div style={{ display: "block", padding: 30 }}>
      <h4>How to use Tooltip Component in ReactJS?</h4>
      <Tooltip title="Cake">
        <IconButton>
          <CakeIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="EmojiNature">
        <IconButton>
          <EmojiNatureIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Mood">
        <IconButton>
          <MoodIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="NaturePeople">
        <IconButton>
          <NaturePeopleIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Reddit">
        <IconButton>
          <RedditIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="LocalFlorist">
        <IconButton>
          <LocalFloristIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="SentimentSatisfiedAltIcon">
        <IconButton>
          <SentimentSatisfiedAltIcon />
        </IconButton>
      </Tooltip>
    </div>
  );
}