// Component that shows a single feedback item, including the rating and a text

import { useState } from 'react'

function FeedbackItem() {

    const [rating, setRating] = useState(7)
    const [text, setText] = useState('Initial text comment')

    const handleClick = () => {
        // setRating(10)
        setRating((rating) => {
            console.log(rating)
            return rating + 1
        })
    }

    return (
        <div className="card ">
            <div className="num-display">{rating}</div>
            <div className="text-display">{text}</div>
            <button onClick={handleClick}>Click me to increase rating!</button>
        </div>)
}

export default FeedbackItem;
