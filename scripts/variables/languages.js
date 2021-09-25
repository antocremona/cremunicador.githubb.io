//Idiomas disponibles en la API
const languages = ["an","ar","bg","br","ca","de","el","en","es","et","eu","fa","fr","gl","he","hr","hu","it","ko","mk","nl","pl","pt","ro","ru","sk","sq","sv","sr","val","zh"]

const listLang = document.getElementById('langList')

languages.forEach( (lan) => {
    listLang.innerHTML +=
    `<option value=${lan}>${lan}</option>`
});