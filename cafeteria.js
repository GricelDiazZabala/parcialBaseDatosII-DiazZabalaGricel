// 1)Crear el script .js con la creación de la base de datos y las colecciones. 
use cafeteria
db.cafeteria.drop()

db.cafeteria.insertMany(
[{"tipo":"capuccino","ingredientes":[{"vainilla"}, {"cookies"}],"pesoGramos":635.56,"intensidad": "baja", "objetosPrecios":[{"tipo": "tarjeta"},{"precio": 200}],"leche":true,"tostador": [{"localidad" : "Avellaneda"}, {"nombre" : "Martinez"}, {"cuit" : 1234567892}]},
{"tipo":"espresso","ingredientes":[{"caramelo"}],"pesoGramos":515.92,"intensidad": "media", "objetosPrecios":[{"tipo": "tarjeta"},{"precio": 1000}],"leche":true,"tostador":[{"localidad" : "Flores"}, {"nombre" : "Alfa"}, {"cuit" : 99827737}]},
{"tipo":"filtrado","ingredientes":[{"canela"}],"pesoGramos":956.95,"intensidad": "alta","objetosPrecios":[{"tipo": "qr"},{"precio": 300}],"leche":false,"tostador":[{"localidad" : "san Martin"}, {"nombre" : "Bravo"}, {"cuit" : 2737829292}]},
{"tipo":"moka","ingredientes":[{"avellana"}],"pesoGramos":494.36,"intensidad": "baja","objetosPrecios":[{"tipo": "qr"},{"precio": 600}],"leche":false,"tostador":[{"localidad" : "Tigre"}, {"nombre" : "Charlie"}, {"cuit" : 393939222}]},
{"tipo":"filtrado","ingredientes":[{"pistacho"}],"pesoGramos":2.34,"intensidad": "media","objetosPrecios":[{"tipo": "efectivo"},{"precio": 800}],"leche":true,"tostador":[{"localidad" : "Capital"}, {"nombre" : "Delta"}, {"cuit" : 4567890}]},
{"tipo":"moka","ingredientes":[{"chocolate blanco"}],"pesoGramos":547.97,"intensidad": "alta","objetosPrecios":[{"tipo": "efectivo"},{"precio": 200}],"leche":true,"tostador":[{"localidad" : "Lugano"}, {"nombre" : "Eco"}, {"cuit" : 220293883}]},
{"tipo":"moka","ingredientes":[{"vainilla"}],"pesoGramos":172.19,"intensidad": "baja","objetosPrecios":[{"tipo": "tarjeta"},{"precio": 100}],"leche":false,"tostador":[{"localidad" : "Haedo"}, {"nombre" : "Whisky"}, {"cuit" : 1383838}]},
{"tipo":"filtrado","ingredientes":[{"canela"}],"pesoGramos":655.0,"intensidad": "media","objetosPrecios":[{"tipo": "transferencia"},{"precio": 500}],"leche":false,"tostador":[{"localidad" : "Villa Urquiza"}, {"nombre" : "tango"}, {"cuit" : 28182811}]},
{"tipo":"moka","ingredientes":[{"cacao"}],"pesoGramos":10.56,"intensidad": "alta","objetosPrecios":[{"tipo": "qr"},{"precio": 900}],"leche":false,"tostador":[{"localidad" : "Bahia Blanca"}, {"nombre" : "foxrot"}, {"cuit" : 202993883}]},
{"tipo":"espresso","ingredientes":[{"frutilla"}],"pesoGramos":114.29,"intensidad": "baja","objetosPrecios":[{"tipo": "qr"},{"precio": 1000}],"leche":false,"tostador":[{"localidad" : "San Jose"}, {"nombre" : "india"}, {"cuit" : 28382828}]},
{"tipo":"espresso","ingredientes":[{"durazno"}],"pesoGramos":477.46,"intensidad": "media","objetosPrecios":[{"tipo": "efectivo"},{"precio": 100}],"leche":false,"tostador":[{"localidad" : "Quilmes"}, {"nombre" : "sierra"}, {"cuit" : 12333332}]},
{"tipo":"cold brew","ingredientes":[{"caramelo"}],"pesoGramos":700.46,"intensidad": "alta","objetosPrecios":[{"tipo": "tarjeta"},{"precio": 300}],"leche":true,"tostador":[{"localidad" : "Ramos Mejia"}, {"nombre" : "uniform"}, {"cuit" : 1128822}]},
{"tipo":"espresso","ingredientes":[{"almendra"}],"pesoGramos":633.71,"intensidad": "baja","intensidad": "baja","objetosPrecios":[{"tipo": "tarjeta"},{"precio": 500}],"leche":true,"tostador":[{"localidad" : "Florida"}, {"nombre" : "zulu"}, {"cuit" : 12099393}]},
{"tipo":"moka","ingredientes":[{"nuez moscada"}],"pesoGramos":557.12,"intensidad": "media","objetosPrecios":[{"tipo": "efectivo"},{"precio": 700}],"leche":false,"tostador":[{"localidad" : "san Martin"}, {"nombre" : "oscar"}, {"cuit" : 233929329}]},
{"tipo":"descafeinado","ingredientes":[{"pistacho"}],"pesoGramos":608.8,"intensidad": "alta","objetosPrecios":[{"tipo": "transferencia"},{"precio": 800}],"leche":false,"tostador":[{"localidad" : "Avellaneda"}, {"nombre" : "xray"}, {"cuit" : 39232932}]},
{"tipo":"cold brew","ingredientes":[{"avellana"}],"pesoGramos":959.65,"intensidad": "baja","objetosPrecios":[{"tipo": "efectivo"},{"precio": 300}],"leche":true,"tostador":[{"localidad" : "Olavarria"}, {"nombre" : "tango charlie"}, {"cuit" : 2382832}]},
{"tipo":"filtrado","ingredientes":[{"frutilla"}],"pesoGramos":722.47,"intensidad": "media","objetosPrecios":[{"tipo": "qr"},{"precio": 100}],"leche":false,"tostador":[{"localidad" : "Avellaneda"}, {"nombre" : "eco bravo"}, {"cuit" : 11299292}]},
{"tipo":"filtrado","ingredientes":[{"frutilla"},{"durazno"}],"pesoGramos":284.45,"intensidad": "alta","objetosPrecios":[{"tipo": "tarjeta"},{"precio": 900}],"leche":true,"tostador":[{"localidad" : "foxtrot xray"}, {"nombre" : "Martinez"}, {"cuit" : 3933993}]},
{"tipo":"moka","ingredientes":[{"pomelo"}],"pesoGramos":619.41,"intensidad": "baja","objetosPrecios":[{"tipo": "efectivo"},{"precio": 700}],"leche":false,"tostador":[{"localidad" : "Quilmes"}, {"nombre" : "starbucks"}, {"cuit" : 183838292}]},
{"tipo":"espresso","ingredientes":[{"cacao"}],"pesoGramos":253.75,"intensidad": "alta","objetosPrecios":[{"tipo": "tarjeta"},{"precio": 300}],"leche":true,"tostador":[{"localidad" : "Avellaneda"}, {"nombre" : "bocadito"}, {"cuit" : 392932929}]]
)

// 2) Buscar cuántos cafés contienen chocolate entre sus ingredientes.

db.cafeteria.aggregate([{$match : {"ingredientes":"chocolate"}}, {$count : "cafes con chocolate"}])
// 3) Buscar cuántos cafés son de tipo “cold brew”· y contienen “vainilla” entre sus ingredientes.

db.cafeteria.aggregate([{$match : {"tipo":"cold brew", "ingredientes": "vainilla"}}])

// 4) Listar tipo y peso de los cafés que tienen una intensidad “media”.

db.cafeteria.aggregate([{$match: {"intensidad" : "media"}}, {$project:{ _id:0, tipo: 1, peso: 1} }])

// 5) Obtener tipo, peso e intensidad de los cafés cuyo peso se encuentre entre 200 y 260 inclusive.

db.cafeteria.aggregate([{$match: {peso :{$gte:200, $lte:260}}}, {$project:{ _id:0, tipo: 1, peso: 1, intensidad: 1} }])

// 6) Mostrar los cafés que fueron tostados en localidades que contengan “san”, permitiendo buscar por “san” y que se muestren también los de “santos”, “san justo”, etc. Ordenar el resultado por peso de manera descendente. 

db.cafeteria.find({"localidad":{$regex: /^san/i}, $sort: {peso: -1}})

// 7) Mostrar la sumar del peso de cada tipo de Café.

db.cafeteria.aggregate([{$group:{_id:"$tipo", totalPeso:{$sum: "$peso"}}}])

// 8) Agregar el ingrediente “whisky” todos los cafés cuya intensidad es alta.

db.cafeteria.updateMany({"intensidad":"alta"}, {$addToSet:{"ingredientes":"whisky"}})

// 9) Sumarle 10 al peso de los cafés cuyo peso se encuentre entre 200 y 260 inclusive. 

db.cafeteria.updateMany({"peso":{$gte:200, $lte:260}}, {$inc: {"peso":10}})

// 10) Eliminar los cafés cuyo peso sea menor o igual a 210.

db.cafeteria.deleteMany({"peso":{$lte: 210}})