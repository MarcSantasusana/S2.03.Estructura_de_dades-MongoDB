
db.createCollection( 'product', {validator: {$jsonSchema: {bsonType: 'object',title:'product',required: [         'name',          'description',          'price',          'image',          'type'],properties: {name: {bsonType: 'string'},description: {bsonType: 'string'},price: {bsonType: 'double'},image: {bsonType: 'binData'},type: {enum: pizza, drink, hamburguer}}         }      }});  
db.createCollection( 'cient', {validator: {$jsonSchema: {bsonType: 'object',title:'cient',required: [         'name',          'surnames',          'address',          'postal_code',          'location'],properties: {name: {bsonType: 'string'},surnames: {bsonType: 'string'},address: {bsonType: 'string'},postal_code: {bsonType: 'string'},phone_number: {bsonType: 'string'},location: {bsonType: 'objectId'}}         }      }});  
db.createCollection( 'location', {validator: {$jsonSchema: {bsonType: 'object',title:'location',required: [         'name',          'province'],properties: {name: {bsonType: 'string'},province: {bsonType: 'objectId'}}         }      }});  
db.createCollection( 'province', {validator: {$jsonSchema: {bsonType: 'object',title:'province',required: [         'name'],properties: {name: {bsonType: 'string'}}         }      }});  
db.createCollection( 'order', {validator: {$jsonSchema: {bsonType: 'object',title:'order',required: [         'date_time',          'type',          'total_price',          'product_quantity',          'client',          'shop'],properties: {date_time: {bsonType: 'timestamp'},type: {enum: },total_price: {bsonType: 'double'},product_quantity: {bsonType: 'array',items: {
title:'object',required: [         'product',          'quantity'],properties: {product: {bsonType: 'objectId'},quantity: {bsonType: 'double'}}}},client: {bsonType: 'objectId'},shop: {bsonType: 'objectId'}}         }      }});  
db.createCollection( 'categoria', {validator: {$jsonSchema: {bsonType: 'object',title:'categoria',required: [         'name'],properties: {name: {bsonType: 'string'},pizzas: {bsonType: 'array',items: {bsonType: 'objectId'}}}         }      }});  
db.createCollection( 'employee', {validator: {$jsonSchema: {bsonType: 'object',title:'employee',required: [         'nom',          'surnames',          'NIF',          'phone_number',          'type',          'shop'],properties: {nom: {bsonType: 'string'},surnames: {bsonType: 'string'},NIF: {bsonType: 'string'},phone_number: {bsonType: 'string'},type: {enum: cook, delivery},shop: {bsonType: 'objectId'}}         }      }});  
db.createCollection( 'order_at_home', {validator: {$jsonSchema: {bsonType: 'object',title:'order_at_home',required: [         'date_time_delivery',          'delivery'],properties: {date_time_delivery: {bsonType: 'timestamp'},delivery: {bsonType: 'objectId'}}         }      }});  
db.createCollection( 'shop', {validator: {$jsonSchema: {bsonType: 'object',title:'shop',required: [         'address',          'postal_code',          'location'],properties: {address: {bsonType: 'string'},postal_code: {bsonType: 'string'},location: {bsonType: 'objectId'}}         }      }});  