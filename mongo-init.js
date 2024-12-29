db = connect("mongodb://galib:123456@localhost:27017/admin");

// Create `dev` database and its user
db.getSiblingDB("nebula").createUser({
  user: "galib",
  pwd: "123456",
  roles: [{ role: "readWrite", db: "nebula" }],
});

// Create `production` database and its user
// db.getSiblingDB("production").createUser({
//   user: "prod_user",
//   pwd: "prod_pass",
//   roles: [{ role: "readWrite", db: "production" }],
// });
