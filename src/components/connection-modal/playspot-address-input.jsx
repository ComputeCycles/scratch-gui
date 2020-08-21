/* eslint-disable import/no-unresolved */
import classNames from 'classnames';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import bindAll from 'lodash.bindall';
import React from 'react';
import {defineMessages, intlShape, injectIntl} from 'react-intl';

import BufferedInputHOC from '../forms/buffered-input-hoc.jsx';
import Input from '../forms/input.jsx';
const BufferedInput = BufferedInputHOC(Input);

import styles from './playspot-address-input.css';

const messages = defineMessages({
    playspotAddressPlaceholder: {
        id: 'gui.connection.playspot.playspotAddressPlaceholder',
        description: 'Placeholder for playspot address when blank',
        defaultMessage: 'Playspot address here'
    },
    playspotUserNamePlaceholder: {
        id: 'gui.connection.playspot.userName',
        description: 'Placeholder for the user name when blank',
        defaultMessage: 'User Name'
    },
    playspotPasswordPlaceholder: {
        id: 'gui.connection.playspot.password',
        description: 'Placeholder for the user\'s password when blank',
        defaultMessage: 'Password'
    }
});

class PlayspotAddressInput extends React.Component {
    constructor (props) {
        super(props);
        // eslint-disable-next-line no-console
        console.log(props);
        bindAll(this, [
            'handleUpdatePlayspotAddress',
            'handleUpdatePlayspotUserName',
            'handleUpdatePlayspotPassword'
        ]);
        this.state = {
            addressValue: null,
            userNameValue: null,
            passwordValue: null
        };
    }
    // call onUpdatePlayspotAddress if it is defined (only defined when gui
    // is used within scratch-www)
    handleUpdatePlayspotAddress (newAddress) {
        if (this.props.onUpdatePlayspotAddress) {
            this.props.onUpdatePlayspotAddress(`${newAddress}`);
        }
    }
    handleUpdatePlayspotUserName (newUserName) {
        if (this.props.onUpdatePlayspotUserName) {
            this.props.onUpdatePlayspotUserName(`${newUserName}`);
        }
    }
    handleUpdatePlayspotPassword (newPassword) {
        if (this.props.onUpdatePlayspotPassword) {
            this.props.onUpdatePlayspotPassword(`${newPassword}`);
        }
    }
    handleAddressOnChange (e) {
        this.setState({addressValue: e.target.value});
    }
    handleUserNameOnChange (e) {
        this.setState({userNameValue: e.target.value});
    }
    handlePasswordOnChange (e) {
        this.setState({passwordValue: e.target.value});
    }
    render () {
        return (
            <div className={styles.row}>
                <div className={styles.inputGroup}>
                    <BufferedInput
                        className={classNames(styles.titleField, this.props.className)}
                        label="Playspot Address:"
                        maxLength="100"
                        placeholder={this.props.intl.formatMessage(messages.playspotAddressPlaceholder)}
                        tabIndex="0"
                        type="text"
                        value={this.state.addressValue}
                        onChange={this.handleAddressOnChange}
                        onSubmit={this.handleUpdatePlayspotAddress}
                    />
                    <BufferedInput
                        className={classNames(styles.titleField, this.props.playspotUserName)}
                        label="User Name:"
                        maxLength="100"
                        placeholder={this.props.intl.formatMessage(messages.playspotUserNamePlaceholder)}
                        tabIndex="0"
                        type="text"
                        value={this.state.userNameValue}
                        onChange={this.handleUserNameOnChange}
                        onSubmit={this.handleUpdatePlayspotUserName}
                    />
                    <BufferedInput
                        className={classNames(styles.titleField, this.props.playspotPassword)}
                        label="Password:"
                        maxLength="100"
                        placeholder={this.props.intl.formatMessage(messages.playspotPasswordPlaceholder)}
                        tabIndex="0"
                        type="password"
                        value={this.state.passwordValue}
                        onChange={this.handlePasswordOnChange}
                        onSubmit={this.handleUpdatePlayspotPassword}
                    />
                </div>
            </div>
        );
    }
}

PlayspotAddressInput.propTypes = {
    className: PropTypes.string,
    intl: intlShape.isRequired,
    onUpdatePlayspotAddress: PropTypes.func.isRequired,
    onUpdatePlayspotUserName: PropTypes.func.isRequired,
    onUpdatePlayspotPassword: PropTypes.func.isRequired,
    playspotAddress: PropTypes.string,
    playspotUserName: PropTypes.string,
    playspotPassword: PropTypes.string
};

const mapStateToProps = () => ({
});

const mapDispatchToProps = () => ({});

export default injectIntl(connect(
    mapStateToProps,
    mapDispatchToProps
)(PlayspotAddressInput));
