import React, { useState } from 'react';
import BearForm from './BearForm';

function AddBearForm({ addBear }) {
  let initialFormData = {
    name: '',
    imageUrl: '',
    habitat: ''
  }

  return <div>
    <BearForm
      headerText="Add a Bear"
      initialFormData={initialFormData}
      submitButtonLabel="Add"
      submitHandler={addBear}
    />
  </div>
}

export default AddBearForm;