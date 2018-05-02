
var map = L.map('map', {
  center: [40.000, -75.1090],
  zoom: 11
});

var Stamen_TonerLite = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
}).addTo(map);

var heatDataset = "https://raw.githubusercontent.com/YixiaoSun/Final/master/data";

var featureGroup;

var myStyle = function(feature) {
    switch (feature.properties.LEVEL){
      case 1:
      return {fillColor:'#E9F7EF',
              color:'white',
              weight:'2px',
              fillOpacity:'0.4'};
      case 2:
      return {fillColor:'#A9DFBF',
               color:'white',
               weight:'2px',
               fillOpacity:'0.4'};
      case 3:
      return {fillColor:'#52BE80',
               color:'white',
               weight:'2px',
               fillOpacity:'0.4'};
      case 4:
      return {fillColor:'#1E8449',
               color:'white',
               weight:'2px',
               fillOpacity:'0.4'};
      case 5:
      return {fillColor:'#145A32',
               color:'white',
               weight:'2px',
               fillOpacity:'0.4'};
      }
    };



function getColor(d) {
    return d > 2.77 ? '#800026' :
           d > 0  ? '#BD0026' :
           d > -1.48  ? '#E31A1C' :
           d > -3.3  ? '#FC4E2A' :
           d > -7.46   ? '#FD8D3C' :
                      '#FFEDA0';
}

var heatStyle = function style(feature) {
    return {
        fillColor: getColor(feature.properties.TempLevel),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
};


var heatFilter = function(feature){
  return true;
};

$(document).ready(function(){
  $.ajax(heatDataset).done(function(data){
    var parsedData = JSON.parse(data);
    console.log(parsedData);
    featureGroup = L.geoJson(parsedData, {
      style: heatStyle,
      filter: heatFilter
    }).addTo(map);
    console.log(featureGroup);
  });
});
