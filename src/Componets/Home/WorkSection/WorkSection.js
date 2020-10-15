import { Container, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './WorkSection.css';
import carousel1 from '../../../images/carousel-1.png';
import carousel2 from '../../../images/carousel-2.png';
import carousel3 from '../../../images/carousel-3.png';
import carousel4 from '../../../images/carousel-4.png';
import carousel5 from '../../../images/carousel-5.png';


const useStyles = makeStyles((theme) => ({
    workMain: {
      padding: "100px 0",
      textAlign: "center",
      backgroundColor: theme.palette.secondary.main
    },
    greenColor: {
      color: "#7AB259",
    },
    sliderItem: {
        width: '380px',
        margin: '0 auto',
        height: '260px'
    }
  }));
const WorkSection = () => {
    const classes = useStyles();


    const settings = {
        dots: true,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 2,
          autoplay: true,
          autoplaySpeed: 3000,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1120,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
        ],
      };


    return (
        <div className={classes.workMain}>
      <Container>
        <Typography
          variant="h3"
          style={{ marginBottom: "80px", color: '#fff' }}
          component="h3"
        >
         Here are some of  <span className={classes.greenColor}>our works</span>
        </Typography>
        <Slider {...settings}>
      <div>
        <div className={classes.sliderItem}>
            <img src={carousel1} alt="carousel item"/>
        </div>
      </div>
      <div>
        <div className={classes.sliderItem}>
            <img src={carousel2} alt="carousel item"/>
        </div>
      </div>
      <div>
        <div className={classes.sliderItem}>
            <img src={carousel3} alt="carousel item"/>
        </div>
      </div>
      <div>
        <div className={classes.sliderItem}>
            <img src={carousel4} alt="carousel item"/>
        </div>
      </div>
      <div>
        <div className={classes.sliderItem}>
            <img src={carousel5} alt="carousel item"/>
        </div>
      </div>
      <div>
        <div className={classes.sliderItem}>
            <img src={carousel5} alt="carousel item"/>
        </div>
      </div>
    </Slider>
      </Container>
    </div>
    );
};

export default WorkSection;