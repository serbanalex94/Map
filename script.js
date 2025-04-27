//import * as L from 'leaflet'

var map; const vars = {
  config : {
    minZoom: 1,
    maxZoom: 18,
    zoomControl: false,
    fullscreenControl: true,
    attribution : false,
  },
  zoom : 5,  
  ro_coords : [45.5442858, 25.9094303],

  content : {},
}


var Contract = {

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

}


var assets_db = {//for buildings and food

  'editorial action' : ['search', 'post', 'edit', 'hide', 'delete'],
  'financial action' : ['buy','sale', 'rent', 'let', 'lease', 'donate','inherit',],
  'legal action' : ['seize', 'tax', 'investigate', 'audit'],

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

  'asset media' : ['/photo1' , '/video1']
}   


const external_functions = {
  gen_Content : () => {
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

  get_Data : async () => {

  }
}


var Contract = {

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

}


var assets_db = {//for buildings and food

  'editorial action' : ['search', 'post', 'edit', 'hide', 'delete'],
  'financial action' : ['buy','sale', 'rent', 'let', 'lease', 'donate','inherit',],
  'legal action' : ['seize', 'tax', 'investigate', 'audit'],

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

  'asset media' : ['/photo1' , '/video1']
}   


const map_do = {



      add_Config : ()=>{
        map = L.map("map", vars.config).setView(vars.ro_coords, vars.zoom);
      },

    
      add_Tiles : ()=>{
       // body of the function
         //add tile layer and attribution
         L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
           attribution:
           '',
       }).addTo(map);
   
       
     },

     add_Aditional_Controls :  () =>{
       //L.control.scale({          imperial: false,        }).addTo(map);
      //L.control.zoom({          position: 'bottomright'      }).addTo(map);
         
     },

     add_WaterMark : ()=>{
          L.Control.Watermark = L.Control.extend({
            onAdd: function(map) {
                var img = L.DomUtil.create('img');
        
                img.src = './logo.png';
                img.style.width = '200px';
        
                return img;
            },
        
            onRemove: function(map) {
                
                // Nothing to do here
            }
        });
        
        L.control.watermark = function(opts) {
            return new L.Control.Watermark(opts);
        }
        
        L.control.watermark({ position: 'bottomleft' }).addTo(map);
      },

      add_Control_Layer : () => {

          var littleton = L.marker([39.61, -105.02]).bindPopup('This is Littleton, CO.'),
          denver    = L.marker([39.74, -104.99]).bindPopup('This is Denver, CO.'),
          aurora    = L.marker([39.73, -104.8]).bindPopup('This is Aurora, CO.'),
          golden    = L.marker([39.77, -105.23]).bindPopup('This is Golden, CO.');

          var cities = L.layerGroup([littleton, denver, aurora, golden]);

          var overlayMaps = {
            "Cities": cities
        };
          var layerControl = L.control.layers(overlayMaps).addTo(map);

          var crownHill = L.marker([39.75, -105.09]).bindPopup('This is Crown Hill Park.'),
            rubyHill = L.marker([39.68, -105.00]).bindPopup('This is Ruby Hill Park.');
              
          var parks = L.layerGroup([crownHill, rubyHill]);

          for (let index = 0; index < 100; index++) {
          
            layerControl.addOverlay(parks, "Parks");
          }
      },



      add_Content : () => {
        console.log(external_functions.gen_Content())
      },

      catch_eyes : () => {
        console.log('I catch EYES ')
      },


      f1 : () => {
        
      },
     
      
     
      
   }

   const activations = [
    map_do.add_Config(),
    map_do.add_Tiles() ,

   
    map_do.add_WaterMark(),
    map_do.add_Control_Layer(),
    map_do.add_Content(),
    map_do.catch_eyes(),
    
  ]




      







