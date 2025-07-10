// import React, { useState, useEffect } from "react";
// import { assets } from "../assets/assets";
// import { useAppContext } from "../context/AppContext";
// import toast from "react-hot-toast";

// const InputField = ({ type, placeholder, name, handleChange, address }) => (
//   <input
//     className="w-full px-2 py-2.5 border border-gray-500/30 rounded outline-none text-gray-500 focus:border-primary transition"
//     type={type}
//     placeholder={placeholder}
//     onChange={handleChange}
//     name={name}
//     value={address[name]}
//     required
//   />
// );

// const AddAddress = () => {
//   const { axios, user, navigate } = useAppContext();

//   const [address, setAddress] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     street: "",
//     city: "",
//     state: "",
//     zipcode: "",
//     country: "",
//     phone: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setAddress((prevAddress) => ({
//       ...prevAddress,
//       [name]: value,
//     }));
//   };

//   const onSubmitHandler = async (e) => {
//     e.preventDefault(); 
//     try {
//       const { data } = await axios.post("/api/address/add", { address });

//       if (data.success) {
//         toast.success(data.message);
//         navigate("/cart");
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };

//   useEffect(() => {
//     if (!user) {
//       navigate("/cart");
//     }
//   }, []);

//   return (
//     <div className="mt-16 pb-16">
//       <p className="text-2xl md:text-3xl text-gray-500">
//         Add Shipping <span className="font-semibold text-primary">Address</span>
//       </p>
//       <div className="flex flex-col-reverse md:flex-row justify-between mt-10">
//         <div className="flex-1 max-w-md">
//           <form onSubmit={onSubmitHandler} className="space-y-3 mt-6 text-sm">
//             <div className="grid grid-cols-2 gap-4">
//               <InputField
//                 handleChange={handleChange}
//                 address={address}
//                 name="firstName"
//                 type="text"
//                 placeholder="First Name"
//               />
//               <InputField
//                 handleChange={handleChange}
//                 address={address}
//                 name="lastName"
//                 type="text"
//                 placeholder="Last Name"
//               />
//             </div>

//             <InputField
//               handleChange={handleChange}
//               address={address}
//               name="email"
//               type="email"
//               placeholder="Email Address"
//             />
//             <InputField
//               handleChange={handleChange}
//               address={address}
//               name="street"
//               type="text"
//               placeholder="Street"
//             />

//             <div className="grid grid-cols-2 gap-4">
//               <InputField
//                 handleChange={handleChange}
//                 address={address}
//                 name="city"
//                 type="text"
//                 placeholder="City"
//               />
//               <InputField
//                 handleChange={handleChange}
//                 address={address}
//                 name="state"
//                 type="text"
//                 placeholder="State"
//               />
//             </div>

//             <div className="grid grid-cols-2 gap-4">
//               <InputField
//                 handleChange={handleChange}
//                 address={address}
//                 name="zipcode"
//                 type="number"
//                 placeholder="Zip code"
//               />
//               <InputField
//                 handleChange={handleChange}
//                 address={address}
//                 name="country"
//                 type="text"
//                 placeholder="Country"
//               />
//             </div>

//             <InputField
//               handleChange={handleChange}
//               address={address}
//               name="phone"
//               type="text"
//               placeholder="Phone"
//             />

//             <button className="w-full mt-6 bg-primary text-white py-3 hover:bg-primary-dull transition cursor-pointer uppercase">
//               Save Address
//             </button>
//           </form>
//         </div>
//         <img
//           className="md:mr-16 mb-16 md:mt-0"
//           src={assets.add_address_iamge}
//           alt="Add Address"
//         />
//       </div>
//     </div>
//   );
// };

// export default AddAddress;



// // import React, { useState, useEffect } from "react";
// // import toast from "react-hot-toast";
// // import { useParams } from "react-router-dom";
// // import { useAppContext } from "../context/AppContext";

// // const InputField = ({ type, placeholder, name, handleChange, address }) => (
// //   <input
// //     className="w-full px-2 py-2.5 border border-gray-500/30 rounded outline-none text-gray-500 focus:border-primary transition"
// //     type={type}
// //     placeholder={placeholder}
// //     onChange={handleChange}
// //     name={name}
// //     value={address[name]}
// //     required
// //   />
// // );

// // const EditAddress = () => {
// //   const { axios, user, navigate } = useAppContext();
// //   const { id } = useParams(); // address ID from URL

// //   const [address, setAddress] = useState({
// //     firstName: "",
// //     lastName: "",
// //     email: "",
// //     street: "",
// //     city: "",
// //     state: "",
// //     zipcode: "",
// //     country: "",
// //     phone: "",
// //   });

// //   // Fetch address by ID
// //   const fetchAddress = async () => {
// //     try {
// //       const { data } = await axios.get("/api/address/get");
// //       if (data.success) {
// //         const current = data.addresses.find((addr) => addr._id === id);
// //         if (current) setAddress(current);
// //         else toast.error("Address not found");
// //       } else {
// //         toast.error(data.message);
// //       }
// //     } catch (err) {
// //       toast.error("Failed to fetch address");
// //     }
// //   };

// //   useEffect(() => {
// //     if (user) {
// //       fetchAddress();
// //     } else {
// //       navigate("/cart");
// //     }
// //   }, [user]);

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setAddress((prev) => ({ ...prev, [name]: value }));
// //   };

// //   const onSubmitHandler = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const { data } = await axios.put(`/api/address/update/${id}`, {
// //         address,
// //       });
// //       if (data.success) {
// //         toast.success("Address updated");
// //         navigate("/cart");
// //       } else {
// //         toast.error(data.message);
// //       }
// //     } catch (err) {
// //       toast.error("Update failed");
// //     }
// //   };

// //   return (
// //     <div className="mt-16 pb-16">
// //       <p className="text-2xl md:text-3xl text-gray-500">
// //         Edit Shipping <span className="font-semibold text-primary">Address</span>
// //       </p>
// //       <div className="flex flex-col-reverse md:flex-row justify-between mt-10">
// //         <div className="flex-1 max-w-md">
// //           <form onSubmit={onSubmitHandler} className="space-y-3 mt-6 text-sm">
// //             <div className="grid grid-cols-2 gap-4">
// //               <InputField
// //                 handleChange={handleChange}
// //                 address={address}
// //                 name="firstName"
// //                 type="text"
// //                 placeholder="First Name"
// //               />
// //               <InputField
// //                 handleChange={handleChange}
// //                 address={address}
// //                 name="lastName"
// //                 type="text"
// //                 placeholder="Last Name"
// //               />
// //             </div>

// //             <InputField
// //               handleChange={handleChange}
// //               address={address}
// //               name="email"
// //               type="email"
// //               placeholder="Email Address"
// //             />
// //             <InputField
// //               handleChange={handleChange}
// //               address={address}
// //               name="street"
// //               type="text"
// //               placeholder="Street"
// //             />

// //             <div className="grid grid-cols-2 gap-4">
// //               <InputField
// //                 handleChange={handleChange}
// //                 address={address}
// //                 name="city"
// //                 type="text"
// //                 placeholder="City"
// //               />
// //               <InputField
// //                 handleChange={handleChange}
// //                 address={address}
// //                 name="state"
// //                 type="text"
// //                 placeholder="State"
// //               />
// //             </div>

// //             <div className="grid grid-cols-2 gap-4">
// //               <InputField
// //                 handleChange={handleChange}
// //                 address={address}
// //                 name="zipcode"
// //                 type="number"
// //                 placeholder="Zip code"
// //               />
// //               <InputField
// //                 handleChange={handleChange}
// //                 address={address}
// //                 name="country"
// //                 type="text"
// //                 placeholder="Country"
// //               />
// //             </div>

// //             <InputField
// //               handleChange={handleChange}
// //               address={address}
// //               name="phone"
// //               type="text"
// //               placeholder="Phone"
// //             />

// //             <button className="w-full mt-6 bg-primary text-white py-3 hover:bg-primary-dull transition cursor-pointer uppercase">
// //               Update Address
// //             </button>
// //           </form>
// //         </div>
// //         <img
// //           className="md:mr-16 mb-16 md:mt-0"
// //           src="/path/to/image"
// //           alt="Edit Address"
// //         />
// //       </div>
// //     </div>
// //   );
// // };

// // export default EditAddress;





import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useParams, useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

const InputField = ({ type, placeholder, name, handleChange, address }) => (
  <input
    className="w-full px-2 py-2.5 border border-gray-500/30 rounded outline-none text-gray-500 focus:border-primary transition"
    type={type}
    placeholder={placeholder}
    onChange={handleChange}
    name={name}
    value={address[name]}
    required
  />
);

const AddAddress = () => {
  const { axios, user } = useAppContext();
  const navigate = useNavigate();
  const { id } = useParams(); // address ID from URL

  const [address, setAddress] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  // Fetch address by ID
  const fetchAddress = async () => {
    if (!id) {
      toast.error("Invalid address ID");
      navigate("/cart");
      return;
    }

    try {
      const { data } = await axios.get("/api/address/get");
      if (data.success) {
        const current = data.addresses.find((addr) => addr._id === id);
        if (current) {
          setAddress(current);
        } else {
          toast.error("Address not found");
          navigate("/cart");
        }
      } else {
        toast.error(data.message);
        navigate("/cart");
      }
    } catch (err) {
      toast.error("Failed to fetch address");
      navigate("/cart");
    }
  };

  useEffect(() => {
    if (user) {
      fetchAddress();
    } else {
      navigate("/cart");
    }
  }, [user, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (!id) {
      toast.error("Missing address ID");
      return;
    }

    try {
      const { data } = await axios.put(`/api/address/update/${id}`, {
        address,
      });

      if (data.success) {
        toast.success("Address updated");
        navigate("/cart");
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      toast.error("Update failed");
    }
  };

  return (
    <div className="mt-16 pb-16">
      <p className="text-2xl md:text-3xl text-gray-500">
        Edit Shipping <span className="font-semibold text-primary">Address</span>
      </p>
      <div className="flex flex-col-reverse md:flex-row justify-between mt-10">
        <div className="flex-1 max-w-md">
          <form onSubmit={onSubmitHandler} className="space-y-3 mt-6 text-sm">
            <div className="grid grid-cols-2 gap-4">
              <InputField handleChange={handleChange} address={address} name="firstName" type="text" placeholder="First Name" />
              <InputField handleChange={handleChange} address={address} name="lastName" type="text" placeholder="Last Name" />
            </div>

            <InputField handleChange={handleChange} address={address} name="email" type="email" placeholder="Email Address" />
            <InputField handleChange={handleChange} address={address} name="street" type="text" placeholder="Street" />

            <div className="grid grid-cols-2 gap-4">
              <InputField handleChange={handleChange} address={address} name="city" type="text" placeholder="City" />
              <InputField handleChange={handleChange} address={address} name="state" type="text" placeholder="State" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <InputField handleChange={handleChange} address={address} name="zipcode" type="number" placeholder="Zip code" />
              <InputField handleChange={handleChange} address={address} name="country" type="text" placeholder="Country" />
            </div>

            <InputField handleChange={handleChange} address={address} name="phone" type="text" placeholder="Phone" />

            <button className="w-full mt-6 bg-primary text-white py-3 hover:bg-primary-dull transition cursor-pointer uppercase">
              Update Address
            </button>
          </form>
        </div>
        <img
          className="md:mr-16 mb-16 md:mt-0"
          src="/path/to/image"
          alt="Edit Address"
        />
      </div>
    </div>
  );
};

export default AddAddress;

