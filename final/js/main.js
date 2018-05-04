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

var heatDataSet = "https://raw.githubusercontent.com/YixiaoSun/Final/master/data";

var featureGroup;
var heatNumber = 0;

var heatStyle = function(feature) {
    switch (feature.properties.LEVEL){
      case 1:
      return {fillColor:'#47A09C',
              weight: 0.2,
              opacity: 1,
              color: 'white',
              dashArray: '3',
              fillOpacity: 0.4};
      case 2:
      return {fillColor:'#A8DF90',
              weight: 0.2,
              opacity: 1,
              color: 'white',
              dashArray: '3',
              fillOpacity: 0.4};
      case 3:
      return {fillColor:'#E6F791',
              weight: 0.2,
              opacity: 1,
              color: 'white',
              dashArray: '3',
              fillOpacity: 0.4};
      case 4:
      return {fillColor:'#FBB45E',
              weight: 0.2,
              opacity: 1,
              color: 'white',
              dashArray: '3',
              fillOpacity: 0.4};
      case 5:
      return {fillColor:'#D5363B',
              weight: 0.2,
              opacity: 1,
              color: 'white',
              dashArray: '3',
              fillOpacity: 0.4};
      }
    };
var heatFilter = function(feature){
  if (feature.properties.LEVEL===" "){
        return false;
      }
      else{
        return true;
      }
};

//Add information
//Round number
precisionRound = function(number, precision) {
  var hunTimes = number*100;
  var newHunTimes = Math.round(hunTimes);
  var newNum = newHunTimes/100;
  return newNum;

};

var infoHeat = function(layer) {
  layer.on('click', function (event) {
    console.log("CLICK");
    var display1;
    var display2;
    var display3;
    display1= layer.feature.properties.GEOID;
    display2= precisionRound(layer.feature.properties.GAP, 4);
    display3= layer.feature.properties.LEVEL;
    $(".BG-ID").text(display1);
    $(".Temp-Gap").text(display2);
    $(".Temp-Level").text(display3);
    console.log(display2);
  });
};



//Download data and others
$(document).ready(function(){
  $.ajax(heatDataSet).done(function(data){
    //Click the heatmap button
      $(".sidebar .heatmap .btn").click(function(e){
        heatNumber = heatNumber+1;
        console.log(heatNumber%2);
        //Render the heat map
        if (heatNumber%2 === 1){
          var parsedData = JSON.parse(data);
          console.log(parsedData);
          //Add color
          featureGroup = L.geoJson(parsedData, {
            style: heatStyle,
            filter: heatFilter
          }).addTo(map);
        console.log(featureGroup);
        //Show legends
        $().hide();
      }
    });
  });
});



/*

        //Add information
        featureGroup.eachLayer(infoHeat);
      }
    else{
        //Remove layers
        map.removeLayer(featuerGroup);
        //Hide legends
        $().hide();
    }
  });
  });
});
*/
