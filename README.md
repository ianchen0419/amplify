# AWS Amplify Exercise Project

## Figma
We can change the compoment design by modify Figma file and sync with Amplify Studio.

Component is linked with Figma | [link](https://www.figma.com/file/Ul4qQsn8tHiIMORWCdFLMp/AWS-Amplify-UI-Kit-(Community)?node-id=861%3A3635)

## Amplify Studio
Here is a main dashboard that you can adjust component property, data model.

Neet account and password issued by me | [link](https://us-west-2.admin.amplifyapp.com/admin/login?appId=d2y40lxff9h57l&code=1eb6e1b7-230b-4554-8e35-2f7fcaffa077)

## Online Webapp
Check online webapp hosted by aws | [link](https://main.d2y40lxff9h57l.amplifyapp.com/)

## Development Enviroment

Node.js version: `16.0.0`

1. DM me to get Amplify Studio / Figma access.
2. clone this project.
3. change node.js version to `16.0.0`. [n](https://www.npmjs.com/package/n) is recommended for node.js version management.
4. `cd` this folder.
5. run `npm install`.
6. install amplify CLI, run `sudo npm install -g @aws-amplify/cli`.
7. link amplify and local folder, run `amplify pull --appId d2y40lxff9h57l --envName staging`. (If you use chrome on step 1., you need to change default brower to chrome before this step. Open System Preference → General → Default web browser → Select "Chrome")
8. Login Amplify Studio by browser.
9. Back to Amplify CLI, you will be asked several questions, you can answer it as following.
    * Choose your default editor: Choose "Visual Studio Code".
    * Choose the type of app that you're building: Choose "javascript".
    * What javascript framework are you using: Choose "react".
    * Source Directory Path: Just press ENTER.
    * Distribution Directory Path: Just press ENTER.
    * Build Command: Just press ENTER.
    * Start Command: Just press ENTER.
    * Do you plan on modifying this backend: Y.
10. After everything finished, run `npm start` and open `localhost:3000` on browser.







