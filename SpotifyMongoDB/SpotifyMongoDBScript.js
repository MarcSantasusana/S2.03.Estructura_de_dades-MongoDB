
db.createCollection( 'user', {validator: {$jsonSchema: {bsonType: 'object',title:'user',required: [         'email',          'password',          'username',          'birthdate',          'country',          'favourite_ albums',          'favourite_songs'],properties: {email: {bsonType: 'string'},password: {bsonType: 'string'},username: {bsonType: 'string'},birthdate: {bsonType: 'date'},sex: {enum: },country: {bsonType: 'string'},postal_code: {bsonType: 'string'},favourite_ albums: {bsonType: 'array',items: {bsonType: 'objectId'}},favourite_songs: {bsonType: 'array',items: {bsonType: 'objectId'}}}         }      }});  
db.createCollection( 'playlist', {validator: {$jsonSchema: {bsonType: 'object',title:'playlist',required: [         'title',          'song_number',          'creation_date',          'user_creator'],properties: {title: {bsonType: 'string'},song_number: {bsonType: 'int'},creation_date: {bsonType: 'date'},user_creator: {bsonType: 'objectId'},songs: {bsonType: 'array',items: {
title:'object',required: [         'song',          'user_adds_song',          'date'],properties: {song: {bsonType: 'objectId'},user_adds_song: {bsonType: 'objectId'},date: {bsonType: 'date'}}}}}         }      }});  
db.createCollection( 'song', {validator: {$jsonSchema: {bsonType: 'object',title:'song',required: [         'title',          'length',          'times_played',          'album'],properties: {title: {bsonType: 'string'},length: {bsonType: 'double'},times_played: {bsonType: 'int'},album: {bsonType: 'objectId'}}         }      }});  
db.createCollection( 'album', {validator: {$jsonSchema: {bsonType: 'object',title:'album',required: [         'title',          'year',          'cover',          'artist'],properties: {title: {bsonType: 'string'},year: {bsonType: 'int'},cover: {bsonType: 'binData'},artist: {bsonType: 'objectId'}}         }      }});  
db.createCollection( 'artist', {validator: {$jsonSchema: {bsonType: 'object',title:'artist',required: [         'name',          'image',          'user_followers',          'similar_artists'],properties: {name: {bsonType: 'string'},image: {bsonType: 'binData'},user_followers: {bsonType: 'array',items: {bsonType: 'objectId'}},similar_artists: {bsonType: 'array',items: {bsonType: 'objectId'}}}         }      }});  
db.createCollection( 'subscription', {validator: {$jsonSchema: {bsonType: 'object',title:'subscription',required: [         'starting_date',          'renewal_date',          'premium_user',          'payment_method'],properties: {starting_date: {bsonType: 'date'},renewal_date: {bsonType: 'date'},premium_user: {bsonType: 'objectId'},payment_method: {bsonType: 'objectId'}}         }      }});  
db.createCollection( 'payment_method', {validator: {$jsonSchema: {bsonType: 'object',title:'payment_method',required: [         'method'],properties: {method: {enum: paypal, credit card}}         }      }});  
db.createCollection( 'paypal', {validator: {$jsonSchema: {bsonType: 'object',title:'paypal',required: [         'username'],properties: {username: {bsonType: 'string'}}         }      }});  
db.createCollection( 'credit_card', {validator: {$jsonSchema: {bsonType: 'object',title:'credit_card',required: [         'card_number',          'expire_date',          'safety_code'],properties: {card_number: {bsonType: 'int'},expire_date: {bsonType: 'date'},safety_code: {bsonType: 'int'}}         }      }});  
db.createCollection( 'payment', {validator: {$jsonSchema: {bsonType: 'object',title:'payment',required: [         'order_number',          'date',          'total_price',          'subscription'],properties: {order_number: {bsonType: 'objectId'},date: {bsonType: 'date'},total_price: {bsonType: 'double'},subscription: {bsonType: 'objectId'}}         }      }});  
db.createCollection( 'deleted_playlist', {validator: {$jsonSchema: {bsonType: 'object',title:'deleted_playlist',required: [         'date'],properties: {date: {bsonType: 'date'}}         }      }});  