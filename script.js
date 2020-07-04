// Creating a h5 element for the new post.
const newPostTitle = document.createElement("h5");
newPostTitle.classList.add("new-card-title");

// Creating a new paragraph element for the new post.
const newPostContent = document.createElement("p");
newPostContent.classList.add("new-card-text");

// Creating new span element for the new post.
const newSpan = document.createElement("span");
newSpan.classList.add("new-badge", "new-badge-light");

const hobbiesTag = document.
getElementById("hobbies-tag");
const schoolLifeTag = document.getElementById("school-life-tag");
const personalTag = document.getElementById("personal-tag");

// Creating first div element for the new post.
const firstDiv = document.createElement("div");
firstDiv.classList.add("new-card-body");
firstDiv.appendChild(newPostTitle);
firstDiv.appendChild(newPostContent);
firstDiv.appendChild(newSpan);

// Creating second div element for the new post.
const secondDiv = document.createElement("div");
secondDiv.classList.add("card", "some-space");
secondDiv.appendChild(firstDiv);

const postList = document.getElementById("post-list");
postList.appendChild(secondDiv);

const postTitle = document.getElementById("new-post-title");
const postContent = document.getElementById("new-post-content");

const form = document.querySelector("form");

// Accessing submitForm elemnst from the HTML.
const submitForm = document.querySelector("#submit-form");
submitForm.addEventListener('click', ($event) => {
	$event.preventDefault();
	newPostTitle.textContent = `${postTitle.value}`;
	newPostContent.textContent = `${postContent.value}`;
	newSpan.textContent = `${hobbiesTag.value}`;
	form.reset();
});
