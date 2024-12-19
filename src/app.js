import express from 'express';
import cors from 'cors';
import sql from 'mssql';
import dbConfig from './dbConfig.js';

const app = express();
app.use(express.json());
app.use(cors());

async function getUsers(req, res) {
  try {
    const pool = await sql.connect(dbConfig);
    const result = await pool.request().query('SELECT * FROM Usuarios');
    res.json(result.recordset);
  } catch (err) {
    console.error('Erro ao buscar usuários:', err);
    res.status(500).json({ error: 'Erro ao buscar usuários' });
  }
}

app.get('/', getUsers);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
