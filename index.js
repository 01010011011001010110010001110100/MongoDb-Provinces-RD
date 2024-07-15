// Importa el cliente de MongoDB
const { MongoClient } = require('mongodb');

// URL de conexión a MongoDB Atlas
const uri = 'mongodb+srv://moisesgironarias:AJFgPMs5vcdGjl9n@provinces-rd.poinme3.mongodb.net/';

// Crea una instancia del cliente de MongoDB
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Datos de las provincias dominicanas
const provinces = [
    { nombre: 'Azua', region: 'Sur' },
    { nombre: 'Baoruco', region: 'Sur' },
    { nombre: 'Barahona', region: 'Sur' },
    { nombre: 'Dajabón', region: 'Noroeste' },
    { nombre: 'Distrito Nacional', region: 'Ozama' },
    { nombre: 'Duarte', region: 'Nordeste' },
    { nombre: 'Elías Piña', region: 'Sur' },
    { nombre: 'El Seibo', region: 'Este' },
    { nombre: 'Espaillat', region: 'Norte' },
    { nombre: 'Hato Mayor', region: 'Este' },
    { nombre: 'Hermanas Mirabal', region: 'Nordeste' },
    { nombre: 'Independencia', region: 'Sur' },
    { nombre: 'La Altagracia', region: 'Este' },
    { nombre: 'La Romana', region: 'Este' },
    { nombre: 'La Vega', region: 'Norte' },
    { nombre: 'María Trinidad Sánchez', region: 'Nordeste' },
    { nombre: 'Monseñor Nouel', region: 'Norte' },
    { nombre: 'Monte Cristi', region: 'Noroeste' },
    { nombre: 'Monte Plata', region: 'Ozama' },
    { nombre: 'Pedernales', region: 'Sur' },
    { nombre: 'Peravia', region: 'Sur' },
    { nombre: 'Puerto Plata', region: 'Norte' },
    { nombre: 'Samaná', region: 'Nordeste' },
    { nombre: 'San Cristóbal', region: 'Ozama' },
    { nombre: 'San José de Ocoa', region: 'Sur' },
    { nombre: 'San Juan', region: 'Sur' },
    { nombre: 'San Pedro de Macorís', region: 'Este' },
    { nombre: 'Sánchez Ramírez', region: 'Norte' },
    { nombre: 'Santiago', region: 'Norte' },
    { nombre: 'Santiago Rodríguez', region: 'Noroeste' },
    { nombre: 'Santo Domingo', region: 'Ozama' },
    { nombre: 'Valverde', region: 'Noroeste' }
];

// Función principal
async function main() {
    try {
        // Conéctate al cliente
        await client.connect();

        // Conéctate a la base de datos
        const database = client.db('PROVINCES-RD');
        const collection = database.collection('provinces');

        // Inserta los datos en la colección
        await collection.insertMany(provinces);
        console.log('Datos insertados correctamente');

        // Recupera e imprime los datos
        const results = await collection.find({}).toArray();
        console.log('Datos en la colección:');
        console.log(results);
    } catch (error) {
        console.error('Error:', error);
    } finally {
        // Cierra la conexión del cliente
        await client.close();
    }
}

// Ejecuta la función principal
main().catch(console.error);