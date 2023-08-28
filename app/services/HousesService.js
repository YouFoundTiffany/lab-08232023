import { AppState } from "../AppState.js";
import { House } from "../models/House.js";
import { saveState } from "../utils/Store.js";


function _saveHouses() {
    saveState('houses', AppState.houses)
}

class housesService {
    deleteHouse(houseId) {
        // console.log('delete house service', houseId)
        let foundHouse = AppState.houses.find(car => car.id == carId) // NOTE this will be an important step later....
        let filteredCarArr = AppState.houses.filter(car => car.id != carId) // NOTE filter out the car we want to remove
        console.log(filteredCarArr)
        AppState.houses = filteredCarArr // NOTE set the appstate to the returned array that filters out the car we want to remove
        _saveHouses() //NOTE save the newly filtered appstate back to local storage
    }
    createCar(formData) {
        let newCar = new Car(formData)
        AppState.houses.push(newCar)
        console.log(AppState.houses)
        AppState.emit('houses') //NOTE emits change from AppState.houses so that our listener can catch the change
        _saveHouses()
    }

}

export const houesService = new HousesService()