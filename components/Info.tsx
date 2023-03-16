import Image from "next/image";
import profilePic from "@/public/images/profile.png";

const Info = () => {
  return (
    <section className="mt-6 w-full">
      <div className="flex items-center justify-center gap-2">
        <div className="relative h-32 w-32">
          <Image
            placeholder="blur"
            src={profilePic}
            alt="Profile Image"
            fill
            className="rounded-full border-4 border-emerald-500 object-cover"
          />
        </div>
        <h1 className="text-3xl font-bold">
          안녕하세요<span className="text-emerald-500">!</span>
          <br />
          꾸준히 계발하는
          <br />
          개발자 <span className="text-emerald-500">이정익</span>입니다.
        </h1>
      </div>
      <p className="mt-6 break-keep px-2 text-xl">
        수많은 사람들과의 소통 경험을 바탕으로, 다양한 사람들과의{" "}
        <span className="text-emerald-500">협업</span>에 자신있습니다. 언제나{" "}
        <span className="text-emerald-500">&quot;WHY&quot;</span>를 통해
        객관적인 선택을 하기 위해 노력합니다. 또, 불편함을 느낀다면, 꼭{" "}
        <span className="text-emerald-500">개선</span>하기 위해 노력합니다.
      </p>
    </section>
  );
};

export default Info;
