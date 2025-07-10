import Address from "../models/Address.js";

// Add Address : /api/address/add
export const addAddress = async (req, res) => {
  try {
    const { address } = req.body;
    const userId = req.userId;

    await Address.create({ ...address, userId });

    res.json({ success: true, message: "Address added successfully" });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

// Get Address : /api/address/get
export const getAddress = async (req, res) => {
  try {
    const userId = req.userId;
    const addresses = await Address.find({ userId });
    res.json({ success: true, addresses });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

// Update Address : /api/address/update/:id
export const updateAddress = async (req, res) => {
  try {
    const userId = req.userId;
    const { id } = req.params;
    const { address } = req.body;

    const existing = await Address.findOne({ _id: id, userId });
    if (!existing) {
      return res.json({ success: false, message: "Address not found" });
    }

    await Address.findByIdAndUpdate(id, { ...address });

    res.json({ success: true, message: "Address updated successfully" });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};
