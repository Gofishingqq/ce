import React from 'react';
import { Link } from 'react-router-dom'
const ProList = (props) => (
  <ul>
   {
     props.post.map(iedm => <li key={ iedm.id }>
      <Link to = { `/details/${iedm.id}` }>
        { iedm.name }
      </Link>
    </li>)
   }
  </ul>
)
export default ProList;