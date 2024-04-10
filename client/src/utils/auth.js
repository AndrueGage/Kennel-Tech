import { jwtDecode } from "jwt-decode";

class AuthService {
  getUser() {
    return jwtDecode(this.getToken());
  }

  loggedIn() {
    const token = this.getToken();
    if(token && !this.isTokenExpired(token)) {
        return true;
    } else {
        // Redirect the user to the login page
        return false;
    }
}

  isTokenExpired(token) {
    const decoded = jwtDecode(token);
    if (decoded.exp < Date.now() / 1000) {
      localStorage.removeItem('id_token');
      return true;
    }
    return false;
  }

  getToken() {
    return localStorage.getItem('id_token');
  }

  login(idToken) {
    console.log(idToken)
    localStorage.setItem('id_token', idToken);
    window.location.assign('/');
  }

  signup() {
    window.location.assign('/')
  }

  logout() {
    localStorage.removeItem('id_token');
    window.location.reload();
  }
}

export default new AuthService();