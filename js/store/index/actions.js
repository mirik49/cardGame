export function setGameData(actionVar, actionData) {
    return {
        type: 'ACTIONS',
        payload: {
            var: actionVar,
            val: actionData
        }
    };
}
