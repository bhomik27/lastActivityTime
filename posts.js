const posts = [];

const user = {
    name: "Vishal",
    lastActivityTime: new Date
}

let count = 0;
//Do not touch these functions below at all
 function createPost() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            posts.push({ title: "Post" + count });
            console.log(posts);
            console.log(`LAST ACTIVITY TIME OF USER: ${user.lastActivityTime}`);
            resolve();
        }, 3000)
    }) 
}



 function deletePost(){
      return new Promise((resolve, reject) => {
        setTimeout( () => {
            if(posts.length > 0){
                const blog  = posts.pop();
                resolve(blog);
            } else {
                reject("ERROR")
            }
        }, 1000)
    })
}


 function updateLastUserActivityTime() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Updating User Last Activity Time');
            user.lastActivityTime = Date.now();
            resolve();
        }, 1000)
    })


}

console.log("Last Active time of the User:", user.lastActivityTime);


Promise.all([createPost({title: 'Post Five', body: 'This is Post Five'}), updateLastUserActivityTime()])
