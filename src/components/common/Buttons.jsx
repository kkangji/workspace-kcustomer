// import React from 'react';
// import { motion } from 'framer-motion';
// import { makeStyles } from 'tss-react/mui';
import MuiButton from '@mui/material/Button';
// import Animate from '@/components/common/Animate';

// const useStyles = makeStyles()((theme) => ({
//   btn: {
//     margin: theme.spacing(1),
//     padding: 0,
//     [theme.breakpoints.up('md')]: {
//       padding: '0px 20px',
//     },
//   },
// }));

export default function Button(props) {
  const { text, size, color, variant, onClick, ...other } = props;
  // const { classes } = useStyles();

  // const variants = {
  //   initial: { x: 0 },

  //   final: {
  //     rotate: '360deg',

  //     transition: {
  //       duration: 2,
  //       repeat: Infinity,
  //       ease: 'linear',
  //     },
  //   },
  // };

  return (
    // <Animate>
    <MuiButton
      // className={classes.btn}
      variant={variant || 'contained'}
      size={size || 'large'}
      color={color || 'primary'}
      onClick={onClick}
      // startIcon={
      //   loading ? (
      //     <motion.div variants={variants} initial="initial" animate="final">
      //       <img
      //         alt="loading icon"
      //         src={`/assets/icons/icon_loading.svg`}
      //         style={{ width: 28, height: 28, color: 'outline.primary' }}
      //       />
      //     </motion.div>
      //   ) : null
      // }
      {...other}
    >
      {text}
    </MuiButton>
    // </Animate>
  );
}
