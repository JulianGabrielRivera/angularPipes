

// we can use this when making new Posts and  this is pretty much what our post will look like, it will have these key value pairs and it will detect errors for types and also for the naming of the key value, this is like models schema on mongoDB but for typescript angular

export interface Post {
    // these are like required true
    id:number,
    postTitle:string,
    //  optional with the ?
    date?:Date,

}
