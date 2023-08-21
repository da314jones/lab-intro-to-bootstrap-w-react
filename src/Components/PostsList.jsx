import React from 'react'
import Post from './Post'

export default function PostsList({postData, searchInput, setSearchInput}) {
const filteredPosts = postData.filter(post => {
    const searchBlock = searchInput.toLowerCase();
    return post.title.toLowerCase().includes(searchBlock) || post.location.toLowerCase().includes(searchBlock)
})   
  
  
  return (
    <div className=''>
      <label htmlFor="">Search posts by location...</label>
      <input type="text"
      placeholder="Search..."
      value={searchInput}
      onChange={(e) => setSearchInput(e.target.value)} />
      <button onClick={() => setSearchInput("")} >Cancel</button>
      {filteredPosts.length > 0 ? ( 
        filteredPosts.map((post, index) => (
        <Post key={post.id} post={post} />
      ))
      ) : (
        <div className="modal-dialog modal-dialog-centered">
        No matches for "{searchInput}".
      </div>
      )}
    </div>
  )
}
