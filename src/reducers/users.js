const users = (state = [], action) => {
    switch (action.type) {
        case "ADD_USER":
            return [...state, { id: action.id, name: action.name }];
        case "USERS_LIST":
            return action.users;
        default:
            return state;
    }
};

export default users;
