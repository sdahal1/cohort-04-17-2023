import React, { useState } from 'react';
import EditBearForm from './EditBearForm';

function Bear({ data, thing, deleteBear, editBear, index }) {
  const [shouldShowEditForm, setShouldShowEditForm] = useState(false);

  function hideEditForm() {
    setShouldShowEditForm(false);
  }

  return <div>
    <h3>{data.name}</h3>
    <img src={data.imageUrl} />
    <p>Lives in {data.habitat}</p>
    <button className="btn btn-secondary"
      onClick={() => setShouldShowEditForm(!shouldShowEditForm)}>
      Edit
    </button>
    <button
      className="btn btn-danger"
      onClick={() => deleteBear(data)}>
      Delete</button>
    {shouldShowEditForm && <EditBearForm bear={data} editBear={editBear} index={index} hideEditForm={hideEditForm} />}
  </div>
}

export default Bear;