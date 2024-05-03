const authenticateUser = (email: string, password: string): boolean => {
  const storedEmail = sessionStorage.getItem("email");
  const storedPassword = sessionStorage.getItem("password");
  if (storedEmail !== null && storedPassword !== null) {
    return true;
  } else {
    if (verifyToken(email, password)) {
      sessionStorage.setItem("email", email);
      sessionStorage.setItem("password", password);
      return true;
    } else {
      return false;
    }
  }
};

const verifyToken = (email: string, password: string) => {
  if (password == "1234" && email == "hei.elise.3@gmail.com") {
    return "token";
  }
};

const isAuthentificated = (): boolean => {
  const email = sessionStorage.getItem("email");
  const password = sessionStorage.getItem("password");
  if (email != null && password != null) {
    return true;
  }
  return false;
};

export { authenticateUser, isAuthentificated };
