const SignUpValidate = (values) => {

    let errors = {};
    if (!values.name) {
      errors.name = 'Username is required';
    } else if (values.name.length < 3) {
      errors.name = 'Username needs to be 3 characters or more';
    }
    if (!values.email) {
      errors.email = 'Email required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 6) {
      errors.password = 'Password needs to be 6 characters or more';
    }
    return errors;
}
export default SignUpValidate