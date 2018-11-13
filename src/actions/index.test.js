import { addMessage, addUser } from "../actions";
import * as types from "../constants/ActionTypes";

describe("adding a message", () => {
    it("should create an action to add a message with id 0", () => {
        const message = "Something";
        const action = {
            type: types.ADD_MESSAGE,
            message: message,
            author: "Tranquility",
            id: 0
        };
        expect(addMessage(message, "Tranquility")).toEqual(action);
    });
});

describe("adding a second message", () => {
    it("should create an action to add a message with id 1", () => {
        const message = "Something";
        const action = {
            type: types.ADD_MESSAGE,
            message: message,
            author: "Tranquility",
            id: 1
        };
        expect(addMessage(message, "Tranquility")).toEqual(action);
    });
});

describe("adding a user", () => {
    it("should create an action to add a user with id 0", () => {
        const name = "Tranquility";
        const action = {
            type: types.ADD_USER,
            id: 0,
            name: "Tranquility"
        };
        expect(addUser(name)).toEqual(action);
    });
});

describe("adding a second user", () => {
    it("should create an action to add a user with id 1", () => {
        const name = "Tranquility";
        const action = {
            type: types.ADD_USER,
            id: 1,
            name: "Tranquility"
        };
        expect(addUser(name)).toEqual(action);
    });
});
