import axios from 'axios';

export const syncOrderToServiceNow = async (req, res) => {
  const {
    quantity,
    food_item_id,
    total_amount,
    user_id,
    order_id,
    email,
    status,
  } = req.body;

  // Basic input validation
  if (!quantity || !food_item_id || !total_amount || !user_id || !order_id || !email || !status) {
    console.log("Missing required fields in request body");
    return res.status(400).json({ success: false, message: "Missing required fields" });
  }

  const username = "admin";
  const password = "/9lhWRga+ON8";
  const auth = Buffer.from(`${username}:${password}`).toString("base64");

  const payload = {
    u_quantity: quantity,
    u_food_item_id: food_item_id,
    u_total_amount: total_amount,
    u_user_id: user_id,
    u_order_id: order_id,
    u_email: email,
    u_status: status,
  };

  try {
  

    const response = await axios.post(
      "https://dev295542.service-now.com/api/now/table/u_food_delivery",
      payload,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Basic ${auth}`,
        },
      }
    );

    console.log("ServiceNow sync successful");

    return res.status(200).json({ success: true, data: response.data });
  } catch (error) {
    const errorDetails = error.response?.data || error.message;
    console.error("ServiceNow sync error:", errorDetails);

    return res.status(500).json({
      success: false,
      message: "ServiceNow sync failed",
      error: errorDetails,
    });
  }
};
