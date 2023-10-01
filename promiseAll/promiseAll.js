// Simulated data and functions
const user = {
    name: "John",
    lastActivityTime: null,
  };
  
  const posts = [
    { id: 1, content: "Post 1" },
    { id: 2, content: "Post 2" },
    { id: 3, content: "Post 3" },
  ];
  
  function updateLastUserActivityTime() {
    return new Promise((resolve) => {
      setTimeout(() => {
        user.lastActivityTime = new Date();
        resolve(user.lastActivityTime);
      }, 1000); // Simulate a 1-second delay
    });
  }
  
  function createPost(post) {
    return new Promise((resolve) => {
      setTimeout(() => {
        posts.push(post);
        resolve();
      }, 1000); // Simulate a 1-second delay
    }).then(() => {
      // Call updateLastUserActivityTime after creating the post
      return updateLastUserActivityTime();
    });
  }
  
  function deletePost(postId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const index = posts.findIndex((post) => post.id === postId);
        if (index !== -1) {
          posts.splice(index, 1);
          resolve();
        } else {
          reject(new Error("Post not found"));
        }
      }, 1000); // Simulate a 1-second delay
    });
  }
  
  // Simulated usage
  createPost({ id: 4, content: "Post 4" })
    .then(() => {
      // Use Promise.all to update user activity time and create another post concurrently
      return Promise.all([
        updateLastUserActivityTime(),
        createPost({ id: 5, content: "Post 5" }),
      ]);
    })
    .then(([activityTime, createdPost]) => {
      console.log("All posts:");
      console.log(posts);
      console.log("Last Activity Time:", activityTime);
      return deletePost(5);
    })
    .then(() => {
      console.log("After deleting Post 5:");
      console.log(posts);
    })
    .catch((error) => {
      console.error("An error occurred:", error.message);
    });
  