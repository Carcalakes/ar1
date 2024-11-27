// Example stock data (companies from Bawsaq)
const stockData = [
    {name: "Redwood", symbol: "RWD", price: 100, change: 0},
    {name: "FlyUS", symbol: "FLY", price: 50, change: 0},
    {name: "Fruit", symbol: "FRT", price: 75, change: 0},
    {name: "Debonaire", symbol: "DBN", price: 150, change: 0},
    {name: "LifeInvader", symbol: "LIF", price: 200, change: 0},
    {name: "Bahama Mamas", symbol: "BM", price: 125, change: 0}
];

// Handle login
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        localStorage.setItem('user', JSON.stringify(user));  // Store user data in
