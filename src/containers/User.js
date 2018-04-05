import React from 'react'
import { RouteData, Link } from 'react-static'
//

export default () => (
  <RouteData
    render={({ user, posts }) => (
      <div>
        <Link to="/users/">{'<'} All Users</Link>
        <br />
        <h3>{user.name}</h3>
        <p>Username: {user.username}</p>
        <p>Email: {user.email}</p>
        <p>Website: {user.website}</p>

        <h5>Posts</h5>
        <ul>
          {posts.map(post => (
            <li key={post.id}>
              <Link to={`/blog/post/${post.id}/`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    )}
  />
)
