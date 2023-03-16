import Link from "next/link";

const Projects = () => {
  return (
    <section className="mx-auto mt-6 w-full px-2">
      <h2 className="mt-6 text-3xl font-bold">
        <span className="text-emerald-500">P</span>rojects
      </h2>
      <div className="flex flex-col">
        <h3 className="mt-6 text-2xl font-bold">
          <span className="text-emerald-500">C</span>odefolio
        </h3>
        <p className="mt-2 text-base font-normal">
          <Link
            target="_blank"
            href="https://github.com/react-challengers/Codefolio"
          >
            Codefolio Github
          </Link>
          <br />
          <Link target="_blank" href="https://code-folio.vercel.app/">
            Live Demo
          </Link>
          <br />
          23.02.06 ~ 23.03.13
        </p>
      </div>
      <div className="flex flex-col">
        <p className="mt-4 text-lg font-bold">
          <span className="text-emerald-500">P</span>roject Overview
        </p>
        <p className="mt-2 text-base">
          <Link
            target="_blank"
            href="https://jeremy-kr.notion.site/CodeFolio-Overview-6c02f39f8bdc47c7a7eb821329b5c90a"
          >
            Codefolio 프로젝트 개요
          </Link>
        </p>
        <p className="mt-4 text-lg font-bold">
          <span className="text-emerald-500">D</span>escription
        </p>
        <p className="mt-2 text-base font-normal">
          - 스파르타 코딩클럽 내일배움캠프 4기 최종 프로젝트
          <br />- Designer1, Front-end5
          <br />- Front-end Team Leader
        </p>
        <p className="mt-4 text-lg font-bold">
          <span className="text-emerald-500">W</span>hat did I do
        </p>
        <p className="mt-2 text-base font-normal">
          - 디자이너 - 개발팀 사이 의견 조율 및 소통
          <br />
          <Link
            target="_blank"
            href="https://github.com/react-challengers/Codefolio/pull/225"
          >
            - 디테일 모달 로직 개선으로 로딩속도 60% 개선
          </Link>
          <br />
          <Link
            target="_blank"
            href="https://github.com/react-challengers/Codefolio/pull/236"
          >
            - 옵티미스틱 업데이트 적용으로 반응속도 60% 개선
          </Link>
          <br />
          <Link
            target="_blank"
            href="https://github.com/react-challengers/Codefolio/pull/387"
          >
            - 폰트 최적화로 light house 점수 25점 향상
          </Link>
          <br />
          <Link
            target="_blank"
            href="https://github.com/react-challengers/Codefolio/pull/325"
          >
            - throttle 적용
          </Link>
        </p>
        <p className="mt-4 text-lg font-bold">
          <span className="text-emerald-500">T</span>ech Stack
        </p>
        <p className="mt-2 text-base font-normal">
          Next.js, TypeScript, Recoil, React-query
        </p>
      </div>
    </section>
  );
};

export default Projects;
