/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useGetUserByIdQuery } from "@/redux/api/authApi";
import { Phone, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import placeholderImage from "@/assets/placeholders/person.png";
import Link from "next/link";

interface OrderDetailProps {
  isOpen: boolean;
  onClose: () => void;

  order: any;
}

export default function OrderDetailDialog({ isOpen, onClose, order }: OrderDetailProps) {
  const [animationState, setAnimationState] = useState("closed");
  const [isTrackingOpen, setIsTrackingOpen] = useState(false);

  const { data: userData } = useGetUserByIdQuery(order?.userId, {
    skip: !order?.userId,
  });

  useEffect(() => {
    if (isOpen) {
      setAnimationState("opening");
      const timer = setTimeout(() => {
        setAnimationState("open");
      }, 10);
      return () => clearTimeout(timer);
    } else {
      setAnimationState("closing");
      const timer = setTimeout(() => {
        setAnimationState("closed");
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (animationState === "closed" && !isOpen) return null;

  const openTracking = () => {
    setIsTrackingOpen(true);
  };

  const closeTracking = () => {
    setIsTrackingOpen(false);
  };

  return (
    <>
      <div className="flex flex-col w-[1000px] h-[984px] p-6 items-start gap-6 flex-shrink-0">
        <div
          className={`fixed inset-0 flex items-center justify-center z-50 p-4 transition-all duration-300 ease-in-out ${
            animationState === "open" ? "bg-opacity-50 bg-black/80" : "bg-opacity-0"
          }`}
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          <div
            className={`bg-white rounded-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto transition-all duration-300 ease-in-out ${
              animationState === "open" ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-4"
            }`}
          >
            <div className="p-6">
              {/* Header */}
              <div className="flex justify-between items-start mb-6 gap-5">
                <div>
                  <h2 className="text-black md:text-2xl font-semibold leading-[30px] tracking-[-0.24px]">
                    Order Detail
                  </h2>
                  <div className="mt-2">
                    <p className="text-[#8C8C8C] text-sm md:text-md font-medium leading-[20px] tracking-[-0.16px]">
                      Order ID
                    </p>
                    <p className="text-black text-md md:text-xl font-semibold leading-[28px] tracking-[-0.2px]">
                      {order?.id || "N/A"}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col-reverse items-end gap-4">
                  <Link
                    // track-order?orderId=ee64341b-1c81-48c7-b5b5-b95dd46aa3e8
                    href={`/track-order?orderId=${order?.id}`}
                    className="w-full md:w-auto"
                  >
                    <button
                      className="flex items-center md:gap-2 px-2 md:px-3 py-2 border rounded-md bg-white text-sm font-medium hover:bg-gray-50 transition-colors"
                      onClick={openTracking}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-4 w-4 md:h-6 md:w-6"
                      >
                        <path
                          d="M15 2V12C15 13.1 14.1 14 13 14H2V6C2 3.79 3.79 2 6 2H15Z"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M22 14V17C22 18.66 20.66 20 19 20H18C18 18.9 17.1 18 16 18C14.9 18 14 18.9 14 20H10C10 18.9 9.1 18 8 18C6.9 18 6 18.9 6 20H5C3.34 20 2 18.66 2 17V14H13C14.1 14 15 13.1 15 12V5H16.84C17.56 5 18.22 5.39001 18.58 6.01001L20.29 9H19C18.45 9 18 9.45 18 10V13C18 13.55 18.45 14 19 14H22Z"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M8 22C9.10457 22 10 21.1046 10 20C10 18.8954 9.10457 18 8 18C6.89543 18 6 18.8954 6 20C6 21.1046 6.89543 22 8 22Z"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M16 22C17.1046 22 18 21.1046 18 20C18 18.8954 17.1046 18 16 18C14.8954 18 14 18.8954 14 20C14 21.1046 14.8954 22 16 22Z"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M22 12V14H19C18.45 14 18 13.55 18 13V10C18 9.45 18.45 9 19 9H20.29L22 12Z"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      View Tracking
                    </button>
                  </Link>
                  <button onClick={onClose} className="text-gray-500 hover:text-gray-700 transition-colors">
                    <X className="h-6 w-6" />
                  </button>
                </div>
              </div>

              {/* Order Details */}
              <div className="grid grid-cols-6 gap-4 mb-6">
                <div className="col-span-6 md:col-span-4 flex justify-between items-center">
                  <div>
                    <p className="text-[#8C8C8C] text-xs md:text-sm font-medium leading-[20px] tracking-[-0.28px]">
                      Delivery Status
                    </p>
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        order?.orderStatus === "Delivered"
                          ? "bg-green-100 text-green-800"
                          : order?.orderStatus === "Shipping"
                          ? "text-[#003DF6]"
                          : "text-[#cc4015]"
                      }`}
                    >
                      {order?.orderStatus || "N/A"}
                    </span>
                  </div>
                  <div>
                    <p className="text-[#8C8C8C] text-xs md:text-sm font-medium leading-[20px] tracking-[-0.28px]">
                      Payment Status
                    </p>
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        order?.paymentStatus === "Paid" ? "text-[#53C31B]" : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {order?.paymentStatus || "N/A"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Customer Info */}
              <div className="border rounded-lg p-4 mb-6 flex flex-col gap-6">
                <h3 className="text-black text-lg font-semibold leading-[20px] tracking-[-0.16px]">CUSTOMER & ORDER</h3>
                <div className="flex flex-col md:flex-row items-start gap-1">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="h-12 w-12  overflow-hidden">
                      <Image
                        src={userData?.data?.profileImage || placeholderImage}
                        alt={userData?.data?.name || "Customer"}
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-black text-sm font-medium leading-[20px] tracking-[-0.28px]">
                        {userData?.data?.name || "N/A"}
                      </p>
                      <p className="text-[#8C8C8C] text-sm font-normal leading-[20px] tracking-[-0.14px]">
                        {userData?.data?.email || "N/A"}
                      </p>
                    </div>
                  </div>
                  <button className="flex items-center gap-2 px-3 py-2 border rounded-md hover:bg-gray-50 transition-colors">
                    <Phone className="h-4 w-4" />
                    <span className="text-sm">{userData?.data?.phoneNumber || "N/A"}</span>
                  </button>
                </div>
              </div>

              {/* Items Ordered */}
              <div className="overflow-hidden flex flex-col gap-2 md:gap-4 mb-6">
                <h3 className="text-black text-xs md:text-base font-semibold leading-[20px] tracking-[-0.16px]">
                  ITEMS ORDERED
                </h3>
                <table className="w-full overflow-x-scroll">
                  <thead className="bg-[#F0F0F0]">
                    <tr>
                      <th className="text-left p-4 text-sm font-medium text-gray-500">Product ID</th>
                      <th className="text-left p-4 text-sm font-medium text-gray-500">Quantity</th>
                      <th className="text-left p-4 text-sm font-medium text-gray-500">Price</th>
                      <th className="text-left p-4 text-sm font-medium text-gray-500">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {order?.orderItems?.map((item: any) => (
                      <tr key={item.id}>
                        <td className="p-4 text-sm">{item.productId}</td>
                        <td className="p-4 text-sm">x{item.quantity}</td>
                        <td className="p-4 text-sm">${item.price.toFixed(2)}</td>
                        <td className="p-4 text-sm">${(item.quantity * item.price).toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Order Tracking Dialog */}
      {isTrackingOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg">
            <h2 className="text-lg font-semibold mb-4">Order Tracking</h2>
            <p>Tracking details will go here...</p>
            <button onClick={closeTracking} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md">
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
