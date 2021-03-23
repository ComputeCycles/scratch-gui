import React from 'react';
import {connect} from 'react-redux';
import whiteMqttLogo from './whiteMqttLogo.svg';
import greenMqttLogo from './greenMqttLogo.svg';

import styles from './webbt-button.css';

const WebBTButtonComponent = props => {
    return (
        <div
            className={styles.buttonContainer}
            onClick={props.handleClick}
        >
            <img
                className={styles.button}
                draggable={false}
                src={(props.mqttStatus) ? greenMqttLogo : whiteMqttLogo}
                width={80}
            />
        </div>
    );
};

const mapStateToProps = state => ({
    mqttStatus: state.status.mqttStatus,
  });

  
  export default connect(
    mapStateToProps,
    null
  )(WebBTButtonComponent);
