import 'dotenv/config';

const dbConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_DATABASE,
  options: {
    encrypt: false, // Necessário para conexões com Azure
    trustServerCertificate: true, // Para conexões locais
  },
  port: parseInt(process.env.DB_PORT, 10) || 1433,
};

export default dbConfig;
