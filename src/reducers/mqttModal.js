const OPEN_MODAL = 'OPEN_MODAL';
const CLOSE_MODAL = 'CLOSE_MODAL';
const OPEN_MQTT_MODAL= 'OPEN_MQTT_MODAL';
const CLOSE_MQTT_MODAL= 'CLOSED_MQTT_MODAL';
const OPEN_SAT_MODAL = 'OPEN_SAT_MODAL';
const CLOSE_SAT_MODAL = 'CLOSE_SAT_MODAL';
const OPEN_BLOCK_MODAL = 'OPEN_BLOCK_MODAL';
const CLOSE_BLOCK_MODAL = 'CLOSE_BLOCK_MODAL';

const MODAL_SIMULATOR = 'fullscreenSimulator';
const MQTT_MODAL = 'mqttModal';
const SAT_MODAL = 'satModal';
const BLOCK_MODAL = 'blockModal';

const initialState = {
    [MODAL_SIMULATOR]: false,
    [MQTT_MODAL]: false,
    [SAT_MODAL]: false,
    [BLOCK_MODAL]: false,
};

const reducer = function (state, action) {
    if (typeof state === 'undefined') state = initialState;
    switch (action.type) {
    case OPEN_MODAL:
        return Object.assign({}, state, {
            [action.modal]: true
        });
    case CLOSE_MODAL:
        return Object.assign({}, state, {
            [action.modal]: false
        });
    case OPEN_MQTT_MODAL:
        return Object.assign({}, state, {
            [action.modal]: true
        });
    case CLOSE_MQTT_MODAL:
        return Object.assign({}, state, {
            [action.modal]: false
        });
    case OPEN_SAT_MODAL:
        return Object.assign({}, state, {
            [action.modal]: true
    });
    case CLOSE_SAT_MODAL:
        return Object.assign({}, state, {
            [action.modal]: false
    });
    case OPEN_BLOCK_MODAL:
        return Object.assign({}, state, {
            [action.modal]: true
    });
    case CLOSE_BLOCK_MODAL:
        return Object.assign({}, state, {
            [action.modal]: false
    });
    default:
        return state;
    }
};

const openModal = function (modal) {
    return {
        type: OPEN_MODAL,
        modal: modal
    };
};
const closeModal = function (modal) {
    return {
        type: CLOSE_MODAL,
        modal: modal
    };
};
const openFullscreenSimulator = function () {
    return openModal(MODAL_SIMULATOR);
};
const closeFullscreenSimulator = function () {
    return closeModal(MODAL_SIMULATOR);
};

const showMQTTModal = function (modal) {
    return {
        type: OPEN_MQTT_MODAL,
        modal: modal
    };
};
const hideMQTTModal = function (modal) {
    return {
        type: CLOSE_MQTT_MODAL,
        modal: modal
    };
};
const openMQTTModal = function () {
    return showMQTTModal(MQTT_MODAL);
};
const closeMQTTModal = function () {
    return hideMQTTModal(MQTT_MODAL);
};

const showSatModal = function (modal) {
    return {
        type: OPEN_SAT_MODAL,
        modal: modal
    };
};
const hideSatModal = function (modal) {
    return {
        type: CLOSE_SAT_MODAL,
        modal: modal
    };
};
const openSatModal = function () {
    return showSatModal(SAT_MODAL);
};
const closeSatModal = function () {
    return hideSatModal(SAT_MODAL);
};
const showBlockModal = function (modal) {
    return {
        type: OPEN_BLOCK_MODAL,
        modal: modal
    };
};
const hideBlockModal = function (modal) {
    return {
        type: CLOSE_BLOCK_MODAL,
        modal: modal
    };
};
const openBlockModal = function () {
    return showBlockModal(BLOCK_MODAL);
};
const closeBlockModal = function () {
    return hideBlockModal(BLOCK_MODAL);
};



export {
    reducer as default,
    initialState as modalsInitialState,
    openFullscreenSimulator,
    closeFullscreenSimulator,
    openMQTTModal,
    closeMQTTModal,
    openSatModal,
    closeSatModal,
    openBlockModal,
    closeBlockModal,
};
