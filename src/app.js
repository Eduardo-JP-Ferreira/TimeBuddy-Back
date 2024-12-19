import express from 'express';
import cors from 'cors';

// Criação do servidor
const app = express();

// Configurações
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Bem-vindo ao TimeBuddy-Back!');
});

// Deixa o app escutando, à espera de requisições
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na portaa ${PORT}`));
