// hashAdminPassword.js
import bcrypt from "bcrypt";
import mysql from "mysql2/promise"; // use promise API

async function createAdmin() {
  const db = await mysql.createConnection({
    host: "localhost",
    port:"3308",
    user: "root",
    password: "",
    database: "crm"
  });

  const username = "rushalmanhas@gmail.com";
  const plainPassword = "Admin@123";

  const hashedPassword = await bcrypt.hash(plainPassword, 10);

  const [result] = await db.execute(
    "INSERT INTO admin_users (username, password) VALUES (?, ?)",
    [username, hashedPassword]
  );

  console.log("Admin inserted, id:", result.insertId);
  await db.end();
}

createAdmin().catch(console.error);
