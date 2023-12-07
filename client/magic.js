import { Magic } from 'magic-sdk';
import REACT_APP_PK_KEY from './env.js'
console.log(REACT_APP_PK_KEY)
const magic = new Magic(REACT_APP_PK_KEY, );

export const checkUser = async (callback) => {
    try{
        const isLoggedIn = await magic.user.isLoggedIn();
 
        if (isLoggedIn) {
          const user = await magic.user.getInfo();
         
          return callback({ isLoggedIn: true, email: user.email});
        }
        return callback({ isLoggedIn: false });
    }catch (err){
        console.log('YOYOYYO')
        console.error(err)
    }
  
};

export const loginUser = async (email) => {
    console.log(email)
  await magic.auth.loginWithMagicLink({ email });
};

export const logoutUser = async () => {
    console.log('HERE HERE HERE')
  await magic.user.logout();
};

magic.preload().then(() => console.log('Magic <iframe> loaded.'));
