const link = document.querySelector('link[rel="monetization"]')

let total = 0
let scale

link.addEventListener("monetization", (e) => {
    // Display to user if monetization is on
    const monetizationDisplay = document.getElementById("monetization-info")
    monetizationDisplay.textContent = "Monetized"
    monetizationDisplay.classList.add("monetized")
    monetizationDisplay.classList.remove("not-monetized")

    // Show exclusive content to the user if monetization is on
    document.getElementById("exclusive").classList.remove("hidden")

    // Implement micropayment counter and display it to our user
    const { amount, assetCode, assetScale } = e

    if (total === 0) {
        scale = assetScale
        document.getElementById("currency").innerText = assetCode
    }
    total += Number(amount)
    const formattedTotal = (total * Math.pow(10, -scale)).toFixed(scale)
    document.getElementById("total").innerText = formattedTotal
})

