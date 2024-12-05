const express = require('express');
const app = express();
app.use(express.json()); // Pour analyser les données JSON envoyées

// Exemple de "base de données" en mémoire (tu peux utiliser une vraie base de données)
let stockData = {
    "Entrée": 5,
    "Plat": 0,
    "Dessert": 10
};

// Endpoint pour mettre à jour le stock
app.post('/update-stock', (req, res) => {
    const { type, newStock } = req.body;

    // Vérifier si le type existe dans stockData
    if (stockData[type] !== undefined) {
        stockData[type] = newStock; // Mettre à jour le stock pour ce type
        res.json({ success: true, newStock: stockData[type] });
    } else {
        res.status(400).json({ success: false, message: "Type de plat inconnu" });
    }
});

// Endpoint pour obtenir le stock actuel
app.get('/get-stock', (req, res) => {
    res.json(stockData);  // Renvoyer l'objet stockData
});

// Lancer le serveur
app.listen(3000, () => {
    console.log('Serveur démarré sur le port 3000');
});
