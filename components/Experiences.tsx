const Experiences = () => {
  return (
    <section className="mx-auto mt-6 w-full px-2">
      <h2 className="mt-6 text-3xl font-bold">
        <span className="text-emerald-500">E</span>xperiences
      </h2>
      <div className="flex flex-col items-start md:flex-row">
        <div className="md: w-1/3">
          <h3 className="mt-6 text-2xl font-bold">
            <span className="text-emerald-500">내</span>일배움캠프
          </h3>
          <p className="text-base font-normal">
            React 4기
            <br />
            22.10.31 ~ 23.03.13
          </p>
        </div>
        <div>
          <p className="mt-4 text-lg font-bold">
            <span className="text-emerald-500">D</span>escription
          </p>
          <p className="text-base font-normal">
            - 스파르타 코딩클럽에서 진행하는 코딩 부트캠프
          </p>
          <div className="ml-4">
            <p className="text-base font-normal">
              - 5개월간 4개의 팀 프로젝트 진행
              <br />
              - 프로젝트, Github을 통한 협업 경험
              <br />- React.js, TypeScript, Next.js, Redux외 다수 개발경험
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
