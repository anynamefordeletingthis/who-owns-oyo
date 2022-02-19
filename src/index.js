


// hard coded data
var shares = {
    "Softbank": 46.62,
    "RA Hospitality Holdings": 24.94,
    "ESOP Trust": 5.41,
    "Sequoia Capital": 3.24,
    "Lightspeed": 2.74,
    "AirBnB Inc": 1.36,
    "Ritesh Agarwal": 8.21,
    "Others": 7.48,
}



var random_color = () => {
    return `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, .9)`;
}

// color against each owner
var share_colors = [];


Object.keys(shares).forEach((share, index) => {
    share_colors[index] = random_color();
});


// set pie chart data
var pie_chart = window.document.querySelectorAll(".pie-chart")[0];

var shares_colors = "";
var of_total_share = 0;

Object.keys(shares).forEach((share, index) => {

    console.log(of_total_share, shares[share])

    shares_colors += `${share_colors[index]} ${of_total_share}% ${of_total_share + shares[share]}%, `

    of_total_share += shares[share];

});

pie_chart.style.background = `
    conic-gradient(from 0deg at 50%, ${shares_colors} orange)
    `

// set flags


var flags = window.document.querySelectorAll(".flags")[0];


Object.keys(shares).forEach((share, index) => {

    var tempDiv = window.document.createElement("div");
    tempDiv.classList.add("flag");

    var tempDiv2 = window.document.createElement("div");
    tempDiv2.classList.add("flag-color");
    tempDiv2.style.background = share_colors[index]

    var tempSpan = window.document.createElement("span");
    tempSpan.innerText = share + " " + shares[share] + "%";
    tempSpan.classList.add("flag-label")

    tempDiv.append(tempDiv2)
    tempDiv.append(tempSpan)
    flags.append(tempDiv);

})





