export const validateForm = (taskName, dueDate, taskDetails) => {
  let taskNameErrorMessage = "";
  let dueDateErrorMessage = "";
  let taskDetailsMessage = "";
  let isFormValid = true;

  if (taskName.length === 0) {
    taskNameErrorMessage = "This field is Required!";
    isFormValid = false;
  } else if (taskName.length <= 3) {
    taskNameErrorMessage = "Task name should have at least 3 !";
    isFormValid = false;
  }

  if (dueDate.length === 0) {
    dueDateErrorMessage = "This field is Required!";
    isFormValid = false;
  } else if (new Date(dueDate).getTime() < new Date().getTime()) {
    dueDateErrorMessage = "Task due time cannot be less than current date!";
    isFormValid = false;
  }

  if (taskDetails.length === 0) {
    taskDetailsMessage = "This field is Required!";
    isFormValid = false;
  } else if (taskDetails.length <= 10) {
    taskDetailsMessage = "Task name should have at least 10!";
    isFormValid = false;
  }

  return {
    taskName: taskNameErrorMessage,
    dueDate: dueDateErrorMessage,
    taskDetails: taskDetailsMessage,
    isValid: isFormValid,
  };
};
