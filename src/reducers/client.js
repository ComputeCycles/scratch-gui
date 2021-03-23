const SET_CLIENT = 'setMQTTCLIENT';

const MQTT_CLIENT = 'mqttClient';

const initialState = {
    [MQTT_CLIENT]: null
};

const reducer = function (state, action) {
    if (typeof state === 'undefined') state = initialState;
    switch (action.type) {
    case SET_CLIENT:
        return Object.assign({}, state, {
            [MQTT_CLIENT]: action.client
        });
    default:
        return state;
    }
};

const setMQTTClient = function (client) {
    return {
        type: SET_CLIENT,
        client: client
    };
};

export {
    reducer as default,
    initialState as clientInitialState,
    setMQTTClient
};