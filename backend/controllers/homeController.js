import pool from "../config/database.js";

// Create appointment
export const createAppointment = async (req, res) => {
  try {
    const { name, business, email, phone } = req.body;

    if (!name || !email || !phone) {
      return res
        .status(400)
        .json({ status: "error", message: "Please fill all required fields" });
    }

    const sql = `INSERT INTO appointment (name, business, email, phone) VALUES (?, ?, ?, ?)`;
    await pool.execute(sql, [name, business, email, phone]);

    res.status(200).json({ status: "success", message: "Appointment submitted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", message: "Server error" });
  }
};

// Get all appointments
export const getAppointments = async (req, res) => {
 const sql = "SELECT * FROM appointment ORDER BY created_at DESC";
  pool.query(sql, (err, results) => {
    if (err) {
      console.error("Error fetching leads:", err);
      return res.status(500).json({ error: "Database error" });
    }
    res.json(results);
  });
};
