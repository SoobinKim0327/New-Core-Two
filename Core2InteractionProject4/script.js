fetch('https://api.airtable.com/v0/app0N9EVoBH7fZmuX/Archive%20', {
	headers: {
		Authorization: 'Bearer keyzguztwclOXCof1',
	},
})
.then(response=>response.json())
.then(data => {
	console.log(data);

	const VintageContainer = document.querySelector('.Vintage-container');
const randomNum = Math.round(Math.random() * data.records.length -1);
const randomItem = data.records[randomNum];

		VintageContainer.innerHTML += `
<div class="vintage">
<div class="text">
	<h5>${randomItem.fields.Year}</h5>
	<h3>${randomItem.fields.Title}</h3>
	</div>
	<img src="${data.records[randomNum].fields.Assets[0].thumbnails.large.url}" width="250"/>
</div>

	`;

});

const soldImage = document.querySelector('.sold-image')

function refreshPage(){
      window.location.reload()
  }
   function isInputNumber(){
                
                // var ch = String.fromCharCode(evt.which);
                
                // if(!(/[0-9]/.test(ch))){
                //     evt.preventDefault();
                //       }
                  if (event.keyCode === 13) {
         soldImage.classList.remove('hidden')
      }
                
            }