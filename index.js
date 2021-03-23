window.addEventListener('load', ()=>{
    let long
    let lat

    let temperaturaDesc = document.querySelector('.temperatura-desc')
    let temperaturaGraus = document.querySelector('.temperatura-graus')
    let localFuso = document.querySelector('.local-fuso')
    let temperaturaIcon = document.querySelector('.temperatura-icon')

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
            long = position.coords.longitude
            lat = position.coords.latitude
            key = "b6970d1b9bf24622a41ec05a9913584e"

            const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${key}`

            fetch(api)
                .then(data =>{
                    return data.json()
                })
                .then(data =>{
                    console.log(data)
                    const {
                        feels_like
                    } = data.main
                    
                    const {
                        main
                    } = data.weather[0]

                    const {
                        icon
                    } = data.weather[0]

                    const icn = `http://openweathermap.org/img/wn/${icon}@2x.png`

                    //Selecionando os elementos da API
                    temperaturaGraus.textContent = parseFloat(feels_like).toFixed(1)
                    temperaturaDesc.textContent = main
                    localFuso.textContent = data.name
                    temperaturaIcon.innerHTML = `<img src="${icn}">`
                    
                })
        })
    } else {
        h1.textContent = "A aplicação não está funcionando"
    }

})
