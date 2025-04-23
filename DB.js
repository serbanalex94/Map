
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
