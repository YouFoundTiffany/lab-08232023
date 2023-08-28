import { AboutController } from "./controllers/AboutController.js";
import { CarsController } from "./controllers/CarsController.js";
import { HomeController } from "./controllers/HomeController.js";
import { ValuesController } from "./controllers/ValuesController.js";
import { AboutView } from "./views/AboutView.js";
import { CarsView } from "./views/CarsView.js";
import {HousesController} from "./views/HousesView.js";
import { HousesView } from "./views/HousesView.js";

export const router = [
  {
    path: '',
    controller: HomeController,
    view: /*html*/`
    <div class="card">
      <div class="card-body">
        <p>Home Page</p>
        <button class="btn btn-dark" onclick="app.HomeController.testButton()">😎</button>
      </div>
    </div>
    `
  },
  {
    path: '#/about',
    controller: [AboutController, ValuesController],
    // NOTE this is essentially the HTML 'template' that is draw to the about page but has been abstracted to its own file in the views folder
    view: AboutView
  },
  {
    path: '#/cars',
    // NOTE controller is the interface layer that we want the user to interact with 
    controller: CarsController,
    // NOTE view is what is injected to the HTML: what we see on the page
    view: CarsView

    // NOTE: this got abstracted to CarsView
    //   /*html*/`
    //   <div class="container-fluid">
    // <section class="row">
    //   <button class="btn btn-info col-1" data-bs-toggle="collapse" data-bs-target="#carFormCollapse">
    //     List Car! <i class="mdi mdi-car"></i>
    //   </button>

    //   <div class="collapse" id="carFormCollapse">

    //     <form class="row p-2" onsubmit="app.CarsController.createCar()">

    //       <div class="form-floating mb-3 col-4">
    //         <input required type="text" minLength="3" maxLength="15" class="form-control" id="carMake" name="make" placeholder="Car Make">
    //         <label for="carMake">Car Make</label>
    //       </div>

    //       <div class="form-floating mb-3 col-4">
    //         <input required type="text" class="form-control" id="carModel" name="model" placeholder="Car Model">
    //         <label for="carModel">Car Model</label>
    //       </div>

    //       <div class="form-floating mb-3 col-4">
    //         <input  required type="number" class="form-control" min="1950"  id="carYear" name="year" placeholder="Car Year">
    //         <label for="carYear">Car Year</label>
    //       </div>

    //       <div class="form-floating mb-3 col-6">
    //         <input  required type="number" class="form-control" max="10000000" id="carPrice" name="price" placeholder="Car Price">
    //         <label for="carPrice">Car Price</label>
    //       </div>

    //       <div class="form-floating mb-3 col-2">
    //         <input  required type="color" class="form-control" id="carColor" name="color" placeholder="Car Color">
    //         <label for="carColor">Car Color</label>
    //       </div>

    //       <div class="form-check col-4">
    //         <input  class="form-check-input" type="checkbox" id="isNew" name="isNew">
    //         <label class="form-check-label" for="isNew">
    //           Is this a new car?
    //         </label>
    //       </div>

    //       <div class="form-floating mb-3 col-12">
    //         <input  required type="text" class="form-control" id="carimgUrl" name="imgUrl" placeholder="Car imgUrl">
    //         <label for="carimgUrl">Car Image Url</label>
    //       </div>

    //       <div class="form-floating">
    //         <textarea  required maxLength="144" class="form-control" placeholder="Please describe your car" name="description" id="carDescription"
    //           style="height: 100px"></textarea>
    //         <label for="carDescription">Car Description</label>
    //       </div>

    //       <!-- NOTE make sure that your submit button is INSIDE of your form tag -->
    //       <div class="text-end">
    //         <button type="submit" class="btn btn-info">Create Listing</button>

    //       </div>
    //     </form>
    //   </div>
    // </section>

    //   <section class="row justify-content-center" id="cars">
    //     <!-- STUB car template -->
    //     <!-- <div class="col-md-10 elevation-5 rounded-top">
    //       <div class="row">
    //         <div class="col-4 p-0">
    //           <img class="img-fluid rounded-start"
    //             src="https://bringatrailer.com/wp-content/uploads/2020/05/2011_bmw_335_15901301926d884f6124Photo-May-03-1-45-59-PM.jpg?fit=940%2C627"
    //             alt="make model">
    //         </div>
    //         <div class="col-8">
    //           <h2 class="text-center">Year Make Model</h2>
    //           <div class="d-flex justify-content-around pt-3">
    //             <span>$Price</span>
    //             <span>Date</span>
    //           </div>
    //           <p>Description</p>
    //         </div>
    //       </div>
    //     </div> -->

    //   </section>


    //   </div>`
  },

  // TODO for the students: start here for houses page
  {
    path: '#/houses',
    controllers: HousesController,
    view: 'hello from House Controller'
  }
]