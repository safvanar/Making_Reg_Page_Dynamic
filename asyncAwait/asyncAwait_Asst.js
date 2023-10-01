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
        resolve(post);
      }, 1000); // Simulate a 1-second delay
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
  
  // Simulated usage with async/await
  (async () => {
    try {
      await createPost({ id: 4, content: "Post 4" });
      const activityTime = await updateLastUserActivityTime();
      console.log("All posts:");
      console.log(posts);
      console.log("Last Activity Time:", activityTime);
      await deletePost(4);
      console.log("After deleting Post 4:");
      console.log(posts);
    } catch (error) {
      console.error("An error occurred:", error.message);
    }
  })();
  