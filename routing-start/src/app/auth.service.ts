export class AuthService {
    loggedInd = false;

    isAuthenticated(){
        const promise = new Promise(
            (resolve, reject) => {
                setTimeout(() => {
                    resolve(this.loggedInd);
                }, 800);
            }
        );
        return promise;
    }

    login(){
        this.loggedInd = true;
    }

    logout(){
        this.loggedInd = false;
    }
}