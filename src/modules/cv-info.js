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
      default:
        return "ERROR";
    }

    Array.from(document.querySelectorAll("#" + formId + " input")).forEach(
      (input) => {
        //simpleId is attribute associated with the input
        //within the comparison object
        let simpleId = input.id;
        if (formType !== "personalInformationForm") {
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
      default:
        return "ERROR";
    }
    console.log(state, deletedExperience, deletedEducation);
  };

  //appends a object to experience or education arrays
  const handleAdd = (e) => {
    let formType = e.target.parentNode.getAttribute("class");
    switch (formType) {
      case "experienceInformationForm":
        state.experience.push({});
        break;
      case "educationInformationForm":
        state.education.push({});
        break;
      default:
        return "ERROR";
    }
    console.log(state);
  };

  const handleEdit = (e) => {
    const inputs = document.querySelectorAll(
      'input:not([type="button"], [type="submit"])'
    );
    Array.from(inputs).forEach((input) => {
      let form = input.parentElement;
      let formType = form.getAttribute('class');
      let index = parseInt(form.id.substring(7));
      let simpleId = input.id.substring(0, input.id.length - 1);
      switch(formType) {
        case "personalInformationForm":
          input.value = state.personal[input.id] || "";
          break;
        case "experienceInformationForm":
          input.value = state.experience[index][simpleId] || "";
          break;
        case "educationInformationForm":
          input.value = state.education[index][simpleId] || "";
          break;
        default:
          return "ERROR";
      }
    });
  };

  const getFormData = (type, count) => {
    switch (type) {
      case "personalInformationForm":
        return state.personal;
      case "experienceInformationForm":
        return state.experience[count];
      case "educationInformationForm":
        return state.education[count];
      default:
        return "ERROR";
    }
  };

  return { handleSubmit, handleDelete, handleAdd, getFormData, handleEdit };
})();

export default CVInformation;
