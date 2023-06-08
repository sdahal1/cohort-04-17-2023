import React from 'react';

function Bear({ data, thing, deleteBear }) {
  return <div>
    <h3>{data.name}</h3>
    <img src={data.imageUrl} />
    <p>Lives in {data.habitat}</p>
    <button
      className="btn btn-danger"
      onClick={() => deleteBear(data)}>
      Delete</button>
  </div>
}

export default Bear;