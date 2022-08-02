## _Necessary steps:_
1)  create `vercel.json` configuration file in root directory
```json 
{
    "version": 2,
    "builds": [
        {
            "src": "./index.js", // relative path from root directory
            "use": "@vercel/node"
        }
    ],
    "routes": [
        {
            "src": "/(.*)",
            "dest": "/"
        }
    ]
}
```
2) write name of main file of your application
```json
"main": "index.js" // use only this name of output .js file
```
3) create scripts for launch local server 
```json
"scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
}
```
### `Usage`

```sh
npm run dev
```
