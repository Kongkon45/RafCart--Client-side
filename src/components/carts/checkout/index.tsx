"use client";
import Link from "next/link";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { FaAngleDoubleRight } from "react-icons/fa";
import { useSelector } from "react-redux";

interface IFormInput {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  city: string;
  address: string;
  zipCode: number;
  checkbox: boolean;
  subTotal: number;
  productId: string;
}

const districts = [
  "Bagerhat",
  "Bandarban",
  "Barguna",
  "Barishal",
  "Bhola",
  "Bogura",
  "Brahmanbaria",
  "Chandpur",
  "Chattogram",
  "Chuadanga",
  "Cumilla",
  "Cox's Bazar",
  "Dhaka",
  "Dinajpur",
  "Faridpur",
  "Feni",
  "Gaibandha",
  "Gazipur",
  "Gopalganj",
  "Habiganj",
  "Jamalpur",
  "Jashore (Jessore)",
  "Jhalokati",
  "Jhenaidah",
  "Joypurhat",
  "Khagrachhari",
  "Khulna",
  "Kishoreganj",
  "Kurigram",
  "Kushtia",
  "Lakshmipur",
  "Lalmonirhat",
  "Madaripur",
  "Magura",
  "Manikganj",
  "Meherpur",
  "Moulvibazar",
  "Munshiganj",
  "Mymensingh",
  "Naogaon",
  "Narail",
  "Narayanganj",
  "Narsingdi",
  "Natore",
  "Netrokona",
  "Nilphamari",
  "Noakhali",
  "Pabna",
  "Panchagarh",
  "Patuakhali",
  "Pirojpur",
  "Rajbari",
  "Rajshahi",
  "Rangamati",
  "Rangpur",
  "Satkhira",
  "Shariatpur",
  "Sherpur",
  "Sirajganj",
  "Sunamganj",
  "Sylhet",
  "Tangail",
  "Thakurgaon",
  "Habiganj",
];

const CheckoutPage = () => {
  const productItem = useSelector((state: any) => state.carts.carts);
  // console.log(productItem);

  const totalPrice = productItem.reduce(
    (total: any, item: any) => total + item.quantity * item.price,
    0
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    data.subTotal = totalPrice;
    // data.productId = productItem.map((id:any)=>id._id === productItem._id)
    console.log(data);

    // https://raf-cart-server-side.vercel.app/

    fetch("https://raf-cart-server-side.vercel.app/api/order", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        window.location.replace(result.url);
        console.log(result);
      });
    // reset();
  };
  return (
    <div>
      <div className="flex justify-end mr-10 mt-4">
        <button className="flex justify-center items-center gap-2 text-sm font-semibold hover:bg-[#fd3d57] hover:text-white border border-[#fd3d57] rounded-lg text-[#fd3d57] py-1 px-4 transition-all ease-in-out duration-700">
          <Link href={`/cart`}>Back</Link>
          <FaAngleDoubleRight />
        </button>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="lg:flex w-full mt-6 lg:px-0 px-10">
          <div className="lg:w-2/4 w-full mx-auto">
            <h2 className="w-full lg:text-xl text-md font-semibold rounded-lg text-center bg-[#e9e4e4] text-black pl-10 py-1 ">
              Billing Details
            </h2>
            <div className="border-2 rounded-lg p-6 my-6">
              <div className="flex gap-10 items-center">
                <div className="w-1/2">
                  <label className="text-md font-bold" htmlFor="firstName">
                    First Name :{" "}
                    <span className="text-md text-[#fd3d57]">*</span>
                  </label>{" "}
                  <br />
                  <input
                    className="w-full border-2 hover:border-[#fd3d57] rounded-md py-1 px-2 text-sm"
                    placeholder="Enter your name..."
                    type="text"
                    {...register("firstName", { required: true })}
                  />
                  {errors.firstName && (
                    <span className="text-[#fd3d57] text-sm">
                      This field is required
                    </span>
                  )}
                </div>
                <div className="w-1/2">
                  <label className="text-md font-bold" htmlFor="lastName">
                    Last Name :{" "}
                    <span className="text-md text-[#fd3d57]">*</span>
                  </label>{" "}
                  <br />
                  <input
                    className="w-full text-sm border-2 hover:border-[#fd3d57] rounded-md py-1 px-2 "
                    placeholder="Enter your lastName..."
                    type="text"
                    {...register("lastName", { required: true })}
                  />
                  {errors.lastName && (
                    <span className="text-[#fd3d57] text-sm">
                      This field is required
                    </span>
                  )}
                </div>
              </div>
              <div className="my-4">
                <label className="text-md font-bold" htmlFor="email">
                  Email Address :{" "}
                  <span className="text-md text-[#fd3d57]">*</span>
                </label>{" "}
                <br />
                <input
                  className="w-full text-sm border-2 hover:border-[#fd3d57] rounded-md py-1 px-2 "
                  placeholder="Enter your email..."
                  type="email"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-[#fd3d57] text-sm">
                    This field is required
                  </span>
                )}
              </div>
              <div className="my-4">
                <label className="text-md font-bold" htmlFor="phoneNumber">
                  Phone Number :{" "}
                  <span className="text-md text-[#fd3d57]">*</span>
                </label>{" "}
                <br />
                <input
                  className="w-full text-sm border-2 hover:border-[#fd3d57] rounded-md py-1 px-2 "
                  placeholder="Enter your phone number..."
                  type="string"
                  {...register("phoneNumber", { required: true })}
                />
                {errors.phoneNumber && (
                  <span className="text-[#fd3d57] text-sm">
                    This field is required
                  </span>
                )}
              </div>
              <div className="my-4">
                <label className="text-md font-bold" htmlFor="address">
                  Street Address :{" "}
                  <span className="text-md text-[#fd3d57]">*</span>
                </label>{" "}
                <br />
                <input
                  className="w-full text-sm border-2 hover:border-[#fd3d57] rounded-md py-1 px-2 "
                  placeholder="Enter your Address..."
                  type="text"
                  {...register("address", { required: true })}
                />
                {errors.address && (
                  <span className="text-[#fd3d57] text-sm">
                    This field is required
                  </span>
                )}
              </div>
              <div className="flex gap-10 my-4">
                <div className="w-1/2">
                  <label className="text-md font-bold" htmlFor="town/city">
                    Town/City :{" "}
                    <span className="text-md text-[#fd3d57]">*</span>
                  </label>{" "}
                  <br />
                  <select
                    className="w-full text-sm border-2 hover:border-[#fd3d57] rounded-md py-1 px-2"
                    {...register("city", { required: true })}
                  >
                    <option value="">Select Town/City</option>
                    {districts.map((district, index) => (
                      <option key={index} value={district}>
                        {district}
                      </option>
                    ))}
                  </select>
                  {errors.city && (
                    <span className="text-[#fd3d57] text-sm">
                      This field is required
                    </span>
                  )}
                </div>
                <div className="w-1/2">
                  <label className="text-md font-bold" htmlFor="zipCode">
                    Zip Code : <span className="text-md text-[#fd3d57]">*</span>
                  </label>{" "}
                  <br />
                  <input
                    className="w-full text-sm border-2 hover:border-[#fd3d57] rounded-md py-1 px-2 "
                    placeholder="Enter zip code..."
                    type="text"
                    {...register("zipCode", { required: true })}
                  />
                  {errors.zipCode && (
                    <span className="text-[#fd3d57] text-sm">
                      This field is required
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/4 w-full mx-auto">
            <h2 className="w-full lg:text-xl text-md rounded-lg font-semibold text-center bg-[#e9e4e4] text-black pl-10 py-1 ">
              Your Order
            </h2>
            <div className="mt-6 border-2 rounded-lg p-4">
              <h2 className="text-center lg:text-xl text-md font-bold my-3">
                Products
              </h2>
              <hr className="border mb-4" />
              <ul>
                {productItem.length === 0 ? (
                  <li className="lg:text-2xl text-xl font-bold text-center">
                    Cart Not Found
                  </li>
                ) : (
                  productItem?.map((product: any) => {
                    return (
                      <li
                        key={product._id}
                        className="flex justify-between items-center"
                      >
                        <img
                          className="w-12 h-12"
                          src={`${product.image}`}
                          alt={`${product.title}`}
                        />
                        <h5 className="lg:text-md text-sm font-semibold">
                          {product.title}
                        </h5>
                        <p className="lg:text-md text-sm font-semibold">
                          {product.price}
                        </p>
                        <p className="lg:text-md text-sm font-semibold">
                          X{product.quantity}
                        </p>
                        <p className="lg:text-md text-sm font-bold">
                          {product.quantity * product.price}
                        </p>
                      </li>
                    );
                  })
                )}
              </ul>
              <div className="mt-6 mb-2">
                <hr className="border my-2" />
                <h5 className="text-md font-bold flex justify-between items-center">
                  Subtotal <span>${totalPrice}</span>
                </h5>
                <hr className="border my-2" />
                <h5 className="text-md font-bold flex justify-between items-center">
                  Shipping <span>Free</span>
                </h5>
                <hr className="border my-2" />
                <h5 className="text-md font-bold flex justify-between items-center">
                  Total <span>${totalPrice}</span>
                </h5>
                <hr className="border my-2" />
                <div className="flex items-center gap-2 mt-6">
                  <input
                    className="lg:w-4 w-3 lg:h-4 h-3"
                    type="checkbox"
                    {...register("checkbox", { required: true })}
                  />
                  <label className="lg:text-md text-sm " htmlFor="checkbox">
                    Agree to our Terms & Conditons
                  </label>
                </div>
                {errors.checkbox && (
                  <span className="text-[#fd3d57] text-sm">
                    This field is required
                  </span>
                )}
                <button
                  className="w-full text-md mt-6 bg-[#fd3d57] text-white py-2 px-4 rounded-lg hover:border-2 hover:bg-white hover:text-[#fd3d57] hover:border-[#fd3d57] transition-all duration-200 ease-in-out "
                  type="submit"
                >
                  PLACE ORDER
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CheckoutPage;
