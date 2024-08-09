import "./Reviews.css";
import React from "react";
import { useState } from 'react';



const data = [
  {
    question: "How do I place an order?",
    answer:
      "To place an order, simply open the app, browse through the menu, select the items you'd like to order, and proceed to checkout. Follow the prompts to provide delivery details and complete your order.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept various payment methods including credit/debit cards, digital wallets (such as Apple Pay, Google Pay), and cash on delivery (where available). You can choose your preferred payment method during checkout.",
  },
  {
    question: "How can I track my order?",
    answer:
      "Once your order is confirmed, you'll receive a confirmation message with an estimated delivery time. You can track the status of your order in real-time through the app. Additionally, you'll receive notifications at each stage of the delivery process.",
  },
  {
    question: "Can I customize my order?",
    answer:
      "Yes, you can customize your order according to your preferences. Our app allows you to add special instructions or make modifications to your items before placing the order. Simply specify your requirements in the order notes section during checkout.",
  },
  {
    question: "What if I have food allergies or dietary restrictions?",
    answer:
      "We take food allergies and dietary restrictions seriously. Our menu includes options for various dietary preferences such as vegetarian, vegan, gluten-free, etc. You can filter the menu based on your dietary requirements or reach out to our customer support team for assistance in selecting suitable options.",
  },
  {
    question: "Is there a minimum order requirement for delivery?",
    answer:
      "The minimum order requirement for delivery may vary depending on your location and the restaurant you're ordering from. You can check the minimum order amount for each restaurant listed in the app before placing your order.",
  },
  {
    question: "What if I need to cancel my order?",
    answer:
      "If you need to cancel your order, please do so as soon as possible before it is prepared for delivery. You can cancel the order directly from the app by navigating to your order history and selecting the cancel option. Please note that orders already in preparation cannot be canceled.",
  },
  {
    question: "How do I provide feedback or report an issue with my order?",
    answer:
      "Your feedback is important to us! If you have any issues with your order or if you'd like to provide feedback, you can contact our customer support team through the app. We're here to assist you and ensure your experience is satisfactory.",
  },
  {
    question: "Do you offer contactless delivery?",
    answer:
      "Yes, we offer contactless delivery options to ensure the safety of our customers and delivery partners. You can request contactless delivery during checkout, and our delivery partners will leave your order at your doorstep without direct contact.",
  },
];





function Reviews() {
  const [activeIndex, setActiveIndex] = useState(null);
  
    const handleToggle = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
    };
  

  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState('');

  const handleInputChange = (e) => {
    setTodoInput(e.target.value);
  };

  const handleAddTodo = () => {
    if (todoInput.trim() !== '') {
      const newTodo = {
        id: todos.length + 1,
        text: todoInput,
        date: new Date().toLocaleDateString(),
      };
      setTodos([...todos, newTodo]);
      setTodoInput(''); // Clear the input field after adding
    }
  };


  
    
  return (
    <>
      <div className="Reviews2">Reviews</div>
      <div className="todo-container">
      
      <div className="todo-input-container">

        <textarea
          className="todo-input"
          placeholder="Write review"
          value={todoInput}
          onChange={handleInputChange}
        ></textarea>
        <button className="todo-add-button" onClick={handleAddTodo}>
          Add
        </button>
      </div>

      

      <div className="jii-1">
      <h1 className="jii">Food Reviews</h1>
      </div>

      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            <div className="todo-details">
            <span class="material-symbols-outlined">
            person
            </span>
            <div>
            <h1>YOU</h1>
            <p className="todo-date">{todo.date}</p>
            </div>
            </div>
              <p className="todo-text">{todo.text}</p>
                        
            <hr />
            <hr />
          </li>
        ))}
      </ul>
    </div>

      <div className="food-feedback">
        
        <ul className="boxs-reviews">
          {foodReviews.map((review) => (
            <li key={review.id} className="reviews-box">
              <div className="feedback-user-ditels">
                <img
                  src={review.userImg}
                  alt={`${review.userName}'s profile`}
                  className="user-img"
                />
                <div className="user-name-feedback">
                  <div className="star-review">
                    <p className="user-name-review">{review.userName}</p>

                    <p className="flex items-center justify-center">
                      <span className="material-symbols-outlined">star</span>{" "}
                      {review.stars}
                    </p>
                  </div>
                  <p className="date-review"> {review.date}</p>
                </div>
              </div>
              <p className="feedback-review"> {review.feedback}</p>
              <hr />
              <hr />
            </li>
          ))}
        </ul>
      </div>

      <h1 className="FAQs">FAQs</h1>
      <div className="accordion">
        
      {data.map((item, index) => (
        <div key={index} className="accordion-item">
          <button
            className="accordion-header"
            onClick={() => handleToggle(index)}
          >
            {item.question}
            <span className="arrow">{activeIndex === index ? <span class="material-symbols-outlined">
arrow_drop_down
</span> : <span class="material-symbols-outlined">
arrow_left
</span>}</span>
          </button>
          <div
            className={`accordion-body ${
              activeIndex === index ? 'active' : ''
            }`}
          >
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
    </>
  );
}

const foodReviews = [
  {
    id: 1,
    name: "Margherita Pizza",
    date: "2024-08-08",
    userName: "John Doe",
    userImg: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    feedback:
      "The pizza was delivered hot and on time. The crust was crispy and the sauce was flavorful. However, the portion size was a bit smaller than expected. I would have liked more cheese. Overall, it was a decent meal.",
    stars: 4.5,
  },
  {
    id: 2,
    name: "Burger",
    date: "2024-08-07",
    userName: "Jane Smith",
    userImg: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    feedback:
      "The burger was juicy and tasty, but the fries were cold. The bun was perfectly toasted, and the patty was cooked just right. The portion was adequate but could use a bit more sauce. A good meal overall.",
    stars: 4.2,
  },
  {
    id: 3,
    name: "Sushi",
    date: "2024-08-06",
    userName: "Alice Johnson",
    userImg: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
    feedback:
      "The sushi was fresh and well-presented. The fish was high quality, though the soy sauce was too salty. The rice was seasoned well, and the variety of rolls was enjoyable. A minor issue with the soy sauce, but otherwise good.",
    stars: 4.0,
  },
  {
    id: 4,
    name: "Pasta Carbonara",
    date: "2024-08-05",
    userName: "Michael Brown",
    userImg: "https://images.unsplash.com/photo-1551218808-94e220e084d2",
    feedback:
      "The carbonara sauce was creamy and rich, and the pasta was well-cooked. The portion size was decent, but the garlic bread needed more seasoning. The meal was hot and well-packaged. A satisfying dish with minor improvements needed.",
    stars: 4.3,
  },
  {
    id: 5,
    name: "Tacos",
    date: "2024-08-04",
    userName: "Emily Davis",
    userImg: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    feedback:
      "The tacos were flavorful with fresh ingredients. The tortillas were warm and soft, but the portion sizes were on the smaller side. The salsa was excellent. The meal arrived well-packaged and the delivery was prompt.",
    stars: 4.1,
  },
  {
    id: 6,
    name: "Pad Thai",
    date: "2024-08-03",
    userName: "Daniel Wilson",
    userImg: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
    feedback:
      "The Pad Thai had a good balance of flavors with well-cooked noodles. The portion was slightly small, and a bit more spice would have been nice. The fresh vegetables added a good crunch. Overall, a solid dish.",
    stars: 4.4,
  },
  {
    id: 7,
    name: "Chocolate Cake",
    date: "2024-08-02",
    userName: "Sophia Martinez",
    userImg: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",
    feedback:
      "The chocolate cake was rich and moist with a delicious frosting. The portion size was generous, but it was a bit too sweet for my taste. The presentation was lovely, and it arrived well-packaged. A great dessert overall.",
    stars: 4.7,
  },
  {
    id: 8,
    name: "Caesar Salad",
    date: "2024-08-01",
    userName: "Chris Evans",
    userImg: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D",
    feedback:
      "The Caesar Salad was crisp and refreshing with a generous amount of Parmesan. The dressing was a bit tangy, but the croutons were nice. The portion was good, though a bit more protein would have been ideal. Overall, a solid salad.",
    stars: 4.0,
  },
  {
    id: 9,
    name: "Ramen",
    date: "2024-07-31",
    userName: "Olivia Lee",
    userImg: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    feedback:
      "The ramen had a rich broth and well-cooked noodles. The beef was a bit tough, but the overall flavor was good. The portion size was satisfactory, and the meal arrived hot. A bit more seasoning would improve it.",
    stars: 4.2,
  },
  {
    id: 10,
    name: "Gelato",
    date: "2024-07-30",
    userName: "Liam Harris",
    userImg: "https://plus.unsplash.com/premium_photo-1664541336896-b3d5f7dec9a3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
    feedback:
      "The gelato was creamy with a smooth texture. The pistachio flavor was outstanding, though it melted quickly. The portion size was just right. The packaging kept it intact during delivery. A delightful treat overall.",
    stars: 4.6,
  },
];

// const data = [
//   {
//     qustion: "How do I place an order?",
//     answar:
//       "To place an order, simply open the app, browse through the menu, select the items you'd like to order, and proceed to checkout. Follow the prompts to provide delivery details and complete your order.",
//   },
//   {
//     qustion: "What payment methods do you accept?",
//     answar:
//       "We accept various payment methods including credit/debit cards, digital wallets (such as Apple Pay, Google Pay), and cash on delivery (where available). You can choose your preferred payment method during checkout.",
//   },
//   {
//     qustion: "How can I track my order?",
//     answar:
//       "Once your order is confirmed, you'll receive a confirmation message with an estimated delivery time. You can track the status of your order in real-time through the app. Additionally, you'll receive notifications at each stage of the delivery process.",
//   },
//   {
//     qustion: "Can I customize my order?",
//     answar:
//       "Yes, you can customize your order according to your preferences. Our app allows you to add special instructions or make modifications to your items before placing the order. Simply specify your requirements in the order notes section during checkout.",
//   },
//   {
//     qustion: "What if I have food allergies or dietary restrictions?",
//     answar:
//       "We take food allergies and dietary restrictions seriously. Our menu includes options for various dietary preferences such as vegetarian, vegan, gluten-free, etc. You can filter the menu based on your dietary requirements or reach out to our customer support team for assistance in selecting suitable options.",
//   },
//   {
//     qustion: "Is there a minimum order requirement for delivery?",
//     answar:
//       "The minimum order requirement for delivery may vary depending on your location and the restaurant you're ordering from. You can check the minimum order amount for each restaurant listed in the app before placing your order.",
//   },
//   {
//     qustion: "What if I need to cancel my order?",
//     answar:
//       "If you need to cancel your order, please do so as soon as possible before it is prepared for delivery. You can cancel the order directly from the app by navigating to your order history and selecting the cancel option. Please note that orders already in preparation cannot be canceled.",
//   },
//   {
//     qustion: "How do I provide feedback or report an issue with my order?",
//     answar:
//       "Your feedback is important to us! If you have any issues with your order or if you'd like to provide feedback, you can contact our customer support team through the app. We're here to assist you and ensure your experience is satisfactory.",
//   },
//   {
//     qustion: "Do you offer contactless delivery?",
//     answar:
//       "Yes, we offer contactless delivery options to ensure the safety of our customers and delivery partners. You can request contactless delivery during checkout, and our delivery partners will leave your order at your doorstep without direct contact.",
//   },
// ];

export default Reviews;
