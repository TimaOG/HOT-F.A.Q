let menuicn = document.querySelector(".menuicn");
let nav = document.querySelector(".navcontainer");

menuicn.addEventListener("click", () => {
	nav.classList.toggle("navclose");
})

function loadPage(page) {
	switch (page) {
		case 'main':
			break
		case 'faq':
			loadFaq()
			break
		case 'survey':
			break
		case 'users':
			break
		case 'analize':
			break
		case 'settings':
			break
	}
}