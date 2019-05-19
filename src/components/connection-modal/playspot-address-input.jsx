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
    }
});

class PlayspotAddressInput extends React.Component {
    constructor (props) {
        super(props);
        bindAll(this, [
            'handleUpdatePlayspotAddress'
        ]);
    }
    // call onUpdatePlayspotAddress if it is defined (only defined when gui
    // is used within scratch-www)
    handleUpdatePlayspotAddress (newAddress) {
        if (this.props.onUpdatePlayspotAddress) {
            this.props.onUpdatePlayspotAddress(newAddress);
        }
    }
    render () {
        return (
            <BufferedInput
                className={classNames(styles.titleField, this.props.className)}
                maxLength="100"
                placeholder={this.props.intl.formatMessage(messages.playspotAddressPlaceholder)}
                tabIndex="0"
                type="text"
                value={this.props.playspotAddress}
                onSubmit={this.handleUpdatePlayspotAddress}
            />
        );
    }
}

PlayspotAddressInput.propTypes = {
    className: PropTypes.string,
    intl: intlShape.isRequired,
    onUpdatePlayspotAddress: PropTypes.func,
    playspotAddress: PropTypes.string
};

const mapStateToProps = state => ({
    playspotAddress: state.scratchGui.playspotAddress
});

const mapDispatchToProps = () => ({});

export default injectIntl(connect(
    mapStateToProps,
    mapDispatchToProps
)(PlayspotAddressInput));
