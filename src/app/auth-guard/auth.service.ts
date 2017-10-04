export class AuthService {
    loggedIn = false;

    isAuthenticated() {
        return new Promise((resolve, reject) => {
            // setTimeout(() => {
            resolve(this.loggedIn);
            //  }, 1000);
        });
    }

    Login() {
        this.loggedIn = true;
    }

    Logout() {
        this.loggedIn = false;
    }
}
