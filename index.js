let liArr = document.querySelectorAll('li');
let input = document.querySelector('input');
let spans = document.querySelectorAll('span');

input.addEventListener('keypress', function(event){
	if(event.key==='Enter' && input.value !== ''){
		let ul= document.querySelector('ul');	
		let li = document.createElement('li');
		let span = document.createElement('span');
		let node = document.createTextNode('X');
		span.appendChild(node);
		span.classList.add('delete');
		span.addEventListener('click', function(){
			span.parentElement.remove();
		})
		let textNode = document.createTextNode(input.value);
		li.appendChild(span);
		li.appendChild(textNode);
		li.addEventListener('click',function(){
			li.classList.toggle('done');
		})
		ul.appendChild(li);
		input.value = '';
	}
})

for(let i = 0 ; i< liArr.length ; i++){
	liArr[i].addEventListener('click', function(){
		liArr[i].classList.toggle('done');
	})
for(let i = 0 ; i<spans.length; i++){
	let parentElement = spans[i].parentElement;
	spans[i].addEventListener('click',function(){
		spans[i].parentElement.remove();
	})
}
}