import React, { useContext, useState } from 'react';
import './Home.css';
import Slider from "react-slick";
import { data } from '../../FoodData';
import { CartContext } from '../../CartContext';
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const { addToCart } = useContext(CartContext);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredData = data.filter(post => 
    post.item_Name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    swipeToSlide: 1,
    afterChange: function(index) {
      console.log(`Slider Changed to: ${index + 1}`);
    },
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className,  onClick } = props;
    return (
      <div
        className={className}
        style={{  display: "block", background: "black" }}
        onClick={onClick}
      />
    );
  }

  return (
    <>
    <div id='home' className='flex'>
    <div id='pra'>
        <h1 className=''>Are You Starving?</h1>
        <p>Within a few clicks, find meals that are accessible near you</p>
        <button className='View'  >View menu</button>
    </div>
    <div id='video' className='h-30 w-60'>
        <video controls loop autoPlay muted
       id='Video' >
            <source  src='https://cdn.dribbble.com/users/319371/screenshots/11984807/media/05cad6c3ffff65f9142bf2958b941171.mp4' type='video/mp4'/>
        </video>
    </div>
    </div>
    <div id='search' >
    <h1>What would you like to order</h1>
    <div className='search-section'>
    <span class="material-symbols-outlined">
search
</span>
<input
          type="text"
          placeholder="Find food"
          className="border border-blue-200 w-[400px] h-12 px-4 text-2xl"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        </div>
    </div>

    
    <div className="slider-container">
      <Slider {...settings} >
        <div id='cc'>
          <img src="https://img.freepik.com/free-photo/traditional-indian-soup-lentils-indian-dhal-spicy-curry-bowl-spices-herbs-rustic-black-wooden-table_2829-18717.jpg?w=900" alt="" />
          <span>Indain</span>
        </div>
        <div id='cc'>
          <img src="https://img.freepik.com/free-photo/cheese-platter-with-cheese-variations-crackers-nuts-strawberry-jam_114579-1942.jpg?w=826" alt="" />
          <span>Appetizers</span>
        </div>
        <div id='cc'>
          <img src="https://img.freepik.com/free-photo/dessert-bowl-with-fresh-fruit-chocolate-indulgence-generative-ai_188544-8542.jpg?w=996" alt="" />
          <span>Dessert</span>
        </div>
        <div id='cc'>
          <img src="https://img.freepik.com/free-photo/top-view-fresh-fish-with-lemon-slices-wooden-table-food-seafood-dish-ocean_140725-91008.jpg?w=900" alt="" />
          <span>Seafood</span>
        </div>
        <div id='cc'>
          <img src="https://img.freepik.com/free-photo/flat-lay-salad-with-chicken-sesame-seeds_23-2148700369.jpg?w=900" alt="" />
          <span>Salads</span>
        </div>
        <div id='cc'>
          <img src="https://img.freepik.com/free-photo/mexican-food-composition_23-2147740702.jpg?w=826" alt="" />
          <span>Mexican</span>
        </div>
        <div id='cc'>
          <img src="https://img.freepik.com/free-photo/top-view-delicious-noodles-concept_23-2148773780.jpg?w=900" alt="" />
          <span>Asian</span>
        </div>
        <div id='cc'>
          <img src="https://img.freepik.com/free-photo/grilled-cheeseburger-with-tomato-sesame-bun-generative-ai_188544-12302.jpg?w=996" alt="" />
          <span>Burgers</span>
        </div>
        <div id='cc'>
          <img src="https://img.freepik.com/free-photo/freshly-italian-pizza-with-mozzarella-cheese-slice-generative-ai_188544-12347.jpg?w=996" alt="" />
          <span>Italian</span>
        </div>
      </Slider>
      <hr />
      <hr />
      <hr />
    </div>
    
    <div>
        <h1 className='Popular-foods'>Popular foods</h1>
        
    </div>

      {/* Existing JSX */}
      
      <div className='food-cards' >
        {
          filteredData.map((item, index) => (  // Ensure 'item' is used here
            <div className='food-card' key={index}>
              <div className='food-img'>
                <img src={item.image_url} alt={item.item_Name} />
              </div>
              <div className='food-ditels'>
                <h1>{item.item_Name}</h1>
                <p>Price: {item.price}</p>
                <span className='star'>
                  <span className="material-symbols-outlined">star</span>
                  {item.rating}
                </span>
              </div>
              <div className='food-btns'>
                <button 
                  className='food-btn-1'
                  onClick={() => addToCart(item)}  // Use 'item' here
                >
                  Add to Cart
                </button>
                <button className='food-btn-2'><Link to="/cart">Go to Cart</Link> </button>
              </div>
            </div>
          ))
        }
      </div>
    </>
  );
}
