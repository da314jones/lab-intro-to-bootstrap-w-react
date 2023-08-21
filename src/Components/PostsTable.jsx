import React from 'react'
import TableRow from './TableRow'


export default function PostsTable({postData}) {
    console.log(postData)
  return (
    <div>
      <table className=''>
        <caption>Posts by location</caption>
        <thead>
        <tr>
        <th scope="col">Location</th>
        <th scope="col">Posts</th>
        </tr>
        </thead>
        <tbody>
            <TableRow table={postData} />
        </tbody>
      </table>
    </div>
  )
}
