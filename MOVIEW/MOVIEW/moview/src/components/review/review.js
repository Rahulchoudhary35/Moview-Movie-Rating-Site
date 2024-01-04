import React ,{useState}from "react";
import axios from "axios";
import "./review.css"


const Review = () => {

    const [ review, setReview] = useState({
        movie_id:"",
        name:"",
        review:"",
        stars:""
    });

    const handleChange = () => {
        //console.log(e.target);
        //const { name, value } = e.target;
        //console.log(name,value);
        setReview({
            movie_id : localStorage.getItem("movie_id"),
            name : localStorage.getItem("userName"),
            review : document.getElementById("text").value,
            stars : document.getElementById("stars").value
        })
    }

    const postReview = () => {

        // setReview({
        //     movie_id : localStorage.getItem("movie_id"),
        //     name : localStorage.getItem("userName"),
        //     review : document.getElementById("text").value,
        //     stars : document.getElementById("star").value
        // })
        //console.log(document.getElementById("text").value);

        axios.post("http://localhost:8080/reviewapi/post-review", review)
        .then(res => {
            alert("Data posted");
            // if(res.data!="Logged in Successfully"&&res.data!="Incorrect password")
            // {
            //     //localStorage.setItem("l", "Smith");
            //     localStorage.setItem("userName", res.data);
            //     console.log(res.data);
            // }
            //setLoginUser(res.data.user)
        })
    }

    return (
        <div className="review"> 
            <div className="title1">Post your review</div>
            <div className="name1">{localStorage.getItem("userName")}</div>
            <div className="stars">
                <h3>stars : </h3>
                <input type="text" className="star-input" id="stars" autoFocus="autofocus" onChange={handleChange} ></input>
                <i class="fas fa-star" />
                </div>
            <textarea className="post-review" placeholder="write your review" id="text" onChange={handleChange}>

            </textarea>
            <div className="post">
                <button className="btn1" onClick={postReview}>POST<i class="fa-solid fa-paper-plane-top"></i></button>
            </div>
        </div>
    )
}

export default Review;