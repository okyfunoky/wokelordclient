import * as React from 'react';
import './style.css'
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import RoomBuildMenu from '../RoomBuildMenu/roombuildmenu';

interface NewRoomButtonProps {
    clickHandler: any
}

const NewRoomButton: React.FC<NewRoomButtonProps> = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="newRoomButton">
      <button  aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Build Rooms
      </button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
          <RoomBuildMenu clickHandler={props.clickHandler}></RoomBuildMenu>
      </Menu>
    </div>
  );
}

export default NewRoomButton;