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
  * 

Head over to https://vitejs.dev/ to learn more about configuring vite
## About Scrimba

At Scrimba our goal is to create the best possible coding school at the cost of a gym membership! 💜
If we succeed with this, it will give anyone who wants to become a software developer a realistic shot at succeeding, regardless of where they live and the size of their wallets 🎉
The Frontend Developer Career Path aims to teach you everything you need to become a Junior Developer, or you could take a deep-dive with one of our advanced courses 🚀

- [Our courses](https://scrimba.com/allcourses)
- [The Frontend Career Path](https://scrimba.com/learn/frontend)
- [Become a Scrimba Pro member](https://scrimba.com/pricing)

Happy Coding!
