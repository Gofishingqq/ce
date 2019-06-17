import React from 'react';
class ProList extends React.Component {
  goDetail (id) {
    console.log(this.props)
    this.props.history.push(`/details/${id}`)
  }
  render () {
   return (
    <ul>
      {
        this.props.post.map(iedm => <li key={ iedm.id } onClick={ this.goDetail.bind(this, iedm.id) }>
          { iedm.name }
      </li>)
      }
   </ul>
   )
  }
}
export default ProList;