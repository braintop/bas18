function generateStrongPasswordAsync() {
    return new Promise((resolve, reject) => {
        let lowercase = [];
        let uppercase = [];
        let numbers = [];

        // אותיות קטנות
        for (let i = 97; i <= 122; i++) {
            lowercase.push(String.fromCharCode(i));
        }
        // אותיות גדולות
        for (let i = 65; i <= 90; i++) {
            uppercase.push(String.fromCharCode(i));
        }
        // ספרות
        for (let i = 48; i <= 57; i++) {
            numbers.push(String.fromCharCode(i));
        }
        // יצירת סיסמה באורך 6
        let password = '';
        for (let i = 0; i < 6; i++) {
            let index = -1
            if (i == 0 || i == 1) {
                index = Math.floor(Math.random() * lowercase.length);
                password += lowercase[index];
            }
            else if (i == 2 || i == 3) {
                index = Math.floor(Math.random() * uppercase.length);
                password += uppercase[index];
            }
            else if (i == 4 || i == 5) {
                index = Math.floor(Math.random() * numbers.length);
                password += numbers[index];
            }
        }
        resolve(password);
    });
}

generateStrongPasswordAsync()
    .then(password => console.log("Your password is:", password))
    .catch(err => console.error(err));
