window.onload = function() {
    const day = document.querySelector('.days')
    const hour = document.querySelector('.hours')
    const minute = document.querySelector('.minutes')
    const second = document.querySelector('.seconds')

    const startDate = new Date(2023, 7, 23)


    function setDate() {
        const today = new Date()
        const ms = (today - startDate) % 86400000

        day.innerText = Math.floor((new Date - startDate)/86400000) + ' days'

        hour.innerText = Math.floor(ms/3600000)
        if(Math.floor(ms/3600000) < 10) {
            hour.innerText = '0' + Math.floor(ms/3600000)
        }
        minute.innerText = Math.floor(ms % 3600000 / 60000)
        if(Math.floor(ms % 3600000 / 60000) < 10) {
            minute.innerText = '0' + Math.floor(ms % 3600000 / 60000)
        }
        second.innerText = Math.floor(ms % 3600000 % 60000 / 1000)
        if(Math.floor(ms % 3600000 % 60000 / 1000) < 10) {
            second.innerText = '0' + Math.floor(ms % 3600000 % 60000 / 1000)
        }
    }

    setInterval(setDate, 1000);

}