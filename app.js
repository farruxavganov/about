const contentWrapper = document.querySelector(".content__wrapper");
const about = contentWrapper.querySelectorAll(".about");

contentWrapper.addEventListener("click", function(e) {
	let target = e.target.dataset.id;
	let classs = e.target.classList[0];
	if(classs == "btn"){
		let element = contentWrapper.querySelectorAll("." + classs);
		element.forEach(item => {
			item.classList.remove("active");
		})
		e.target.classList.add("active");
	}
	about.forEach(item => {
		if(item.id === target){
			item.classList.add("active");
		}else{
			item.classList.remove("active");
		}
	})
})