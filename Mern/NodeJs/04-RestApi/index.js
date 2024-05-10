const express = require("express");
const users = require('./MOCK_DATA.json');
const fs = require("fs");
const { runInNewContext } = require("vm");
const app = express();
const PORT = 8000;


// middleware plugin
app.use(express.urlencoded({extended : false}));


app.use((req,res,next) => {
   console.log("Response from middle ware 1 ")
   next();   
});

app.use((req,res,next) => {
    
    console.log("Response from middle ware 2 ")
    next();   
 });
// Routes

// for mobile and all devices  // client side rendering
app.get('/api/users', (req,res) => {
    // console.log(res.json(users));
    res.setHeader("Name","Mihir Jain"); // custom headers
    // please add x on custom headers
    return res.json(users);   

})

// only for browser html document // server side rendering 

app.get('/users',(req,res) => {
    console.log(req.headers);
    const html = 
    `
    <ul>
        ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
    </ul>
    `;
    res.send(html);
})

//dyanmic path parameters
// app.get('/api/users/:id',(req,res) => {
//     const id = Number(req.params.id);
//     const user = users.find((user) =>  user.id === id);
//     return res.json(user);
// })


app.route('/api/users/:id')
    .get((req,res) => {
        const id = Number(req.params.id);
        const user = users.find((user) =>  user.id === id);
        return res.json(user);
    })
    .patch((req,res) => {
        // TODO: edit the users with id
        // return res.json(user);
        const id = Number(req.params.id);
        const user = users.find((user) =>  user.id === id);
        console.log(id);
            
        if(user === -1){
            return res.status(404).json({ error: "User not found" });
        }
        
        if(user === id){
            users.splice(user, id);
            fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err,data) => {
                if (err) {
                    return res.status(500).json({ error: "Failed to update data" });
                }
                return res.json({ status: "Success", id: id });
            });
        }else{
            return res.json({ status: "Failure", id: id });
        }        
       
        
    })
    .delete((req,res) => {
        // TODO: edit the users with id
        const id = Number(req.params.id);
        const user = users.find((user) =>  user.id === id);
        console.log(id);
        console.log(user);
            
        if(user === -1){
            return res.status(404).json({ error: "User not found" });
        }
        
        if(user.id === id){
            users.splice(user,1);
            fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err,data) => {
                if (err) {
                    return res.status(500).json({ error: "Failed to update data" });
                }
                return res.json({ status: "Success", id: id });
            });
        }else{
            return res.json({ status: "Failure", id: id });
        }  
        
       
        // const body = req.body;
        // const id = req.body.id;
        // console.log(id);
        // users.pop({...body});
        // fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err,data) => {
        //     return res.json({status: "Successfully deleted" , id : users.id});
        // })
    });

app.post('/api/users',(req,res) => {
    // TODO: create a post
    const body = req.body;
    console.log('Body.',body);
    users.push({...body, id: users.length+1})
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err,data) => {
        return res.json({status: "Success" , id : users.length})
    })
    
})


// app.patch('/api/users/:id',(req,res) => {
//     // TODO: edit the users with id
//     return res.json({status: "Pending"})
// })

// app.delete('/api/users/:id',(req,res) => {
//     // TODO: delete users with id
//     return res.json({status: "Pending"})
// })




app.listen(PORT, () => console.log(`Server Started on ${PORT}`));
