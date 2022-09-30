export function checkPassword(input) {
  // at least one number, one lowercase and one uppercase letter
  // at least 13 characters that are letters, numbers or the underscore 
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{13,20}$/;
  return passwordRegex.test(input);
}

export function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

