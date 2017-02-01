// This is just practice JSON

/*var car = {
    
    "model": "Audi",
    "prince": 2500,
    "engine": "Petrol"
}

console.log(car.model);

var F1drivers = ["Lewis", "Kimi", "Fernando"];*/

var F1 = {
    "data": [
        
        {
            "car": "Mercedes",
            "driver": "Lewis",
            "wins": 2
            
        },
        {
            "circuit": "Monaco",
            "pointSystem": [
                {
                    "firstplace": 25,
                    "secondplace": 18,
                    "thirdplace": 15
                }
            ],
            "teams": 11
        }
    ]
}


console.log(F1.data[1].pointSystem[0].thirdplace);