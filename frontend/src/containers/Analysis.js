import React from 'react';
import Box from '@material-ui/core/Box';
import Image from '../components/Image';
import analysisConst from '../components/Constants';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  box: {
    fontSize: '60px',
    width: '50%',
    margin: '0 auto',
  },
}));

function Analysis() {
  const classes = useStyles();

  return (
    <div>
      <Box display="flex" flexDirection="row" p={1}>
        <Box className={classes.box} display="flex" p={1} justifyContent="center">
          <Image name={analysisConst.CENTLAL_NAME} path={analysisConst.IMG_CENTRAL} />
        </Box>
        <Box className={classes.box} display="flex" p={1} justifyContent="center">
          <Image name={analysisConst.PACIFIC_NAME} path={analysisConst.IMG_PACIFIC} />
        </Box>
      </Box>
    </div>
  );
}

export default Analysis;
