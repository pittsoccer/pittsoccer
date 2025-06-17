// doc read function
document.addEventListener("DOMContentLoaded", () => {
  // Document is ready
  console.log("hello console!");
  addExampleBlogEntry();
  setStandardCookie();
  displayUserProfile();
});

function addExampleBlogEntry() {
	const blogEntries = document.getElementById("blog-entries");
	if (blogEntries) {
		const entry = document.createElement("div");
		entry.className = "blog-entry";
		entry.innerHTML = `
			<h5><i class="bi bi-pencil-square"></i> dynamic mutated dom Blog Entry</h5>
			<p>This is an example blog entry added when the page loads</p>
		`
			
		blogEntries.append(entry);
	}
}

function setStandardCookie() {
}

function displayUserProfile() {
}
