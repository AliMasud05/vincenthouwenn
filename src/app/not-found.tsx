import Navbar from "@/components/shared/Navbar";
import Image from "next/image";
import errorPhoto from "@/assets/notfound.png";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Footer from "@/components/shared/Footer";

export default function NotFound() {
  return (
    <div>
      <Navbar />
      <div className="flex items-center flex-col  justify-center pb-20 p-4">
        <Image src={errorPhoto} alt="404" width={500} height={500} />
        <div className="flex items-center justify-center flex-col max-w-[536px] text-center">
          <p className="text-[#191C1F] text-center text-[36px] font-semibold leading-[44px] font-['Public_Sans'] mb-5">
            404, Page not found
          </p>
          <p className="text-[#475156] text-center text-base font-normal leading-6 font-['Public_Sans']">
            Something went wrong. It’s look that your requested could not be found. It’s look like the link is broken or
            the page is removed.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-4">
            <Link
              href="javascript:history.back()"
              className="px-6 py-2 flex justify-center items-center gap-2 text-white rounded-sm bg-primary text-w"
            >
              <ArrowLeft /> Go Back
            </Link>
            <Link
              href={"/"}
              className="px-6 py-2 flex justify-center items-center gap-2 rounded-sm bg-white border border-primary"
            >
              {" "}
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                  <path
                    d="M12.375 16.2498V12.4998C12.375 12.334 12.3092 12.1751 12.1919 12.0579C12.0747 11.9406 11.9158 11.8748 11.75 11.8748H9.25C9.08424 11.8748 8.92527 11.9406 8.80806 12.0579C8.69085 12.1751 8.625 12.334 8.625 12.4998V16.2498C8.625 16.4156 8.55915 16.5745 8.44194 16.6917C8.32473 16.809 8.16576 16.8748 8 16.8748H4.25C4.08424 16.8748 3.92527 16.809 3.80806 16.6917C3.69085 16.5745 3.625 16.4156 3.625 16.2498V9.02324C3.6264 8.93674 3.64509 8.8514 3.67998 8.77224C3.71486 8.69308 3.76523 8.6217 3.82812 8.5623L10.0781 2.88261C10.1933 2.77721 10.3438 2.71875 10.5 2.71875C10.6562 2.71875 10.8067 2.77721 10.9219 2.88261L17.1719 8.5623C17.2348 8.6217 17.2851 8.69308 17.32 8.77224C17.3549 8.8514 17.3736 8.93674 17.375 9.02324V16.2498C17.375 16.4156 17.3092 16.5745 17.1919 16.6917C17.0747 16.809 16.9158 16.8748 16.75 16.8748H13C12.8342 16.8748 12.6753 16.809 12.5581 16.6917C12.4408 16.5745 12.375 16.4156 12.375 16.2498Z"
                    stroke="#A71D3C"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>{" "}
              Go To home
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
