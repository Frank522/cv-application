const CVInformation = (() => {
  /**
   * personal contains one object since there is one form
   * experience and education forms can be duplicated via add,
   * so they need to hold multiple instances of the
   * object formData holds
   *
   * model(formData):
   * {
   *   personal: { (****sample comparison object****,
   *                look at corresponding module to
   *                find remaing attributes)
   *      firstName: "name", ...
   *   }
   *   experience [
   *      {
   *          position: "p1", ...
   *      },
   *      {
   *          position: "p2", ...
   *      }, ...
   *   education [
   *      {
   *          university: "u1", ...
   *      }, ...
   *   ]
   * }
   */
  const state = {
    personal: {},
    experience: [{}],
    education: [{}],
  };

  //indices of all experienc forms that have been deleted
  const deletedExperience = [];
  const deletedEducation = [];

  const handleSubmit = (e) => {
    e.preventDefault();
    let formType = e.target.getAttribute("class");
    let formId = e.target.id;

    //index is the location comparison object
    //in the experience or education arrays
    let index = 0;

    let currentData = {};

    switch (formType) {
      case "personalInformationForm":
        currentData = state.personal;
        break;
      case "experienceInformationForm":
        index = parseInt(formId.substring(7));
        currentData = state.experience[index];
        break;
      case "educationInformationForm":
        index = parseInt(formId.substring(7));
        currentData = state.education[index];
        break;
    }

    Array.from(document.querySelectorAll("#" + formId + " input")).forEach(
      (input) => {
        //simpleId is attribute associated with the input
        //within the comparison object
        let simpleId = input.id;
        if (formType != "personalInformationForm") {
          simpleId = input.id.substring(0, input.id.length - 1);
        }

        //the comparison object should only update when a meaningful
        //value is input into the form
        if (input.value) {
          currentData[simpleId] = input.value;
        }

        input.value = "";
      }
    );

    console.log(state);
  };

  //does not delete data, just makes it inaccessible
  const handleDelete = (e) => {
    let formId = e.target.parentNode.id;
    let formType = e.target.parentNode.getAttribute("class");
    let index = parseInt(formId.substring(7));
    switch (formType) {
      case "experienceInformationForm":
        deletedExperience[deletedExperience.length] = index;
        break;
      case "educationInformationForm":
        deletedEducation[deletedEducation.length] = index;
        break;
    }
  };

  //appends a object to experience or education arrays
  const handleAdd = (e) => {
    let formType = e.targetparentNode.getAttribute("class");
    switch (formType) {
        case "experienceInformationForm":
          state.experience.push({});
          break;
        case "educationInformationForm":
          state.education.push({});
          break;
      }
  };

  return {handleSubmit, handleDelete, handleAdd};
})();

export default CVInformation;
