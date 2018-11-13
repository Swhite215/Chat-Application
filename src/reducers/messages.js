const messages = (state = [], action) => {
    switch (action.type) {
        case "ADD_MESSAGE":
        case "MESSAGE_RECEIVED":
            return [
                ...state,
                {
                    messsage: action.messsage,
                    author: action.author,
                    id: action.id
                }
            ];
        default:
            return state;
    }
};

export default messages;
