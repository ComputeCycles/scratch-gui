import {FormattedMessage} from 'react-intl';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import React from 'react';

import Box from '../box/box.jsx';
import Dots from './dots.jsx';
import PlayspotAddressInput from './playspot-address-input.jsx';

import helpIcon from './icons/help.svg';
import backIcon from './icons/back.svg';

import styles from './connection-modal.css';

const AddressEntryStep = props => (
    <Box className={styles.body}>
        <Box className={styles.activityArea}>
            <div
                layout
                vertical
            >
                <div
                    className={styles.centeredRow}
                    padding-top="12px"
                    width="100%"
                >
                    <FormattedMessage
                        defaultMessage="Enter the name or address of your Playspot"
                        description="Message for entering playspot address"
                        id="gui.connection.playspot.enterAddress"
                    />
                </div>
                <div
                    className={styles.centeredRow}
                    padding-top="12px"
                    width="100%"
                >
                    <PlayspotAddressInput
                        className={classNames(styles.titleFieldGrowable)}
                        onUpdatePlayspotAddress={props.onUpdatePlayspotAddress}
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
                    onClick={props.onScanning}
                >
                    <img
                        className={classNames(styles.buttonIconLeft, styles.buttonIconBack)}
                        src={backIcon}
                    />
                    <FormattedMessage
                        defaultMessage="Try again"
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
    onScanning: PropTypes.func,
    onUpdatePlayspotAddress: PropTypes.func
};

export default AddressEntryStep;
