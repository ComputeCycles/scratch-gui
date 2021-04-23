/* eslint-disable linebreak-style */
import React from 'react';
import {connect} from 'react-redux';
import whiteMqttLogo from './whiteMqttLogo.svg';
import greenMqttLogo from './greenMqttLogo.svg';
import PropTypes from 'prop-types';

import styles from './webbt-button.css';

const WebBTButtonComponent = props => (
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

const mapStateToProps = state => ({
    mqttStatus: state.status.mqttStatus
});

WebBTButtonComponent.propTypes = {
    handleClick: PropTypes.bool,
    mqttStatus: PropTypes.func
};
  
export default connect(
    mapStateToProps,
    null
)(WebBTButtonComponent);
