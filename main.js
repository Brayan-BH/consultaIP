const OPTIONS = {
	method: 'GET',
		headers: {
		'X-RapidAPI-Key': 'dd631e665bmshd0f530eabea76a2p198bd2jsnfd56c53d3693',
		'X-RapidAPI-Host': 'ip-geolocation-and-threat-detection.p.rapidapi.com'
	}
}

const fetchIpInfo = ip => {
  return fetch(`https://ip-geolocation-and-threat-detection.p.rapidapi.com/${ip}`, OPTIONS)
  .then(res => res.json())
  .catch(err => console.error(err))

}
//Jquery
const $ = selector => document.querySelector(selector)

const $form = $('#form')
const $input = $('#input') 
const $submit = $('#submit')
const $results = $('#results')

$form.addEventListener('submit', async (event) => {
  event.preventDefault()
  const {value} = $input

  if(!value) return

  $submit.setAttribute('disabled','')
  $submit.setAttribute('aria-busy','true')

  const ipInfo = await fetchIpInfo(value)

  if(ipInfo){

    $results.innerHTML = JSON.stringify(ipInfo, null, 2)
  }

  $submit.removeAttribute('disabled')
  $submit.removeAttribute('aria-busy')

})
