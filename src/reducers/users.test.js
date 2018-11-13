import users from "./users";
import * as types from "../constants/ActionTypes";

describe("User Reducer", () => {
    it("should return initial state, empty", () => {
        expect(users(undefined, {})).toEqual([]);
    });

    it("should handle ADD_USER and store every user", () => {
        const actionOne = {
            type: types.ADD_USER,
            id: 0,
            name: "Tranquility"
        };

        const actionTwo = {
            type: types.ADD_USER,
            id: 1,
            name: "Vi"
        };
        const resultOne = [{ id: 0, name: "Tranquility" }];
        const resultTwo = [
            { id: 0, name: "Tranquility" },
            { id: 1, name: "Vi" }
        ];

        expect(users(undefined, actionOne)).toEqual(resultOne);

        expect(users(resultOne, actionTwo)).toEqual(resultTwo);
    });
});
