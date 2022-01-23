(async () => {
    const headerh = document.getElementById('humstr')
    const headert = document.getElementById('temstr')
    let result = await fetch('http://65.108.80.76/arduino/sensors/')
    let json = await result.json()
    headerh.textContent = `Humidity: ${json.hum} % | `
    headert.textContent = ` | Temperature: ${json.tem} °C`
})()
