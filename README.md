# Todo-app
Simple React TODO Application
# To run the Application
npm run dev 
application will run on port : 5000

# To run application without db
-remove -app.use(express.static(path.join(dirname,".." ,"dist")));
        -app.use(express.static("public"));
middleware from server/index.js

And run **npm run client** , app will run on port : 3000 
And you can start server using **node index.js** on port : 5000 for db connection
