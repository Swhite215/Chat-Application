import messages from "./messages";
import * as types from "../constants/ActionTypes";

describe("Message Reducer", () => {
    it("should return the initial state, empty", () => {
        expect(messages(undefined, {})).toEqual([]);
    });

    it("should handle ADD_MESSAGE and store every message", () => {
        const actionOne = {
            type: "ADD_MESSAGE",
            author: "Tranquility",
            id: "0",
            message: "Test"
        };

        const actionTwo = {
            type: "ADD_MESSAGE",
            author: "Tranquility",
            id: "1",
            message: "Test Two"
        };

        const resultOne = [
            {
                message: "Test",
                author: "Tranquility",
                id: "0"
            }
        ];

        const testState = [
            {
                message: "Test",
                author: "Tranquility",
                id: "0"
            }
        ];

        const resultTwo = [
            {
                message: "Test",
                author: "Tranquility",
                id: "0"
            },
            {
                message: "Test Two",
                author: "Tranquility",
                id: "1"
            }
        ];

        expect(messages(undefined, actionOne)).toEqual(resultOne);
        expect(messages(testState, actionTwo)).toEqual(resultTwo);
    });
});
