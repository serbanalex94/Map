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

      'role' : ['buyer', 'seller', 'owner','agent', 'agency', 'authority', 'lawyer', 'administrator', 'contractor', 'investigator', 'prosecutor' ],
      'organisation type' : ['individual', 'legal person', 'natural person', 'family', ],
      
    
    },


    Offer_Fields_dictionary : { //  Optional ? for intenal use ? Log/Audit ?
      0 : '',
      1 : '',
      2 : '',
      3 : '',
      4 : '',
      5 : '',
      6 : '',
      7 : '',
      8 : '',
      9 : '',

      'Bindings' : ['to', 'from', 'with', 'and', 'or', 'per', 'in'],
      
      




      10 : 'Asset ',    // if not enough fields use 1010..1919
      11 : 'Asset',
      12 : 'Asset',
      13 : 'Asset',
      14 : 'Asset',
      15 : 'Asset',
      16 : 'Asset',
      17 : 'Asset',
      18 : 'Asset',
      19 : 'Asset',

    'Asset Type' : ['House', 'Appartment', 'Office', 'Bar', 'Restaurant', 'Land', 'Deposit', 'Road', 'Building', 'Land', 'Car', 'Organisation', 'Plane', 'Ship', 'Heavy Equipment'],
    'asset classification' : ['house', 'apartment', 'studio', 'hotel', 'hotel room', 'land', 'office building', 'office space', 'restaurant', 'bar', 'coffe shop', 'ship', 'plane', 'comapany' ],
    'asset scope' : ['residential', 'industrial', 'commercial', 'hospitality', 'social','strategic'],
    'asset status' : ['in developemnt','in construction', 'parked', 'under investigation','stolen', 'arested', 'in transit', 'delivered', 'destroyed'],
    'condition' : ['new', 'unfinished', 'project', 'in construction', 'in renovation', 'needs renovation', 'needs domolition', 'in demolition','damaged'], //
    'asset type' : ['movable', 'immovable', 'hard/phiscal' , 'soft/non-palpable'],   //soft inetelctual proeprty rights
    'asset media' : ['/photo1' , '/video1'],

      
      20 : 'Action',   
      21 : '',
      22 : '',
      23 : '',
      24 : '',
      25 : '',
      26 : '',
      27 : '',
      28 : '',
      29 : '',
      
      'Action Editorial' : ['Search','Add','Edit','Hide','Delete',],
      'Action Legal' : ['Tax','Investigate','Sting','Seize','Tariff','Arrest','Prosecute'],
      'Action Financial' : ['Buy','Sell','Lease','Borrow','Lend','Invest',],

      
      30 : 'Risk',
      31 : 'Risk',
      32 : 'Risk',
      33 : 'Risk',
      34 : 'Risk',
      35 : 'Risk',
      36 : 'Risk',
      37 : 'Risk',
      38 : 'Risk',
      39 : 'Risk',

      
    
  'risks' : ['environment', 'sanction', 'tariff', 'seizure', 'flood', 'theft'],    



      //legal ?
      40 : '',    //  4000 ..4900
      41 : '',
      42 : '',
      43 : '',
      44 : '',
      45 : '',
      46 : '',
      47 : '',
      48 : '',
      49 : '',
        
      50 : 'Finance',
      51 : 'Finance Type',
      52 : 'Fiancial Action',
      53 : 'Finance',
      54 : 'Finance',
      55 : 'Finance',
      56 : 'Finance',
      57 : 'Finance',
      58 : 'Finance',
      59 : 'Finance',

      60 : 'Payment',
      61 : 'Payment',
      62 : 'Payment',
      63 : 'Payment',
      64 : 'Payment',
      65 : 'Payment',
      66 : 'Payment',
      67 : 'Payment',
      68 : 'Payment',
      69 : 'Payment',
        
    'price' : 100,
    'curency code' : '',    //USD ,RON, EUR
    'payment mean' : ['cash', 'exchange', 'bank tranfer'],
    'payment frequency' : ['one time', 'per year', 'per month', 'per week', 'per day', 'per hour', 'per 100g', 'per unit'],
    'Payment Ammount' : '',
    'Currency'  : '',
    'Payment Method' : ['cash', 'bank tran sfer', 'vouch'],
    'Payment Reccurency' : ['year','month','week','day','hour'],
    
    
      70 : 'Location',
      71 : '',
      72 : '',
      73 : '',
      74 : '',
      75 : '',
      76 : '',
      77 : '',
      78 : '',
      79 : '',

      'addresses' : [],
    'coordinates sets' : [[1,2], [1,2]],
    'postal codes' : [],

  
      //Legal stuff ?
      80 : 'Jurisdiciton Tax',
      81 : '',
      82 : '',
      83 : '',
      84 : '',
      85 : '',
      86 : '',
      87 : '',
      88 : '',
      89 : '',

      90 : 'Emoji',
      91 : '',
      92 : '',
      93 : '',
      94 : '',
      95 : '',
      96 : '',
      97 : '',
      98 : '',
      99 : '',  //9090....9900
      
    /*'' : {
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


      100 : 'Spec Name',   //100100 .. 999.000
      101 : '',
      102 : '',
      103 : '',
      104 : '',
      105 : '',
      106 : '',
      107 : '',
      108 : '',
      109 : '',

      110: '',


      200 : '',
      200 : '',
      200 : '',
      200 : '',
      200 : '',
      200 : '',
      200 : '',
      200 : '',
      200 : '',
      //geojson
    


    'Comfort Factors' : ['Temperature', 'Humidity', 'UV Exposure', 'Smell', 'Water Polution', 'Air Polution', 'Safe to Walk on Streets'], 
    'Organisation' : ['Natural person', 'Family Office','Non profit', 'Not for profit', 'Limited Liability Corporation', 'Non Governmental Organisation' ],
    'Status' : ['Active', 'Available', 'On Hold', 'Stopped', 'Closed', 'Disputed', 'Live ','Under Construction', 'Frozen', ' '],
    'Role' : ['Buyer', 'Seller', 'Inspector', 'Authority', 'Prosecutor', 'Broker', 'Faker', 'Client',],
    'Scope' : ['Movable', 'Immovable', 'Residential', 'Commercial', 'Social', 'Protected',  'Strategic', ],

    


    

    },


    //Offer Example 
  Offers : {1:{1:1}},




    


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




    







