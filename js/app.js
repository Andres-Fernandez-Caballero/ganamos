document.getElementById('call-to-action-btn')
    .addEventListener('click',(event) => {
        const phone = "+5491122575891"
        const message = "Hola, quiero hacerme una cuenta en 'Ganamos'"
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
    
        window.location.href = url;
 })
 