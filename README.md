# Getting Started
Install the dependencies and run the project
```
npm install
npm start
```

## Things learned
  ***Focus of the project:*** Practice handling projects already started, much like most projects you cross while working in a company. 
  * The code passed as a parameter of React.useState() will run each time the component renders, but React.useState() will handle that value only one time
    * Example: if you use localStorage.getItem() to set the value of the parameter passed to React.useState, localStorage.getItem will run every render.
    * Solution: "Lazy state initialization", make the functionality needed inside a function, and pass that function as a parameter (the function will return the value)
  * Optional changing operator: You can write "?" before accessing a property of an object to ensure that it will not be accessed if the variable you are treating as an object doesn't exist. 
    * Example: Object?.key1 ; Array?[45] // Were Object / Array is undefined.
  ** Firebase Handling **
  0. Firebase will give you the base configuration to be able to use it. You can put all of that configuration (and future as well) inside a Javascript file to manage it better.
  1. You need to use getFirestore to access the database. You have to pass it the app configuration. 
  2. To access a collection inside the database, you need the collection function. You have to pass it the database, and the name of the collection (String).
  * You can use onSnapshot() to update variables each time the content of the Firestore database changes. You have to pass the collection to listen, and the function that will run when the change happens. 
   * snapshot (parameter of the function) ; snapshot.docs to receive an array with data; snapshot.docs[?].data() to get the information you are storing; spanshot.docs[?].id to get the id of that inforamtion.
  * addDoc() to add data to a collection. You need to pass it the collection reference and the data you want to store.
  * doc() to get the reference of the data you want to access. You need to pass it the database reference, the collection, and the id of the item.
  * deleteDoc() to delete an item inside a collection. You need to pass it the doc reference
  * setDoc() to update the data of an item. You need to pass it the doc reference, an object with the new values, and you can also pass it an object with settings inside.
   * on the settings object, you can use { merge: true } to only update specific fields of your object, without the need of delete all the previous information stored.
  * You can debouncing, using React.useEffect() and slow down the actions using timeOut(). You can cancel that timeout (clearTimeout()) in the function that useEffect returns, which runs every time it is called.

Head over to https://vitejs.dev/ to learn more about configuring vite
## About Scrimba

At Scrimba our goal is to create the best possible coding school at the cost of a gym membership! 💜
If we succeed with this, it will give anyone who wants to become a software developer a realistic shot at succeeding, regardless of where they live and the size of their wallets 🎉
The Frontend Developer Career Path aims to teach you everything you need to become a Junior Developer, or you could take a deep-dive with one of our advanced courses 🚀

- [Our courses](https://scrimba.com/allcourses)
- [The Frontend Career Path](https://scrimba.com/learn/frontend)
- [Become a Scrimba Pro member](https://scrimba.com/pricing)

Happy Coding!
