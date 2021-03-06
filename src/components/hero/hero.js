import React from 'react';
import PropTypes from 'prop-types';

import DefaultHeroImg from './hero-banner.jpg';
import styles from './hero.module.css';
import { Typography } from 'antd';

function Hero({ img = DefaultHeroImg, heading, description, children }) {
  return (
    <div className={styles.hero}>
      <img src={img} className={styles.heroImg} alt="hero-banner" />
      <div className={styles.heroCaption}>
        <Typography.Title level={2} className={styles.heading}>
          {heading}
        </Typography.Title>
        <Typography.Text className={styles.description}>
          {description}
        </Typography.Text>
        <div className={styles.colorWhite}>{children}</div>
      </div>
    </div>
  );
}

Hero.propTypes = {
  img: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.element
};

export default Hero;
