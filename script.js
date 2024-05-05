var data = fetch("https://restcountries.com/v3.1/all");
data.then((res) => res.json())
    .then((res1) => foo(res1));

var container = document.createElement("div");
container.className = "container";
container.style.backgroundColor ="lightblue";
var row = document.createElement("div")
row.className = "row";

// var col = document.createElement("div");
// col.className = "col-md-4"; // problem here was we are creating one column but we have to create  3 columns so we will put it intto loop

function foo(res1) {
    for (var i = 0; i < res1.length; i++) {
        var col = document.createElement("div");
        col.className = "col-md-4";
        col.innerHTML = `<div class="card" style="width: 20rem; margin-left:2rem;background-color:beige">
        <div class="card-header text-center" style="background-color:black;color:white;">${res1[i].name.common}</div>
        <img src="${res1[i].flags.png}" class="card-img-top" alt="..." style="margin:0px 0px 0px 35px;height:80%;width:80%;align-items:center">
        <div class="card-body">
          <p class="card-title text-center">Capital : ${res1[i].capital}</p>
          <p class="card-title text-center">Region : ${res1[i].region}</p>
          <p class="card-title text-center">Country Code : ${res1[i].cioc}</p>
          
         
        </div>
      </div>`;
        row.append(col);
        container.append(row);
        document.body.append(container);
    }
}

















