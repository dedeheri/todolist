/* eslint eqeqeq: 0 */
function loopError({ error, errorRegister, ...rest }) {
  if (rest.pathnameURL == "/login") {
    for (let i = 0; i < error?.length; i++) {
      const param = error[i].param;
      if (param === "email") {
        rest.setErrorFormEmailLogin(true);
      }
      if (param === "password") {
        rest.setErrorFormPasswordLogin(true);
      }
    }
  }

  if (rest.pathnameURL == "/register") {
    for (let i = 0; i < errorRegister?.length; i++) {
      const param = errorRegister[i].param;
      if (param === "email") {
        rest.setErrorFormEmailRegister(true);
      }
      if (param === "password") {
        rest.setErrorFormPasswordRegister(true);
      }
      if (param === "repeatPassword") {
        rest.setErrorFormRepeatPasswordRegister(true);
      }
    }
  }
}

export default loopError;
