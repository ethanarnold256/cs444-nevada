counties = nevada.getElementsByTagName("path");
title = document.getElementById("title");
area = document.getElementById("area");
population = document.getElementById("population");
established = document.getElementById("established");;

function countyClick(county) {
    county.classList.add("been-to");
    id = county.id;
    object = data[id];
    title.innerText = id.replace("_", " ") + ", Nevada";
    area.innerText = object["area"];
    population.innerText = object["pop"];
    established.innerText = object["est"];
    
}

for(county in counties) {
    counties[county].onclick = function(){countyClick(this)}
}