import express from 'express';
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/hello', (req, res) => {
  res.json({ message: 'Bonjour depuis l’API Express sur GitHub !' });
});

app.listen(PORT, () => {
  console.log(`API en ligne sur le port ${PORT}`);
});
