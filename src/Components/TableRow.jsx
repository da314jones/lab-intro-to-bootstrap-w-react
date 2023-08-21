import React from 'react'

export default function TableRow({table}) {
    console.log(table)
    const postsLocationAndCount = table.reduce((acc, post) => {
        acc[post.location] = (acc[post.location] || 0) + 1;
        return acc
    }, {})


  return (
    <>
      {Object.entries(postsLocationAndCount).map(([location, count]) => (
        <tr key={location}>
            <td>{location}</td>
            <td>{count}</td>
            </tr>
      )) }
    </>
  )
}
