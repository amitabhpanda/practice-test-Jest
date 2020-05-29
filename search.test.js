const googleSearch = require("./search")

const mockDb= [
    "dogs.com",
    "CuteDogs.com",
    "paneer.com",
    "chicken.com",
]

it("test the google search outputs", ()=>{
    expect.assertions(2);
    expect(googleSearch("dog", mockDb)).toEqual(["dogs.com", "CuteDogs.com"]);
    expect(googleSearch("paneer", mockDb).length).toEqual(1);
})

it("test the input doesnt break for null and undefined", ()=>{
    //It was throwing error for these two cases since we had used a function on this passed value(toLowerCase()) so had to make necessary code changes for it to work.
    expect(googleSearch(undefined, mockDb)).toEqual([]);
    expect(googleSearch(null, mockDb)).toEqual([]);
})