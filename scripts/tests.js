// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

const API_URL = "https://jsonplaceholder.typicode.com/posts";

const form = document.querySelector("#postForm");
const clearFormButton = document.querySelector("#clearFormButton");
const updateFormButton = document.querySelector("#updateFormButton");
const postContainer = document.querySelector("#postsContainer");

const createPost = async (postData = {}) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Failed to create a user");
    }
    console.log("response", response);

    const data = await response.json();
    return data;
  } catch (e) {
    console.error(error);
  }
};

createPost();

const getAllPosts = async () => {
  try {
    const res = await fetch(`${API_URL}?_limit=10`);
    const data = await res.json();
    return data;
  } catch (e) {
    console(e);
  }
};

const getPostById = async (id) => {
  try {
    const res = await fetch(`${API_URL}/${id}`);
    const data = await res.json();
    return data;
  } catch (e) {
    console;
  }
};

const updatePost = async (id, postDate) => {
  try {
    const res = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      body: JSON.stringify(postDate),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    return;
  } catch (e) {
    console.log(e);
  }
};

const deletePost = async (id) => {
  try {
    const res = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    return;
  } catch (e) {
    console.log(e);
  }
};
const displayPosts = (posts) => {
  if (posts.length === 0) {
    postContainer.innerHTML = '<div class="loading">Posts not found</div>';
    return;
  }
  const items = posts
    .map((post) => {
      return `
    <div class="post-item">
    <div class="meta">ID: ${post.id} | User: ${post.userId}</div>
    <h3>${post.title}</h3>
    <p>${post.body}</p>
    <div>
     <button class="secondary" data-action="edit" data-post-id="${post.id}">Edit</button>
     <button class="destructive"  data-action="delete" data-post-id="${post.id}">Delete</button>
    </div>
    </div>
    `;
    })
    .join("");
  postContainer.innerHTML = items;
};

const loadPost = async () => {
  postContainer.innerHTML = '<div class="loading">Loading...</div>';

  try {
    const posts = await getAllPosts();
    displayPosts(posts.slice(0, 10));
  } catch (e) {
    postContainer.innerHTML =
      '<div class="status error">Failed to fetch posts</div>';
  }
};

const clearForm = () => {
  form.reset();
};

const handleDelete = async (id) => {
  if (!confirm("Delete post ?")) {
    return;
  }
  try {
    await deletePost(id);
    loadPost();
  } catch (e) {
    console.error(e);
  }
};
const handleEditPost = async (id) => {
  try {
    const post = await getPostById(id);

    document.querySelector("#title").value = post.title;
    document.querySelector("#body").value = post.body;
    document.querySelector("#userId").value = post.userId;
    document.querySelector("#postId").value = post.id;
  } catch (e) {}
};
const updateCurrentPost = async () => {
  const userId = document.querySelector("#userId").value;
  const title = document.querySelector("#title").value;
  const body = document.querySelector("#body").value;
  const postId = document.querySelector("#postId").value;
  const postData = {
    id: parseInt(postId),
    userId: parseInt(userId),
    title: title,
    body: body,
  };
  try {
    await updatePost(parseInt(postId), postData);
    clearForm();
    loadPost();
  } catch (e) {}
};
updateFormButton.addEventListener("click", () => {
  updateCurrentPost();
});

clearFormButton.addEventListener("click", () => {
  clearForm();
});

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const userId = document.querySelector("#userId").value;
  const title = document.querySelector("#title").value;
  const body = document.querySelector("#body").value;

  const postData = {
    userId: parseInt(userId),
    title: title,
    body: body,
  };

  try {
    const postContainer = document.querySelector("#postsContainer");
    const res = await createPost(postData);

    const newPostHTML = `
    <div class="post-item">
    <div class="meta">ID: ${res.id} | User: ${res.userId}</div>
    <h3>${res.title}</h3>
    <p>${res.body}</p>
    <div>
     <button class="secondary" data-action="edit" data-post-id="${res.id}">Edit</button>
     <button class="destructive" data-action="delete" data-post-id="${res.id}">Delete</button>
    </div>
    </div>
    `;
    postContainer.insertAdjacentHTML("afterbegin", newPostHTML);
    clearForm();
  } catch (e) {
    console.error(e);
  }
});

postContainer.addEventListener("click", async (event) => {
  const postId = event.target.dataset.postId || null;
  const action = event.target.dataset.action || null;
  if (postId && action === "delete") {
    handleDelete(postId);
    return;
  }
  if (postId && action === "edit") {
    handleEditPost(postId);
    return;
  }
});
document.addEventListener("DOMContentLoaded", async () => {
  await loadPost();
});
