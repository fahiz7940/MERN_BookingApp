import { MdOutlineFoodBank } from "react-icons/md"; 
import { Link } from 'react-router-dom';
import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <section className="mainSection">
        <div className="subcon">
          <h1>
            Step Into a World of <br /> Timeless Coffee
          </h1>
          <p>Discover the charm of classic brews and warm conversations.</p>
          <a href="#">Explore</a>
        </div>
      </section>
      <section className="foodSection">
        <div className="container">
          <div className="box">
            <img src="/imgs/dish1.png" alt="" />
            <h3>Noodles</h3>
          </div>
          <div className="box">
            <img src="/imgs/dish2.png" alt="" />
            <h3>Noodles</h3>
          </div>
          <div className="box">
            <img src="/imgs/dish3.png" alt="" />
            <h3>Noodles</h3>
          </div>
          <div className="box">
            <img src="/imgs/dish4.png" alt="" />
            <h3>Noodles</h3>
          </div>
          <div className="box">
            <img src="/imgs/dish5.png" alt="" />
            <h3>Noodles</h3>
          </div>
        </div>

        <div className="sponsor-slider">
          <div className="slider-track">
            {[...Array(2)].map((_, i) => (
              <React.Fragment key={i}>
                <img src="/imgs/spon1.png" alt="Sponsor 1" />
                <img src="/imgs/spon2.png" alt="Sponsor 2" />
                <img src="/imgs/spon1.png" alt="Sponsor 1" />
                <img src="/imgs/spon2.png" alt="Sponsor 2" />
                <img src="/imgs/spon2.png" alt="Sponsor 2" />
                <img src="/imgs/spon1.png" alt="Sponsor 1" />
                <img src="/imgs/spon2.png" alt="Sponsor 2" />
                <img src="/imgs/spon2.png" alt="Sponsor 2" />
                <img src="/imgs/spon1.png" alt="Sponsor 1" />
                <img src="/imgs/spon2.png" alt="Sponsor 2" />
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
      <section className="about-section">
            <div className="about">

            
        <div className="content">
          <h2>ABOUT OUR FOOD</h2>
          <h1>Where Every Bite Tells a Delicious Story</h1>
          <p>Fast food is a popular category of food th emphasizes 
            quick a service and convenience. It typically
            <br /> <br />
            Fast food is a popular category of food th emphasizes quick a service and convenience. 
            It typically Fast food is a popular category of food th emphasizes
            </p>
            <a href="#">Read More</a>
        </div>
        <img src="/imgs/dish3.png" alt="" />
        <div className="pop">
          <div className="box">
            <MdOutlineFoodBank /> 
            <h1> 20+  </h1>
            <p>Spacialist Chef</p>
          </div>
          <div className="box">
            <MdOutlineFoodBank /> 
            <h1> 20+  </h1>
            <p>Spacialist Chef</p>
          </div>
          <div className="box">
            <MdOutlineFoodBank /> 
            <h1> 20+  </h1>
            <p>Spacialist Chef</p>
          </div>
          <div className="box">
            <MdOutlineFoodBank /> 
            <h1> 20+  </h1>
            <p>Spacialist Chef</p>
          </div>
        </div>
        </div>
      </section>
      <section className="topdish">
        <h1>Best Selling Dishes</h1>
        <p>Fast food is a popular category of food that emphasizes 
          quick a service <br />  and convenience. 
          It typically includes items</p>
          <div className="boxs">
            <div className="box"><img src="/imgs/topdish1.jpg" alt="" />
            <h1>Chicken Pasta</h1>
            <p>Fast food is a popular category of emphasizes quick a service and convenience</p>
            <Link className="link" to="/reservation" >Reservation</Link>
            </div>
            <div className="box"><img src="/imgs/topdish2.jpg" alt="" />
            <h1>Chicken Pasta</h1>
            <p>Fast food is a popular category of emphasizes quick a service and convenience</p>
            <Link className="link"  to="/reservation" >Reservation</Link>
            </div>
            <div className="box"><img src="/imgs/topdish3.jpg" alt="" />
            <h1>Chicken Pasta</h1>
            <p>Fast food is a popular category of emphasizes quick a service and convenience</p>
            <Link className="link"  to="/reservation" >Reservation</Link>
            </div>
          </div>
      </section>
    </div>
  );
};

export default Home;
