const fetch = require("node-fetch");
const { fetchfromSwapi, fetchfromSwapiPromise } = require("./apicall")

//const result = await fetchfromSwapi(fetch);

//console.log(result);

it("tests the swapi api call results, async test handled using return", () => {
    expect.assertions(2);
    return fetchfromSwapi(fetch).then(results=>{
        expect(results.count).toEqual(87);
        expect(results.results.length).toBeGreaterThan(5);
    })
})


it("tests the swapi api call results, async test handled using done", (done) => {
    expect.assertions(1);
    fetchfromSwapi(fetch).then(results=>{
        expect(results.count).toEqual(87);
        done();
    })
})


// tests the swapi api using mock fetch function since I trust the swapi api and I can instead test if my logic is correct by keeping a dummy call to swapi
it("tests the swapi api using mock fetch function", () => {
    const mockFetch = jest.fn().mockReturnValue(Promise.resolve({
        json: () => Promise.resolve({
            count: 10,
            results: [ 1,2,3,4,4,5 ]
        })
    }));
    expect.assertions(3)
    return fetchfromSwapi(mockFetch).then((data) => {
        expect(data.count).toEqual(10);
        expect(mockFetch.mock.calls.length).toEqual(1);
        expect(mockFetch).toBeCalledWith("https://swapi.py4e.com/api/people")
    })
});

// it("tests the swapi api call results", () => {
//     //expect.assertions(1);
//     fetchfromSwapi(fetch).then(results=>{
//         expect(results.count).toEqual(87);  // Here the test passes and the URL is called and it displays error for wrong url and passes for correct url
//         expect(results.count).toEqual(86);  // Strangely here the test fails if the URL is correct and passes if the URL is wrong but throws the wrong response error
//     })
// })