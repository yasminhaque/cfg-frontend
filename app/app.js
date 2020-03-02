function loadData() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://api.worldbank.org/v2/country/br?format=json", true);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText)
            createTable(response[1][0])
        }
    };

}


function createTable(data) {
    for (var key in data) {
        var value = data[key]
        var th = document.createElement('th')
        var td = document.createElement('tbody')
        th.innerText = key
        td.innerText = value
        document.body.appendChild(th)
        document.body.appendChild(td)
    }
}