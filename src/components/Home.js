import { makeStyles, Slide } from '@material-ui/core';
import React from 'react';
import Carousel from 'react-material-ui-carousel';

const useStyles = makeStyles(() => ({

    container: {
    display:'flex',
    flexDirection:'row-reverse',
      textAlign: "center",
      position:'relative',
      color:'black',
      marginBottom: '0', 
      width:'100%',
    },
    text:{
       

    }
  }));

const Home =() =>{
    const classes= useStyles();

    return (
        <div className={classes.container} id='landing-page'>
        {/* <Carousel className={classes.container}>
          {images.map((photo, i) => (
            <img key={i} src={photo.url} alt='' style={{width:'100%'}}/>
          ))}
        </Carousel> */}
   
        {/* <img className='home-img'src='https://images.unsplash.com/photo-1517483355902-ec2136d1c0a8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2600&q=80' alt='' /> */}
        <div id='welcome'>
        <h1>Karla Rodriguez</h1>
        <h3>Front-end Developer | Full-stack Developer</h3>
        </div>
        <div className='home-img'>
        </div>
        </div>
      );
}

export default Home;