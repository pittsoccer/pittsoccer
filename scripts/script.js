// doc read function
document.addEventListener("DOMContentLoaded", () => {
	// Document is ready
	console.log("hello console!");
	addExampleBlogEntry();
	setStandardCookie();
	displayUserProfile();
});

// load blog posts from JSON using jQuery AJAX
$.ajax({
	url: "https://pittsoccer.github.io/DevBlogData//posts.json",
	dataType: "json",
	success: function (data) {
		const blogContainer = $("#blog-entries");
		blogContainer.empty(); // clear any existing entries

		// loop through posts array and add each post dynamically
		$.each(data.posts, function (index, post) {
			const entry = `
				<div class="card shadow-sm blog-entry">
					<div class="card-body">
						<h5 class="card-title">${post.title}</h5>
						<p class="card-text">${post.post}</p>
						<p class="card-text"><small class="text-muted">Posted on ${post.date}</small></p>
					</div>
				</div>
				`;
			blogContainer.append(entry);
		});
	},
	error: function () {
		console.error("Failed to load blog posts.");
	}
});

function addExampleBlogEntry() {
	const blogEntries = document.getElementById("blog-entries");
	if (blogEntries) {
		const entry = document.createElement("div");
		entry.className = "blog-entry";
		entry.innerHTML = `
				< h5 > <i class="bi bi-pencil-square"></i> dynamic mutated dom Blog Entry</h5>
					<p>This is an example blog entry added when the page loads</p>
			`

		blogEntries.append(entry);
	}
}

function setStandardCookie() {
}

function displayUserProfile() {
}
