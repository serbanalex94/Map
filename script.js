//import * as L from 'leaflet'

//TO COMMIT


var global = {
  map : {
    map_object : null,

    config : {
      minZoom: 1,
      maxZoom: 18,
      zoomControl: false,
      fullscreenControl: true,
      attribution : false,
    },
    
    zoom : 5,  
    ro_coords : [45.5442858, 25.9094303],
    
    add_Config : (map)=>{
      map.map_object = L.map("map", map.config).setView(map.ro_coords, map.zoom);
    },

  
    add_Tiles : (map_object)=>{
    // body of the function
      //add tile layer and attribution
      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
        '',
    }).addTo(map_object);

    
  },

  add_Aditional_Controls :  (map_object) =>{
    //L.control.scale({          imperial: false,        }).addTo(map);
    //L.control.zoom({          position: 'bottomright'      }).addTo(map);
      
  },
  
  add_WaterMark : (map_object)=>{
        L.Control.Watermark = L.Control.extend({

          onAdd: function(map_object) {
              var img = L.DomUtil.create('img');
      
              img.src = './logo.png';
              img.style.width = '200px';
      
              return img;
          },
      
          onRemove: function(map_object) {
              
              // Nothing to do here
          }
      });
      
      L.control.watermark = function(opts) {
          return new L.Control.Watermark(opts);
      }
      
      L.control.watermark({ position: 'bottomleft' }).addTo(map_object);
    },

    add_Control_Layer : (map_object) => {

        var littleton = L.marker([39.61, -105.02]).bindPopup('This is Littleton, CO.'),
        denver    = L.marker([39.74, -104.99]).bindPopup('This is Denver, CO.'),
        aurora    = L.marker([39.73, -104.8]).bindPopup('This is Aurora, CO.'),
        golden    = L.marker([39.77, -105.23]).bindPopup('This is Golden, CO.');

        var cities = L.layerGroup([littleton, denver, aurora, golden]);

        var overlayMaps = {
          "Cities": cities
      };
        var layerControl = L.control.layers(overlayMaps).addTo(map_object);

        var crownHill = L.marker([39.75, -105.09]).bindPopup('This is Crown Hill Park.'),
          rubyHill = L.marker([39.68, -105.00]).bindPopup('This is Ruby Hill Park.');
            
        var parks = L.layerGroup([crownHill, rubyHill]);

        for (let index = 0; index < 100; index++) {
        
          layerControl.addOverlay(parks, "Parks");
        }
    },



    add_Content : (map_object) => {
      console.log()
    },

  

  




  },

DB : {//for buildings and food

  Field_Values_dictionary : {  //possible fields values
     1 : ['search', 'post', 'edit', 'hide', 'delete'],
      2 : ['buy','sale', 'rent', 'let', 'lease', 'donate','inherit',],
      3 : ['seize', 'tax', 'investigate', 'audit'],

      100 : [], //emoji codes

  },

  Offer_Fields_dictionary : { //  Optional ? for intenal use ? Log/Audit ?
    1: 'editorial action',
    2: 'financial action',
    3: 'legal action',
    
    100 : 'emoji code',
    101 : 'emoji fade',
    102 : 'emoji saturation',
    103 : 'emoji size',

    200 : 'Coords',
  },


  Offers : [    //sparse vectors represented as dictioanries (user receive an object with offers with is a vector with offer, each offer is a dictionary with field_key:value)
    { //example
      1:[1, 2, 4],    
      2:[1,2,3], 
      3:[1],
    },  //so this offer will be editorial action : search, post, edit ; financial action : buy, sale, rent ; legal action : seize
   
    //? 

  ],


  DB : //to disolve
   {
  'role' : ['buyer', 'seller', 'owner','agent', 'agency', 'authority', 'lawyer', 'administrator', 'contractor', 'investigator', 'prosecutor' ],
  'organisation type' : ['individual', 'legal person', 'natural person', 'family', ],
  

  
  'price' : 100,
  'curency code' : '',    //USD ,RON, EUR
  'payment mean' : ['cash', 'exchange', 'bank tranfer'],
  'payment frequency' : ['one time', 'per year', 'per month', 'per week', 'per day', 'per hour', 'per 100g', 'per unit'],

  
  /*'specifications' : {
      'name' : '',
      'description' : '',
  
      'weight' : [],
      'quantity' : [],
      'density' : [],
      'viscosity' : 10,
      'smell' : '',
      'color code' : '',   
      'origin' : ''
  },
  */


  
  //geojson
  'addresses' : [],
  'coordinates sets' : [[1,2], [1,2]],
  'postal codes' : [],

  'asset classification' : ['house', 'apartment', 'studio', 'hotel', 'hotel room', 'land', 'office building', 'office space', 'restaurant', 'bar', 'coffe shop', 'ship', 'plane', 'comapany' ],

  'asset scope' : ['residential', 'industrial', 'commercial', 'hospitality', 'social','strategic'],
  'asset status' : ['in developemnt','in construction', 'parked', 'under investigation','stolen', 'arested', 'in transit', 'delivered', 'destroyed'],
  'condition' : ['new', 'unfinished', 'project', 'in construction', 'in renovation', 'needs renovation', 'needs domolition', 'in demolition','damaged'], //
  
  'asset type' : ['movable', 'immovable', 'hard/phiscal' , 'soft/non-palpable'],   //soft inetelctual proeprty rights
  'risks' : ['environment', 'sanction', 'tariff', 'seizure', 'flood', 'theft'],    
  'taxes' : [],

  'insurance' : [],
  'asset media' : ['/photo1' , '/video1'],

  Contract : {

    'ID' : '',
    'Date' : '',
    'Name' : '',
  
  
    'Comfort Factors' : ['Temperature', 'Humidity', 'UV Exposure', 'Smell', 'Water Polution', 'Air Polution', 'Safe to Walk on Streets'], 
    'Payment Ammount' : '',
    'Currency'  : '',
    'Payment Method' : ['cash', 'bank tran sfer', 'vouch'],
    'Payment Reccurency' : ['year','month','week','day','hour'],
     
    'Asset Type' : ['House', 'Appartment', 'Office', 'Bar', 'Restaurant', 'Land', 'Deposit', 'Road', 'Building', 'Land', 'Car', 'Organisation', 'Plane', 'Ship', 'Heavy Equipment'],
    'Action Editorial' : ['Search','Add','Edit','Hide','Delete',],
    'Action Legal' : ['Tax','Investigate','Sting','Seize','Tariff','Arrest','Prosecute'],
    'Action Financial' : ['Buy','Sell','Lease','Borrow','Lend','Invest',],
  
   
    'Organisation' : ['Natural person', 'Family Office','Non profit', 'Not for profit', 'Limited Liability Corporation', 'Non Governmental Organisation' ],
    
    'Status' : ['Active', 'Available', 'On Hold', 'Stopped', 'Closed', 'Disputed', 'Live ','Under Construction', 'Frozen', ' '],
    'Role' : ['Buyer', 'Seller', 'Inspector', 'Authority', 'Prosecutor', 'Broker', 'Faker', 'Client',],
    'Scope' : ['Movable', 'Immovable', 'Residential', 'Commercial', 'Social', 'Protected',  'Strategic', ],
  
    'Bindings' : ['to', 'from', 'with', 'and', 'or', 'per', 'in'],
  
  },  


  },


    //ASTEA 3 TREBUIE SA FIE TOATE INTR_UNA
  security_Offer_obfuscator :  ()=>{}, // 

  match_Offer : (Offers_vector)=>{   // ? ce primeste ca paramestru ? trebuie sa fie un elastic match
  },
  generator_Offer : () => {   //combinator A.I de oferte
    return {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [125.6, 10.1]
      },
      "properties": {
        "name": "Dinagat Islands"
      }
    }
  },

  sync_Offers : async () => {  //network server

  },
},
}





    

 const activations = [
  
  global.map.add_Config(global.map),
  global.map.add_Tiles(global.map.map_object) ,

  
  global.map.add_WaterMark(global.map.map_object),
  global.map.add_Control_Layer(global.map.map_object),
  global.map.add_Content(global.map.map_object),

]




    







