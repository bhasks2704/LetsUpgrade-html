var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (xhr.readyState == 4 && xhr.status == 200) {
    //data is available
    // var data = xhr.responseText;//gets raw data
    var data = JSON.parse(xhr.responseText);
    console.log(data); // displays in console

    //apply loop to get data
    for (var i = 0; i < data.length; i++) {
      if (data[i].name.common === "India") {
        console.log(`Country Name -> ${data[i].name.common}`); // displays in console
        console.log(`Currency Name ->${data[i].currencies.INR.name}`);
        console.log(`Capital->${data[i].capital}`);
        console.log(`Region ->${data[i].region}`); // displays
        console.log(
          `Language -> ${data[i].languages.eng},${data[i].languages.hin},${data[i].languages.tam}`
        );
        console.log(`Population : ${data[i].population}`);
        console.log(`Flag URL : ${data[i].flags.png}`);
      }
    }
  }
};

// open a method
xhr.open("GET", "https://restcountries.com/v3.1/all");
xhr.send();
