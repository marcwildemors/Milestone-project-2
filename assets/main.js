const baseURL = "http://cdn.knmi.nl/knmi/map/page/seismologie/all_tectonic.json";

function getData(data, cb) {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        }
    };

    xhr.open("GET", baseURL + data + "/");
    xhr.send();
}

function writeToDocument(data) {
    getData(data, function(data) {
        console.dir(data);
        document.getElementById("data").innerHTML = data;
    });
}