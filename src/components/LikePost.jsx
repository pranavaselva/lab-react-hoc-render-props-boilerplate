import React, { useState } from 'react'

function LikePost() {  

  const [likePostCounter, setLikePostCounter] = useState(0)

  const handlePostLikeCount = () =>{
    setLikePostCounter(likePostCounter + 1)
  }

  return (
    <div>
      <button onClick={handlePostLikeCount}>Like Post {likePostCounter}</button>
    </div>
  )
}

export default LikePost