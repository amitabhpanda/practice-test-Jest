const googleDatabase= [
    "animals.com",
    "blackpanther.com",
    "cats.com",
    "dogs.com",
    "blackCats.com",
    "parrot.com",
    "awesomecats.com",
    "catsdogs.com"
]


const googleSearch= (search, db) => {
    const webSitesMatched=search?db.filter(website=> {
        return website.toLowerCase().includes(search.toLowerCase())
    }):[]

    return webSitesMatched.slice(0, 3);
}

// console.log(googleSearch("dogs"));
// console.log(googleSearch("par"));
// console.log(googleSearch("cats"))

module.exports = googleSearch;