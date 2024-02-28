import React, { useState } from 'react'

function LikeImage(){

  const [likeImageCounter, setLikeImageCounter] = useState(0)

  const handleLikeCount = () =>{
    setLikeImageCounter(likeImageCounter + 1);
  }

  return(
    <div>
      <button onClick={handleLikeCount}>Like Image {likeImageCounter}</button>
    </div>
  )
}

export default LikeImage