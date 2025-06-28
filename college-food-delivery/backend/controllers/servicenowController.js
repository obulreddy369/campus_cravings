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

  // Basic Auth header (username:password)
  const auth = Buffer.from("admin:ZU7Bg4ov!%nC").toString("base64");

  try {
    const response = await axios.post(
      "https://dev195642.service-now.com/api/now/table/x_1770395_food_d_0_food_order",
      {
        quantity,
        food_item_id,
        total_amount,
        user_id,
        order_id,
        email,
        status,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Basic ${auth}`,
        },
      }
    );

    return res.status(200).json({ success: true, data: response.data });
  } catch (error) {
    console.error("ServiceNow sync error:", error.response?.data || error.message);
    return res.status(500).json({ success: false, message: "ServiceNow sync failed", error: error.message });
  }
};
