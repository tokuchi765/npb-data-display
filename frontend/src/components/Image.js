import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  box: {
    fontSize: '60px',
    width: '100%',
    margin: '0 auto',
  },
}));

export default function Image(props) {
  const [show, setShow] = useState(false);
  const classes = useStyles();

  if (show) {
    return (
      <Box className={classes.box}>
        <Box>
          <img style={{ width: '100%', height: '100%' }} src={props.path} alt="" />
        </Box>
        <Box>
          <Button variant="contained" onClick={() => setShow(false)}>
            閉じる
          </Button>
        </Box>
      </Box>
    );
  } else {
    return (
      <div>
        <Button variant="contained" color="primary" onClick={() => setShow(true)}>
          {props.name}
        </Button>
      </div>
    );
  }
}
