const sql = require('mssql');
const dbConfig = require('./dbConfig');

// Conexão com o banco
async function connectToDatabase() {
  try {
    const pool = await sql.connect(dbConfig);
    console.log('Conectado ao banco de dados com sucesso!');
    return pool;
  } catch (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
  }
}

connectToDatabase();
