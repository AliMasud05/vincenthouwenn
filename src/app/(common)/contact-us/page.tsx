// "use client";

// import type React from "react";

// import { useState } from "react";
// import { MapPin, Phone } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import BreadCrumb from "@/components/home/BreadCrumb";
// import { useContactUsMutation } from "@/redux/api/authApi";
// import { toast } from "sonner";
// import { FaSpinner } from "react-icons/fa";

// export default function ContactForm() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const [contactUsFn, { isLoading: contactUsLoading }] = useContactUsMutation();

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     // Handle form submission logic here
// ;
//     //   {
//     //     "name": "John Doe",
//     //     "email": "belalhossain22000@gmail.com",
//     //     "subject": "Product Inquiry",
//     //     "message": "Hello, I would like to know more about your vaping products. Specifically, I'm interested in the battery life and charging capabilities."
//     // }
//     // Reset form after submission

//     try {
//       const res = await contactUsFn({
//         name: formData.name,
//         email: formData.email,
//         subject: formData.subject,
//         message: formData.message,
//       }).unwrap();

//       if (res.success) {
//         toast.success(res.message);
//       }

//       // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     } catch (error: any) {
//       console.error(error);
//       toast.error(error?.data?.message || "An error occurred. Please try again.");
//     }

//     setFormData({ name: "", email: "", subject: "", message: "" });
//   };

//   return (
//     <div className="">
//       <div className="container mx-auto py-6 px-4">
//         <BreadCrumb breads={["Home", "Contact Us"]} />
//         <div className="max-w-4xl mx-auto px-4 py-12">
//           <div className="text-center mb-10">
//             <h2 className="text-2xl font-bold mb-2">Get In Touch With Us</h2>
//             <p className="text-sm text-muted-foreground max-w-xl mx-auto">
//               For More Information On Our Products & Services, Please Contact Us And We&apos;ll Get Back To You As Soon
//               As Possible.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             <div className="space-y-8">
//               <div className="space-y-2">
//                 <div className="flex items-start gap-2">
//                   <MapPin className="h-5 w-5 mt-0.5" />
//                   <div>
//                     <h3 className="font-medium">Address</h3>
//                     <p className="text-sm">248 5th Avenue, New York</p>
//                     <p className="text-sm">10001, United States</p>
//                   </div>
//                 </div>
//               </div>

//               <div className="space-y-2">
//                 <div className="flex items-start gap-2">
//                   <Phone className="h-5 w-5 mt-0.5" />
//                   <div>
//                     <h3 className="font-medium">Phone</h3>
//                     <p className="text-sm">Office: +1(234) 567-8790</p>
//                     <p className="text-sm">Mobile: +1(234) 567-8790</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="md:col-span-2">
//               <form onSubmit={handleSubmit} className="space-y-4">
//                 <div>
//                   <label htmlFor="name" className="">
//                     Your name
//                   </label>
//                   <Input
//                     id="name"
//                     name="name"
//                     placeholder="Your name"
//                     className="mt-3"
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="email" className="">
//                     Email address
//                   </label>
//                   <Input
//                     id="email"
//                     name="email"
//                     type="email"
//                     placeholder="Email address"
//                     className="mt-3"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="subject" className="">
//                     Subject
//                   </label>
//                   <Input
//                     id="subject"
//                     name="subject"
//                     className="mt-3"
//                     placeholder="Subject"
//                     value={formData.subject}
//                     onChange={handleChange}
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="message" className="">
//                     Message
//                   </label>
//                   <Textarea
//                     id="message"
//                     name="message"
//                     placeholder="Hi! I'd like to ask about..."
//                     className="mt-3"
//                     rows={4}
//                     value={formData.message}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>

//                 <div>
//                   <Button
//                     disabled={
//                       !formData.name || !formData.email || !formData.subject || !formData.message || contactUsLoading
//                     }
//                     type="submit"
//                     className="w-fit bg-primary hover:bg-primary/90 flex gap-2 cursor-pointer text-white"
//                   >
//                     {contactUsLoading ? (
//                       <>
//                         {" "}
//                         Submitting   <FaSpinner className="animate-spin ml-2" />
//                       </>
//                     ) : (
//                       "Submit"
//                     )}
//                   </Button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//       <iframe
//         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d143983.75196029973!2d-90.15077533398315!3d38.40398504027489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sbd!4v1742744189199!5m2!1sen!2sbd"
//         width="600"
//         height="450"
//         style={{ border: 0 }}
//         loading="lazy"
//         referrerPolicy="no-referrer-when-downgrade"
//         className="w-full h-96"
//       ></iframe>
//     </div>
//   );
// }

import React from 'react'

const page = () => {
  return (
    <div>page</div>
  )
}

export default page