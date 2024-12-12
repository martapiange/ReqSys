"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyApp = void 0;
// my-app.ts
var MyApp = /** @class */ (function () {
    function MyApp() {
        // Define properties to bind to the View
        this.email = '';
        this.password = '';
        this.errorMessage = '';
        // Predefined credentials
        this.storedCredentials = {
            email: 'giuseppe.impastato@unifr.ch',
            password: '1234510100passi!',
        };
    }
    // Handle login
    MyApp.prototype.login = function () {
        if (this.email === this.storedCredentials.email && this.password === this.storedCredentials.password) {
            alert('Login successful!');
            this.errorMessage = ''; // Clear any error message
        }
        else {
            this.errorMessage = 'Invalid email or password!';
        }
    };
    return MyApp;
}());
exports.MyApp = MyApp;
