(async () => {
    const tableHum = document.getElementById('humstr')
    const tableTemp = document.getElementById('temstr')
    const tablePersons = document.getElementById('persons')
    const tableGas = document.getElementById('gas')
    let result = await fetch('http://65.108.80.76/arduino/sensors/')
    let json = await result.json()
    tableHum.textContent = ` Humidity: ${json.hum} %`
    tableTemp.textContent = ` Temperature: ${json.tem} °C`
    tablePersons.textContent = ` Persons in the room: ${json.currentPeople}`
    tableGas.textContent = ` CO2: ${json.mq7}`
})()
