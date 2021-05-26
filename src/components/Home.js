import { makeStyles, Slide } from '@material-ui/core';
import React from 'react';
import Carousel from 'react-material-ui-carousel';

const useStyles = makeStyles(() => ({

    container: {
      textAlign: "center",
      position:'relative',
      color:'black',
      marginBottom: '0', 
      height: '100vh',
    
    },
    text:{
        position: 'absolute',
        textAlign:'center',
        color:'white',
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        height: '500px'

    }
  }));

const Home =() =>{
    const classes= useStyles();

    const images= [
        {
            name: 'MacBook Pro Desktop Scene with Plants',
            url: 'https://images.unsplash.com/photo-1585076641399-5c06d1b3365f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop'
        },
        {
            name: 'Phone with white background placed on the table.',
            url: 'https://images.unsplash.com/photo-1592467896946-992336f11f36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop'
        }
    ]

    return (
        <div className={classes.container}>
        {/* <Carousel className={classes.container}>
          {images.map((photo, i) => (
            <img key={i} src={photo.url} alt='' style={{width:'100%'}}/>
          ))}
        </Carousel> */}
        <img src='https://images.unsplash.com/photo-1585076641399-5c06d1b3365f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop' alt='' style={{width:'100%', height:'100%'}}/>
        <h1 className={classes.text}>Welcome</h1>
        </div>
      );
}

export default Home;