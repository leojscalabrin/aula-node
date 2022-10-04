import express from "express";

const app = express();

app.use(express.json());
app.use(cors());

let users = [];

app.get("/", function (req, res) {
  res.json(users);
});

app.get("/:name", function (req, res) {
  const { name } = req.params;

    const user = users.find(function(userItem) {
        return name == userItem.name
    })

    if (!user) {
        res.status(404).json({ error:true, message: 'User not found.' })
        return
    }

  res.json(user);
});

app.post("/", function (req, res) {
  const { name, age } = req.body;

  const user = {
    name,
    age,
  };

  users.push(user);

  res.status(201).json(user);
});

app.delete("/", function (req, res) {
  const { name: nameToDelete } = req.body;

  const newData = users.filter(function (user) {
    return nameToDelete !== user.name;
  });

  users = newData;

  res.status(204).send();
});

app.listen(3333, function () {
  console.log("Server started");
});
