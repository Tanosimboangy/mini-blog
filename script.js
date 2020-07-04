// Creating a h5 element for the new post.
const newH5 = document.createElement("h5");
newH5.classList.add("new-card-title");

// Creating a new paragraph element for the new post.
const newParagraph = document.createElement("p");
newParagraph.classList.add("new-card-text");

// Creating new span element for the new post.
const newSpan = document.createElement("span");
newSpan.classList.add("new-badge", "new-badge-light");

// Creating first div element for the new post.
const firstDiv = document.createElement("div");
firstDiv.classList.add("new-card-body");
firstDiv.appendChild(newH5);
firstDiv.appendChild(newParagraph);
firstDiv.appendChild(newSpan);

// Creating second div element for the new post.
const secondDiv = document.createElement("div");
secondDiv.classList.add("card", "some-space");
secondDiv.appendChild(firstDiv);

// Creating third div element for the new post.
const thirdDiv = document.createElement("div");
thirdDiv.classList.add("col-8", "offset-2");
thirdDiv.appendChild(secondDiv);
thirdDiv.setAttribute("id", "post-list");
console.log(thirdDiv);

// Accessing postTitle elemnst from the HTML.
const postTitle = document.querySelector("#new-post-title");
console.log(postTitle);
postTitle.addEventListener('change', ($event) => {
	newH5.textContent = $event.target.value;
	});

// Accessing postContent elemnst from the HTML.
const postContent = document.querySelector("#new-post-content");
console.log(postContent);
postContent.addEventListener('change', ($event) => {
	newParagraph.textContent = $event.target.value;
	});

// Accessing hobbiesTag elemnst from the HTML.
const hobbiesTag = document.querySelector("#hobbies-tag");
console.log(hobbiesTag);
hobbiesTag.addEventListener('change', ($event) => {
	newSpan.textContent = $event.target.value;
});

// Accessing schoolLifeTag elemnst from the HTML.
const schoolLifeTag = document.querySelector("#school-life-tag");
console.log(schoolLifeTag);
schoolLifeTag.addEventListener('change', ($event) => {
	newSpan.textContent = $event.target.value;
	});

// Accessing personalTag elemnst from the HTML.
const personalTag = document.querySelector("#personal-tag");
console.log(personalTag);
personalTag.addEventListener('change', ($event) => {
	newSpan.textContent = $event.target.value;
	});

// Accessing submitForm elemnst from the HTML.
const submitForm = document.querySelector("#submit-form");
console.log(submitForm);
submitForm.addEventListener('change', ($event) => {
	thirdDiv.textContent = $event.target.value;
});
