import React from 'react';
import { RemoveCircle, AddCircleOutline } from '@mui/icons-material';
import { Typography, Box, IconButton, Tooltip } from '@mui/material';
import './index.css';

interface ChartHolderProps {
  character: boolean;
}

const CharHolder: React.FC<ChartHolderProps> = (props) => {
  const { character } = props;

  if (!character) {
    return (
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        className="char-add-holder"
      >
        <AddCircleOutline fontSize="large" />
      </Box>
    );
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap={1}
      className="char-holder-container"
    >
      <Typography
        className="level-text"
        variant="subtitle1"
        color="white"
      >
        Lv. 15
      </Typography>
      <div className="char-image-container">
        <img alt="char" src="https://media.unboxholics.com/media/source/Articles/94289/images/bigImage/onepiece.jpg" />
        <Tooltip title="Remover personagem">
          <IconButton size="large" className="remove-char-btn" color="error">
            <RemoveCircle fontSize="large" />
          </IconButton>
        </Tooltip>
      </div>
      <Typography variant="h5" color="white">luffy</Typography>
    </Box>
  );
}

export default CharHolder;
