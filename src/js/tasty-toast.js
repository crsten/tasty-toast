;(function(){
	if(!window.Tasty) window.Tasty = {};

	function Notification(optInput){
		let element;
		let countdown;
		let defaults = {
			type: '',
			icon: '',
			title: 'Hey there!',
			content: `You forgot to fill out the content.`,
			duration: 6000,
			onclick: null
		};
		let options = defaults;
	  let timeout = null;
		let type_check = /^(error|success|primary|secondary)$/ig;
		let icon_check = /^/

		for(let key in optInput) {
			if(key in defaults) options[key] = optInput[key];
		}

		function build(){
			element = document.createElement('div');
			element.classList.add('tasty-toast');

			if(type_check.test(options.type)) element.classList.add(`tasty-toast-${options.type}`)

			element.innerHTML = `
				<div class="tasty-toast-container">
					${(options.icon) ? `<div class="tasty-toast-icon" style="background-image:url('${options.icon}')"></div>` : '<div class="tasty-toast-icon tasty-toast-pulse"></div>'}
					<div>
						<h1>${options.title}</h1>
						<div>${options.content}</div>
					</div>
				</div>
			`;

			element.addEventListener('click',hide);
			element.addEventListener('mouseover',resetHide);
			element.addEventListener('mouseout',startHide.bind(null,Math.max(2000)));
			if(typeof options.onclick == 'function') element.addEventListener('click',options.onclick)
		}

	  function show(){
			let bucket = document.querySelector('.tasty-toast-bucket');
			if(!bucket) {
				bucket = document.createElement('div');
				bucket.classList.add('tasty-toast-bucket');
				document.body.appendChild(bucket);
			}
	    bucket.appendChild(element);
			startHide(options.duration);
	  }

		function resetHide() {
			clearTimeout(timeout);
			element.removeChild(countdown);
		}

		function startHide(duration){
			countdown = document.createElement('div');
			countdown.classList.add('tasty-toast-timeout');
			countdown.setAttribute('style',`animation-duration: ${duration}ms`)
			element.appendChild(countdown);
			timeout = setTimeout(hide,duration);
		}

	  function hide(){
			let bucket = document.querySelector('.tasty-toast-bucket');
			bucket.removeChild(element);

			if(!bucket.children.length) {
				document.body.removeChild(bucket);
			}
	  }

		build();
	  show();
	};

	window.Tasty.Notification = window.Tasty.Toast = Notification;
})();
