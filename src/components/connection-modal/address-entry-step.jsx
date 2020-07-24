import {FormattedMessage} from 'react-intl';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import React from 'react';

import Box from '../box/box.jsx';
import Dots from './dots.jsx';
import PlayspotAddressInput from './playspot-address-input.jsx';


import helpIcon from './icons/help.svg';

import styles from './connection-modal.css';

const AddressEntryStep = props => (
    <Box className={styles.body}>
        <Box className={styles.activityArea}>
            <div>
                <div className={styles.centeredRowPlayspot} >
                    <FormattedMessage
                        defaultMessage="Enter the address, username and password of your Playspot"
                        description="Message for entering playspot address"
                        id="gui.connection.playspot.enterAddress"
                    />
                </div>
                <div
                    className={styles.centeredRowPlayspot}
                >
                    <PlayspotAddressInput
                        className={classNames(styles.centeredRow)}
                        playspotAddress={props.playspotAddress}
                        playspotUserName={props.playspotUserName}
                        playspotPassword={props.playspotPassword}
                        onUpdatePlayspotAddress={props.onUpdatePlayspotAddress}
                        onUpdatePlayspotUserName={props.onUpdatePlayspotUserName}
                        onUpdatePlayspotPassword={props.onUpdatePlayspotPassword}
                    />
                </div>
            </div>
        </Box>
        <Box className={styles.bottomArea}>
            <Dots
                error
                className={styles.bottomAreaItem}
                total={3}
            />
            <Box className={classNames(styles.bottomAreaItem, styles.buttonRow)}>
                <button
                    className={styles.connectionButton}
                    onClick={props.onConnecting}
                >
                    <FormattedMessage
                        defaultMessage="Connect"
                        description="Button to initiate trying the device connection again after an error"
                        id="gui.connection.playspot.tryagainbutton"
                    />
                </button>
                <button
                    className={styles.connectionButton}
                    onClick={props.onHelp}
                >
                    <img
                        className={styles.buttonIconLeft}
                        src={helpIcon}
                    />
                    <FormattedMessage
                        defaultMessage="Help"
                        description="Button to view help content"
                        id="gui.connection.playspot.help"
                    />
                </button>
            </Box>
        </Box>
    </Box>
);

AddressEntryStep.propTypes = {
    onHelp: PropTypes.func,
    onConnecting: PropTypes.func,
    onUpdatePlayspotAddress: PropTypes.func,
    onUpdatePlayspotUserName: PropTypes.func,
    onUpdatePlayspotPassword: PropTypes.func,
    playspotAddress: PropTypes.string,
    playspotUserName: PropTypes.string,
    playspotPassword: PropTypes.string
};

export default AddressEntryStep;
