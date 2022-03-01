const FeedbackValidate = (values) => {

    let errors = {};
    if (!values.name) {
      errors.name = 'Name is required';
    } else if (values.name.length < 3) {
      errors.name = 'Name needs to be 3 characters or more';
    }
    if (!values.email) {
      errors.email = 'Email required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!values.feedback) {
      errors.feedback = 'Feedback is required';
    }
    return errors;
}
export default FeedbackValidate