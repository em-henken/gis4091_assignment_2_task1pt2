 require([
        "esri/Map",
        "esri/views/MapView",
        "esri/layers/FeatureLayer"
      ], function (Map, MapView, FeatureLayer) {
        var map = new Map({
          basemap: "hybrid"
        });

        var view = new MapView({
          container: "viewDiv",
          map: map,
          center: [-90.1994, 38.6270],
          zoom: 11
        });

        /********************
         * Add feature layer
         ********************/

        // Carbon storage of trees in Warren Wilson College.
   /*
        var featureLayer = new FeatureLayer({
           portalItem: {
            id: "bbdd49e10a2847a8b8018a7035bc92c7"    
          }
        });
        map.add(featureLayer);
   
   */
var featureLayer1 = new FeatureLayer({  url:"https://services2.arcgis.com/bB9Y1bGKerz1PTl5/arcgis/rest/services/Depression_Prevalence/FeatureServer"
})
var featureLayer2 = new FeatureLayer({    url:"https://services2.arcgis.com/bB9Y1bGKerz1PTl5/arcgis/rest/services/STL_City_Crime01_WFL1/FeatureServer"
})
        map.add(featureLayer1);
        map.add(featureLayer2);
});
