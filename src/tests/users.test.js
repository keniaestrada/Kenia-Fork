// You already have the methods imported
//import { default as expect } from "expect";
//import { getUser, getUsers } from "../users";

// Make a test to verify if the method getUser(id) works correctly
// Verify any data of the resulting object you want

const users= require("../data")

const { getUser, 
} = require("../users");

describe ('getUser', () => { 
    it('it should retrieve the correct user for a given ID', () => { 
        const user = users[0]; 
        expect(getUser(1)).toEqual(user);
    });

    it("it should failto get the user", () => { 
        const user = users[2]; 
        expect(getUser(3)).toEqual (user);
    })

});



