import React from "react";
import { NavLink } from "react-router-dom";

var img1 = "doctor1.jpg";

function Book() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid" style={{ backgroundColor: "#841C05" }}>
          <a class="navbar-brand ms-5" href="/" style={{ color: "#FFC300" }}>
            {" "}
            <h4>Restaurant Booking</h4>{" "}
          </a>
          <ul className="navbar-nav justify-content-end">
            <div className="mx-2 p-2">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className="nav-link"
                  style={{ color: "#FFC300" }}
                >
                  {" "}
                  <h4>Home</h4>
                </NavLink>
              </li>
            </div>
            <div className="mx-2 p-2">
              <li className="nav-item">
                <NavLink
                  to="/bookanappointment"
                  className="nav-link"
                  style={{ color: "#FFC300" }}
                >
                  {" "}
                  <h4>Order Food</h4>{" "}
                </NavLink>
              </li>
            </div>
            <div className="mx-2 p-2">
              <li className="nav-item">
                <NavLink
                  to="/Contact"
                  className="nav-link"
                  style={{ color: "#FFC300" }}
                >
                  {" "}
                  <h4>Contact Us</h4>{" "}
                </NavLink>
              </li>
            </div>
          </ul>
        </div>
      </nav>

      <h1 class="text-center mt-3">Place Your Order!</h1>
      <p class="lead text-center ms-4">
        <h6 style={{ color: "#808080" }}>
          Celebrate flavor and indulge your cravings with our delectable dishes!
          Experience culinary excellence and let us tantalize your taste buds.
          Order from our restaurant today for an unforgettable dining experience
          that will leave you craving more!
        </h6>
      </p>

      <div class="container-fluid mt-5 ml-5 d-flex flex-wrap justify-content-evenly">
        <div class="card mb-3" style={{ width: "18rem" }}>
          <img
            src="https://images.pexels.com/photos/2092916/pexels-photo-2092916.jpeg?cs=srgb&dl=pexels-anthony-leong-2092916.jpg&fm=jpg&_gl=1*1879k3q*_ga*OTIzNzIyMTc1LjE3MTE2Mzc0ODU.*_ga_8JE65Q40S6*MTcxMTczODI1My41LjEuMTcxMTczODM4MC4wLjAuMA.."
            height={"400px"}
            width={"400px"}
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h4 class="card-title">Biryani</h4>
            <p class="card-text">
              <h6 style={{ color: "#808080" }}>
                Savor the aromatic bliss of our tantalizing biryani, where each
                fragrant grain tells a story of culinary mastery and spices
                dance in harmony to delight your palate.
              </h6>
            </p>
            <a
              href="#"
              class="btn btn-primary"
              style={{ backgroundColor: "#841C05", color: "#FFC300" }}
            >
              Order
            </a>
          </div>
        </div>
        <div class="card mb-3" style={{ width: "18rem" }}>
          <img
            src="https://images.pexels.com/photos/20780684/pexels-photo-20780684.jpeg?cs=srgb&dl=pexels-lakshman-jung-khadka-20780684.jpg&fm=jpg&_gl=1*tukucs*_ga*OTIzNzIyMTc1LjE3MTE2Mzc0ODU.*_ga_8JE65Q40S6*MTcxMTczODI1My41LjEuMTcxMTczOTg5OS4wLjAuMA.."
            height={"400px"}
            width={"400px"}
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h4 class="card-title">Momos</h4>
            <p class="card-text">
              <h6 style={{ color: "#808080" }}>
                Embark on a flavorful journey with our exquisite momos, where
                every bite is a delightful explosion of authentic Himalayan
                flavors wrapped in delicate perfection.
              </h6>
            </p>
            <a
              href="#"
              class="btn btn-primary"
              style={{ backgroundColor: "#841C05", color: "#FFC300" }}
            >
              Order
            </a>
          </div>
        </div>
        <div class="card mb-3" style={{ width: "18rem" }}>
          <img
            src="https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?cs=srgb&dl=pexels-saveurs-secretes-5560763.jpg&fm=jpg&_gl=1*1c9uv1k*_ga*OTIzNzIyMTc1LjE3MTE2Mzc0ODU.*_ga_8JE65Q40S6*MTcxMTczODI1My41LjEuMTcxMTc0MDAxNC4wLjAuMA.."
            height={"400px"}
            width={"400px"}
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h4 class="card-title">Dosa</h4>
            <p class="card-text">
              <h6 style={{ color: "#808080" }}>
                Experience the crispy, golden perfection of our dosas, crafted
                with love and tradition to bring you the authentic taste of
                South India in every savory bite.
              </h6>
            </p>
            <a
              href="#"
              class="btn btn-primary"
              style={{ backgroundColor: "#841C05", color: "#FFC300" }}
            >
              Order
            </a>
          </div>
        </div>
        <div class="card mb-3" style={{ width: "18rem" }}>
          <img
            src="https://images.pexels.com/photos/4449068/pexels-photo-4449068.jpeg?cs=srgb&dl=pexels-satyam-verma-4449068.jpg&fm=jpg&_gl=1*1raiqa2*_ga*OTIzNzIyMTc1LjE3MTE2Mzc0ODU.*_ga_8JE65Q40S6*MTcxMTczODI1My41LjEuMTcxMTc0MDA3MC4wLjAuMA.."
            height={"400px"}
            width={"400px"}
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h4 class="card-title">Samosa</h4>
            <p class="card-text">
              <h6 style={{ color: "#808080" }}>
                Crunch into our savory samosas, bursting with a symphony of
                spices and flavors, for a taste of tradition that will leave you
                craving more.
              </h6>
            </p>
            <a
              href="#"
              class="btn btn-primary"
              style={{ backgroundColor: "#841C05", color: "#FFC300" }}
            >
              Order
            </a>
          </div>
        </div>
        <div class="card mb-3" style={{ width: "18rem" }}>
          <img
            src="https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg?cs=srgb&dl=pexels-saveurs-secretes-7625056.jpg&fm=jpg&_gl=1*1074icl*_ga*OTIzNzIyMTc1LjE3MTE2Mzc0ODU.*_ga_8JE65Q40S6*MTcxMTczODI1My41LjEuMTcxMTc0MDE4My4wLjAuMA.."
            height={"400px"}
            width={"400px"}
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h4 class="card-title">Butter Chicken</h4>
            <p class="card-text">
              <h6 style={{ color: "#808080" }}>
                Savor the rich, creamy goodness of our butter chicken, where
                tender chicken meets velvety sauce in a culinary masterpiece
                that will leave your taste buds begging for more.
              </h6>
            </p>
            <a
              href="#"
              class="btn btn-primary"
              style={{ backgroundColor: "#841C05", color: "#FFC300" }}
            >
              Order
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Book;
