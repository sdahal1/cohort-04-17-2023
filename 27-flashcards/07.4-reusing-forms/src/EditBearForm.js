import React from 'react';
import BearForm from './BearForm';

function EditBearForm({ bear, editBear, index, hideEditForm }) {
  function handleEditFormSubmit(editedBear) {
    editBear(index, editedBear);
    hideEditForm();
  }
  return <div>
    <BearForm
      headerText="Edit This Bear"
      submitButtonLabel="Save"
      initialFormData={bear}
      submitHandler={handleEditFormSubmit}
    />
  </div>
}

export default EditBearForm;