import React ,{useState}from "react";
import axios from "axios";
import "./reviews.css"


const Reviews = () => {

    // const [ review, setReview] = useState({
    //     movie_id:"",
    //     name:"",
    //     review:"",
    //     stars:""
    // });

    const [reviewsList, SetReviewsList] = useState([])

    const getReview = () => {
        // setReview({
        //     movie_id : localStorage.getItem("movie_id"),
        //     name : localStorage.getItem("userName"),
        //     review : document.getElementById("text").value,
        //     stars : document.getElementById("star").value
        // })
        //console.log(document.getElementById("text").value);
        const id=localStorage.getItem("movie_id")

        axios.get(`http://localhost:8080/reviewapi/get-reviews/${id}`)
        .then(res => {
            console.log(res.data.data);
            SetReviewsList(res.data.data);
            // if(res.data!="Logged in Successfully"&&res.data!="Incorrect password")
            // {
            //     //localStorage.setItem("l", "Smith");
            //     localStorage.setItem("userName", res.data);
            //     console.log(res.data);
            // }
            //setLoginUser(res.data.user)
        })
    }

    getReview();

    return (
        <div className="reviews"> 
            {/* <div className="title">Reviews</div>
            <div className="name">{localStorage.getItem("userName")}</div>
            <div className="stars">
                <input type="Number" id="star"></input>
            </div>
            <textarea placeholder="write your review" id="text">

            </textarea> */}
            <h1 className="title2">Reviews</h1>
            <div className="get-review">
                {/* <button onLoad={getReview}>get</button> */}
                {
                    reviewsList.map(review=>(
                        //console.log(review.name),
                        //console.log(review.review)
                        <div className="warp-review">
                        <div className="user">
                            <h4 className="user2">{review.name}</h4>
                        </div>
                        <div className="userreview">
                            <p className="userreview2">{review.review}</p>
                        </div>
                        <div>
                            <p className="userstar">Stars: {review.stars} <i class="fas fa-star" /></p>
                        </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Reviews;