import React from 'react'
import images from '../images'

export default function Post({post}) {
    const postImage = images[post.location.toLowerCase().replace(/\s+/g, "-")];

  return (
    <div className=''>
      <img src={postImage} alt={post.title} />
      <h3>{post.title}</h3>
      <p>{post.location}</p>
      <p>{post.content}</p>
      <button>Go to post</button>
    </div>
  )
}
