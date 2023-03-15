import Image from "next/image";
import profilePic from "@/public/images/profile.png";

const Info = () => {
  return (
    <section className="mt-6 flex items-center justify-center gap-2">
      <div className="w-1/4 overflow-hidden rounded-full border-2 border-solid border-purple-600">
        <Image
          placeholder="blur"
          src={profilePic}
          alt="Profile Image"
          sizes="100%"
        />
      </div>
      <h1 className="text-3xl font-bold">
        안녕하세요<span className="text-purple-600">!</span>
        <br />
        꾸준히 계발하는
        <br />
        개발자 <span className="text-purple-600">이정익</span>입니다.
      </h1>
    </section>
  );
};

export default Info;
