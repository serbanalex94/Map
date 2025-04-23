

// index.js

var map;

var vars = {
  config: {
    minZoom: 1,
    maxZoom: 18,
    zoomControl: false,
    fullscreenControl: true,
    attribution: false
  },
  zoom: 5,
  ro_coords: [45.5442858, 25.9094303],
  content: {}
};


var external_functions = {
  gen_Content: () => {
    return {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [125.6, 10.1]
      },
      properties: {
        name: "Dinagat Islands"
      }
    };
  },
  get_Data: async () => {}
};


var map_do = {
  add_Config: () => {
    map = L.map("map", vars.config).setView(vars.ro_coords, vars.zoom);
  },

  add_Tiles: () => {
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: ""
    }).addTo(map);
  },
  add_Aditional_Controls: () => {},
  add_WaterMark: () => {
    L.Control.Watermark = L.Control.extend({
      onAdd: function(map) {
        var img = L.DomUtil.create("img");
        img.src = "./logo.png";
        img.style.width = "200px";
        return img;
      },
      onRemove: function(map) {}
    });
    L.control.watermark = function(opts) {
      return new L.Control.Watermark(opts);
    };
    L.control.watermark({ position: "bottomleft" }).addTo(map);
  },
  add_Control_Layer: () => {
    var littleton = L.marker([39.61, -105.02]).bindPopup("This is Littleton, CO."), denver = L.marker([39.74, -104.99]).bindPopup("This is Denver, CO."), aurora = L.marker([39.73, -104.8]).bindPopup("This is Aurora, CO."), golden = L.marker([39.77, -105.23]).bindPopup("This is Golden, CO.");
    var cities = L.layerGroup([littleton, denver, aurora, golden]);
    var overlayMaps = {
      Cities: cities
    };
    var layerControl = L.control.layers(overlayMaps).addTo(map);
    var crownHill = L.marker([39.75, -105.09]).bindPopup("This is Crown Hill Park."), rubyHill = L.marker([39.68, -105]).bindPopup("This is Ruby Hill Park.");
    var parks = L.layerGroup([crownHill, rubyHill]);
    for (let index = 0;index < 100; index++) {
      layerControl.addOverlay(parks, "Parks");
    }
  },
  add_Content: () => {
    console.log(external_functions.gen_Content());
  },
  catch_eyes: () => {
    console.log("I catch EYES");
  },
  f1: () => {}
};


var activations = [
  map_do.add_Config(),
  map_do.add_Tiles(),
  map_do.add_WaterMark(),
  map_do.add_Control_Layer(),
  map_do.add_Content(),
  map_do.catch_eyes()
];
