let API_URL;

if (process.env.REACT_APP_NODE_ENV === 'development') {
  API_URL = 'http://localhost:5050/api/v1';
} else {
  API_URL = 'https://pet-app-ot3u.onrender.com/api/v1';
}


const ServiceInfo = [
    { name: "Grooming", description: "We will groom your pet to perfection!", price: 50.00},
    { name: "Watching", description: "We will watch your pet for a day, week, or month!", price: 25.00},
    { name: "Training", description: "We will train your pet to be the best!", price: 100.00},
    { name: "Walking", description: "We will walk your pet for you!", price: 10.00},
    { name: "Sitting", description: "We will sit your pet for you!", price: 15.00},
    { name: "Daycare", description: "We will take care of your pet for the day!", price: 30.00},
]

export { API_URL, ServiceInfo };

