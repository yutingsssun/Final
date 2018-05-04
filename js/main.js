var heatDataset = "https://raw.githubusercontent.com/YixiaoSun/Final/master/data";

var featureGroup;

/*var heatStyle = function(feature) {
  for (var i=0; i<375; i++){
      if (-7.46<feature[i].properties.TempLevel<-3.31){
        return {fillColor:'#E9F7EF',
                color:'white',
                weight:'2px',
                fillOpacity:'0.4'};
      }
      else if (-3.3<feature[i].properties.TempLevel<-1.49) {
        return {fillColor:'#A9DFBF',
                 color:'white',
                 weight:'2px',
                 fillOpacity:'0.4'};
      }
      else if (-1.48<feature[i].properties.TempLevel<0) {
        return {fillColor:'#52BE80',
                 color:'white',
                 weight:'2px',
                 fillOpacity:'0.4'};
      }
      else if (0.01<feature[i].properties.TempLevel<2.76){
        return {fillColor:'#1E8449',
                 color:'white',
                 weight:'2px',
                 fillOpacity:'0.4'};
      }
      else if (2.77<feature[i].properties.TempLevel<5.15){
        return {fillColor:'#145A32',
                 color:'white',
                 weight:'2px',
                 fillOpacity:'0.4'};
      }
    }
};
*/

var Style = function(){
  return {fillColor:'#145A32',
           color:'white',
           weight:'2px',
           fillOpacity:'0.4'};
};

var heatFilter = function(feature){
  return true;
};

$(document).ready(function(){
  $.ajax(heatDataset).done(function(data){
    var parsedData = JSON.parse(data);
    console.log(parsedData);
    featureGroup = L.geoJson(parsedData, {
      style: Style,
      filter: heatFilter
    }).addTo(map);
    console.log(featureGroup);
  });
});
