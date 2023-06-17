var sec01 = document.getElementById('sec01');

console.log(sec01);

window.onscroll = function(){
	var img = document.getElementById('Sec02Img');
	var position = img.getBoundClientRect();
	if(position.bottom < window.inner.Heigth){
		console.log('ảnh đã nằm trong viewport');
		img.style.left = '30vw'
	}
	else{
		console.log('ảnh đã nằm trong viewport');
		img.style.left = '100vw'
	}
}