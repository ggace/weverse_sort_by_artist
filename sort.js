function view_by_artist(search_artist){
	let lives = document.querySelectorAll("[class ^= 'LiveListView_live_item']");

	for(let live of lives) {
		let owner = live.querySelector("[class ^= 'RelatedProductItemView_artist_wrap']").innerText;
		if (!(owner.includes(search_artist))){
			live.style.display = "none";
		}
	}
}

function main() {
	if(window.location.hostname != "weverse.io"){
		alert("위버스 페이지가 아닙니다.")
		return;
	}
    
    var artist = prompt("원하시는 아티스트 명을 입력해주세요")
	view_by_artist(artist)

	document.onscroll = () => {
		view_by_artist(artist)
	}
}


main()

