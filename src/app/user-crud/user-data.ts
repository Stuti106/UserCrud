export class UserData {
    load() {
        if(localStorage.getItem('users') === null || localStorage.getItem('users') == undefined) {
          console.log('No users Found... Creating...');
          let userList = [
            {
              id:1,
              name:'Stuti Pathak',
              phone:'9891755590',
              address: 'India'
            }
          ];
    
          localStorage.setItem('users', JSON.stringify(userList));
          return 
        } else {
          console.log('Found users...');
        }
      }
}
