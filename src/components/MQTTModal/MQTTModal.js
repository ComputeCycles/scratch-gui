/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-no-literals */
/* eslint-disable react/jsx-indent */
/* eslint-disable linebreak-style */
import React, {useState} from 'react';
import {connect} from 'react-redux';
import {
    closeMQTTModal
} from '../../reducers/mqttModal';
import {setMQTTClient} from '../../reducers/client';
import {setMQTTStatus} from '../../reducers/mqttStatus';
import {
    setFirstSatellite,
    setSecondSatellite,
    setThirdSatellite,
    setFourthSatellite
} from '../../reducers/satelliteNames';
import {resetSatCount} from '../../reducers/amountOfSats';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
import MQTTConnect from '../../lib/mqttConnect';
import './MQTTModal.css';

const MQTTModal = props => {
    const [address, setAddress] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [mqttStatus, setMQTTStatus] = useState(false);
    const [mqttError, setMqttError] = useState(false);
    const [variantMessage, setVariantMessage] = useState('');
    const [alertMessage, setAlertMessage] = useState('');
    const MqttClient = new MQTTConnect(props, newMessage);

    const handleClose = () => props.closeModal();

    const handleAddressChange = e => {
        setAddress(e.target.value);
    };

    const handleUsernameChange = e => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = e => {
        setPassword(e.target.value);
    };

    const handleConnect = async () => {
        if (mqttError) {
            setMqttError(false);
            setMQTTStatus(false);
        }
        if (address === '') {
            alert('Please list what address you would like to connect to');
            return;
        }
        setIsLoading(true);
        const client = MqttClient.connect(address, username, password);
        console.log(client, 'client');
        setTimeout(() => {
            if (client.connected) {
                client.subscribe(`sat/${username}/cmd/fx`, () => console.log(`subscribed to ${username}`));
                setMQTTStatus(true);
                props.setMQTTStatus(true);
                setIsLoading(false);
                setVariantMessage('success');
                setAlertMessage('Connected to MQTT.');
                console.log(props.vm, 'VM');
                props.vm.runtime.emit(props.vm.runtime.constructor.PERIPHERAL_CONNECTED);
            } else {
                console.log('error occurred');
                setVariantMessage('danger');
                setAlertMessage('Error. Please try again');
                setMQTTStatus(true);
                props.setMQTTStatus(false);
                setIsLoading(false);
                setMqttError(true);
                // this._runtime.emit(this._runtime.constructor.PERIPHERAL_CONNECTED);
            }
        }, 5000);
    };

    const handleDisconnect = async () => {
        console.log(props, 'props');
        const closed = await MqttClient.closeConnection();
        props.vm.setClient(null);
        setMQTTStatus(false);
        props.setMQTTStatus(false);
        setIsLoading(false);
        setMqttError(false);
        props.closeModal();
        props.setFirstSatName('');
        props.setSecondSatName('');
        props.setThirdSatName('');
        props.setFourthSatName('');
        props.resetSatCount();
    };

    const newMessage = (topic, payload) => {
        props.onMessage(topic, payload);
    };

  
    return (
        // eslint-disable-next-line react/jsx-filename-extension
        <Modal
            show={props.showModal}
            onHide={handleClose}
        >
            <Modal.Header>
                <div className="mx-auto">
                    <Modal.Title className="mx-auto">Connect to MQTT</Modal.Title>
                </div>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formBasicAddress">
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter MQTT Address"
                            defaultValue={address}
                            onChange={handleAddressChange}
                        />
                        <Form.Text className="text-muted">
                        Ex: mqtt.playspots.net
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="PlaySpots Username"
                            defaultValue={username}
                            onChange={handleUsernameChange}
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="PlaySpots Password"
                            defaultValue={password}
                            onChange={handlePasswordChange}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>

            <Modal.Footer>
                {/* <div className={styles.closeButton}> */}
                <Button
                    variant="secondary"
                    className="mr-auto"
                    onClick={handleClose}
                >
            Close
                </Button>
                {/* </div> */}
                {
                    (mqttStatus) ?
                        (mqttError) ?
                            <React.Fragment>
                                <Alert
                                    variant={variantMessage}
                                    className="mx-auto"
                                >
                                    {alertMessage}
                                </Alert>
                                <Button
                                    variant="primary"
                                    disabled={isLoading}
                                    onClick={handleConnect}
                                    className="ml-auto"
                                >
                                    {isLoading ? 'Connecting…' : 'Try Again'}
                                </Button>
                            </React.Fragment> :
                            <React.Fragment>
                                <Alert
                                    variant={variantMessage}
                                    className="mx-auto"
                                >
                                    {alertMessage}
                                </Alert>
                                <Button
                                    variant="danger"
                                    onClick={handleDisconnect}
                                    className="ml-auto"
                                >
                                Disconnect
                                </Button>
                            </React.Fragment> :
                        <Button
                            variant="primary"
                            disabled={isLoading}
                            onClick={handleConnect}
                            className="ml-auto"
                        >
                            {isLoading ? 'Connecting…' : 'Connect'}
                        </Button>
                }
            </Modal.Footer>
        </Modal>
    );
};

const mapStateToProps = state => ({
    fullscreenVisible: state.modals.fullscreenSimulator,
    showModal: state.modals.mqttModal,
    client: state.client.mqttClient,
    mqttStatus: state.status.mqttStatus,
    bluetoothConnected: state.bluetooth.connectionStatus,
    images: state.images
});

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeMQTTModal()),
    setClient: client => dispatch(setMQTTClient(client)),
    setMQTTStatus: status => dispatch(setMQTTStatus(status)),
    setFirstSatName: value => dispatch(setFirstSatellite(value)),
    setSecondSatName: value => dispatch(setSecondSatellite(value)),
    setThirdSatName: value => dispatch(setThirdSatellite(value)),
    setFourthSatName: value => dispatch(setFourthSatellite(value)),
    resetSatCount: () => dispatch(resetSatCount())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MQTTModal);
