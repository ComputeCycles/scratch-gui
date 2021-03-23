const SET_MQTT_STATUS = 'setMQTTStatus';

const MQTT_STATUS = 'mqttStatus';

const initialState = {
    [MQTT_STATUS]: false
};

const reducer = function (state, action) {
    if (typeof state === 'undefined') state = initialState;
    switch (action.type) {
    case SET_MQTT_STATUS:
        return Object.assign({}, state, {
            [MQTT_STATUS]: action.status
        });
    default:
        return state;
    }
};

const setMQTTStatus = function (status) {
    return {
        type: SET_MQTT_STATUS,
        status: status
    };
};
export {
    reducer as default,
    initialState as modalsInitialState,
    setMQTTStatus
};