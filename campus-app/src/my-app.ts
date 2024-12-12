
export class MyApp {
  
  email: string = '';
  password: string = '';
  errorMessage: string = '';

 
  private storedCredentials = {
    email: 'giuseppe.impastato@unifr.ch',
    password: '1234510100passi!',
  };

  // Handle login
  login() {
    if (this.email === this.storedCredentials.email && this.password === this.storedCredentials.password) {
      alert('Login successful!');
      this.errorMessage = ''; // Clear any error message
    } else {
      this.errorMessage = 'Invalid email or password!';
    }
  }
}
