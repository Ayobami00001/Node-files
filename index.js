const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const URI = process.env.uri || undefined;

mongoose.connect(URI)
.then(() => {
    console.log('Connected to MongoDB');
})

.catch((err) => {
    console.log(err);
});

const cities = [
    { name: 'New York', country: 'USA', population: 8419000, landmarks: ['Statue of Liberty', 'Central Park'], picture: 'new_york.jpg', landmass: 468.9 },
    { name: 'Los Angeles', country: 'USA', population: 3980000, landmarks: ['Hollywood Sign', 'Griffith Observatory'], picture: 'los_angeles.jpg', landmass: 503 },
    { name: 'Chicago', country: 'USA', population: 2716000, landmarks: ['Willis Tower', 'Millennium Park'], picture: 'chicago.jpg', landmass: 234 },
    { name: 'Houston', country: 'USA', population: 2328000, landmarks: ['Space Center Houston', 'Houston Zoo'], picture: 'houston.jpg', landmass: 637 },
    { name: 'Phoenix', country: 'USA', population: 1690000, landmarks: ['Desert Botanical Garden', 'Camelback Mountain'], picture: 'phoenix.jpg', landmass: 518 },
    { name: 'Philadelphia', country: 'USA', population: 1584000, landmarks: ['Liberty Bell', 'Independence Hall'], picture: 'philadelphia.jpg', landmass: 142.7 },
    { name: 'San Antonio', country: 'USA', population: 1547000, landmarks: ['The Alamo', 'River Walk'], picture: 'san_antonio.jpg', landmass: 465 },
    { name: 'San Diego', country: 'USA', population: 1424000, landmarks: ['Balboa Park', 'San Diego Zoo'], picture: 'san_diego.jpg', landmass: 372.4 },
    { name: 'Dallas', country: 'USA', population: 1341000, landmarks: ['The Sixth Floor Museum', 'Dallas Arboretum'], picture: 'dallas.jpg', landmass: 340.5 },
    { name: 'San Jose', country: 'USA', population: 1035000, landmarks: ['Winchester Mystery House', 'Tech Museum of Innovation'], picture: 'san_jose.jpg', landmass: 180.5 }
];

console.log(cities);


const foods = [
  { name: 'Pizza', class: 'Fast Food', description: 'A savory dish of Italian origin consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients.' },
  { name: 'Burger', class: 'Fast Food', description: 'A sandwich consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun.' },
  { name: 'Sushi', class: 'Japanese', description: 'A Japanese dish consisting of prepared vinegared rice, usually with some sugar and salt, accompanying a variety of ingredients, such as seafood, vegetables, and occasionally tropical fruits.' },
  { name: 'Pasta', class: 'Italian', description: 'An Italian type of food typically made from an unleavened dough of wheat flour mixed with water or eggs, and formed into sheets or other shapes, then cooked by boiling or baking.' },
  { name: 'Salad', class: 'Healthy', description: 'A dish consisting of a mixture of small pieces of food, usually vegetables or fruit.' },
  { name: 'Tacos', class: 'Mexican', description: 'A traditional Mexican dish consisting of a small hand-sized corn or wheat tortilla topped with a filling.' },
  { name: 'Steak', class: 'Main Course', description: 'A meat generally sliced across the muscle fibers, potentially including a bone.' },
  { name: 'Ice Cream', class: 'Dessert', description: 'A sweetened frozen food typically eaten as a snack or dessert.' },
  { name: 'Soup', class: 'Appetizer', description: 'A primarily liquid food, generally served warm or hot, that is made by combining ingredients of meat or vegetables with stock, or water.' },
  { name: 'Sandwich', class: 'Snack', description: 'A food typically consisting of vegetables, sliced cheese or meat, placed on or between slices of bread.' }
];

console.log(foods);


const drinks = [
  { name: 'Coca Cola', class: 'Soft Drink', description: 'A carbonated soft drink manufactured by The Coca-Cola Company.', picture: 'coca_cola.jpg' },
  { name: 'Pepsi', class: 'Soft Drink', description: 'A carbonated soft drink manufactured by PepsiCo.', picture: 'pepsi.jpg' },
  { name: 'Orange Juice', class: 'Juice', description: 'A liquid extract of the orange tree fruit, produced by squeezing or reaming oranges.', picture: 'orange_juice.jpg' },
  { name: 'Apple Juice', class: 'Juice', description: 'A fruit juice made by the maceration and pressing of an apple.', picture: 'apple_juice.jpg' },
  { name: 'Coffee', class: 'Hot Beverage', description: 'A brewed drink prepared from roasted coffee beans, the seeds of berries from certain Coffea species.', picture: 'coffee.jpg' },
  { name: 'Tea', class: 'Hot Beverage', description: 'An aromatic beverage commonly prepared by pouring hot or boiling water over cured or fresh leaves of Camellia sinensis.', picture: 'tea.jpg' },
  { name: 'Milkshake', class: 'Cold Beverage', description: 'A sweet, cold beverage which is usually made from milk, ice cream, or iced milk, and flavorings or sweeteners such as butterscotch, caramel sauce, chocolate syrup, or fruit syrup.', picture: 'milkshake.jpg' },
  { name: 'Smoothie', class: 'Cold Beverage', description: 'A thick and creamy beverage made from pureed raw fruit, vegetables, and sometimes dairy products, typically using a blender.', picture: 'smoothie.jpg' },
  { name: 'Lemonade', class: 'Cold Beverage', description: 'A sweetened lemon-flavored beverage.', picture: 'lemonade.jpg' },
  { name: 'Water', class: 'Essential', description: 'A transparent, tasteless, odorless, and nearly colorless chemical substance, which is the main constituent of Earth\'s hydrosphere and the fluids of all known living organisms.', picture: 'water.jpg' }
];

console.log(drinks);

app.get('/', (req, res) => {
    // res.send(cities);
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/api1', (req, res) => {
    res.send(cities);
});

app.get('/api2', (req, res) => {
    res.send(foods);
});

app.get('/api3', (req, res) => {
    res.send(drinks);
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});