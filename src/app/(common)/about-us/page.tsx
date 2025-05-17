import aboutImage from "@/assets/about.jpg";
import BreadCrumb from "@/components/home/BreadCrumb";
import Image from "next/image";

const data = [
  {
    name: "Kevin Gilbert",
    title: "Chief Executive Officer",
  },
  {
    name: "Kevin Gilbert",
    title: "Assistant of CEO",
  },
  {
    name: "Kevin Gilbert",
    title: "Head of Designer",
  },
  {
    name: "Kevin Gilbert",
    title: "UX Designer",
  },
  {
    name: "Kevin Gilbert",
    title: "Product Designer",
  },
  {
    name: "Kevin Gilbert",
    title: "Head of Development",
  },
  {
    name: "Kevin Gilbert",
    title: "Design Engineer",
  },
  {
    name: "Kevin Gilbert",
    title: "UI Designer",
  },
];

const AboutUs = () => {
  return (
    <div className="container ">
      <div className="mt-5">
        <BreadCrumb breads={["Home", "About us"]} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        <div>
          <Image className="max-h-[536px]" src={aboutImage.src} alt="about-us" width={1920} height={600} />
        </div>

        <div className="mb-10">
          <p className="rounded-[2px] bg-primary flex p-[8px_16px] justify-center items-center gap-[10px] w-fit text-white">
            WHO WE ARE
          </p>
          <h1 className="text-[#191C1F] md:text-5xl text-2xl font-semibold leading-[48px] mt-5">
            RandM Tornado Germany
          </h1>
          <p className="text-[#475156] text-[16px] font-normal leading-[30px]">
            Since its founding, Fumot has established itself as a pioneer in the field of vaping. With its innovative
            approach and commitment to quality, Fumot has revolutionized the industry and delighted millions of vapers
            worldwide.
            <br />
            <br />
            One of their standout brands is undoubtedly RandM. This line of e-cigarettes combines style, performance,
            and ease of use in a unique way. With a wide range of devices, RandM offers the right product for every
            vaper, whether a beginner or a seasoned enthusiast. From sleek, portable pods to powerful mod boxes, RandM
            offers unparalleled variety.
            <br />
            <br />
            The Tornado series of mods is particularly noteworthy. The Tornado 7000, 9000, 10000, and 15000 models are
            not only technical masterpieces, but also a statement for the future of vaping. With their powerful
            batteries, intelligent chipsets, and premium atomizers, these devices offer an unparalleled vaping
            experience. The Tornado series is known for its exceptional vapor production, intense flavor, and long
            battery life, making it the first choice for discerning vapers.
            <br />
            <br />
            But Fumot isn&apos;t just about products; it&apos;s also about a mission. The company is actively committed
            to educating people about safe vaping and works closely with experts and regulators to ensure the highest
            standards in the industry. Fumot is proud to have a positive impact on the community and promote vaping as
            an alternative to smoking.
            <br />
            <br />
            In a world where health and well-being are becoming increasingly important, Fumot is a leader in the
            development of high-quality, safe, and innovative vaping products. With RandM and the Tornado series of
            vapes, the company is setting the standard for the future of vaping and inspiring vapers worldwide to pursue
            their passion for vaping.
          </p>
        </div>
      </div>

      <h1 className="text-[#191C1F] text-center text-[32px] font-semibold leading-[40px]">Our core team member</h1>
      <div className="grid grid-cols-1 mt-10 mb-20 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="rounded-[3px] border border-[#E4E7E9] bg-white flex  p-[24px] justify-center items-center gap-[16px] flex-shrink-0"
            >
              <Image src="https://avatar.iran.liara.run/public" alt="avatar" width={100} height={100} />
              <div className="flex flex-col gap-2">
                <h2 className="text-[#191C1F] text-[16px] font-semibold leading-[24px]">{item.name}</h2>
                <p className="text-[#475156] text-[14px] font-normal leading-[20px]">{item.title}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AboutUs;
