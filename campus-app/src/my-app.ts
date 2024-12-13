
export class MyApp {
  
  email: string = '';
  password: string = '';
  errorMessage: string = '';

 
  private storedCredentials = {
    email1: 'giuseppe.impastato@unifr.ch',
    password1: '1234510100passi!',
    email2: 'pino.sergi@unifr.ch',
    password2: '7Ottobre!',
    email3: 'lucas.mosch@unifr.ch',
    password3: 'prova',
  };

  // Handle login
  login() {
    if ((this.email === this.storedCredentials.email1 && this.password === this.storedCredentials.password1)||(this.email === this.storedCredentials.email2 && this.password === this.storedCredentials.password2)||(this.email === this.storedCredentials.email3 && this.password === this.storedCredentials.password3)) {
      alert('Login successful!');
      this.errorMessage = ''; // Clear any error message
    } else {
      this.errorMessage = 'Invalid email or password!';
    }
  }
}
