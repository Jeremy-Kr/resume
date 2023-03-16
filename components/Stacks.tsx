const Stacks = () => {
  return (
    <section className="mx-auto mt-6 w-full px-2">
      <h2 className="mt-6 text-4xl font-bold">
        <span className="text-emerald-500">S</span>tacks
      </h2>
      <div className="mt-4">
        <ul className="flex flex-col 2xl:flex-row 2xl:items-center 2xl:justify-between">
          <li className="flex items-center text-xl font-bold">
            <div className="w-1/2 2xl:w-auto">
              <span className="text-emerald-500">L</span>
              <span>anguage</span>
            </div>
            <ul className="ml-4 text-lg font-normal">
              <li>JavaScript</li>
              <li>TypeScript</li>
            </ul>
          </li>
          <li className="mt-4 flex items-center text-xl font-bold 2xl:ml-4 2xl:mt-0 ">
            <div className="w-1/2 2xl:w-auto">
              <span className="text-emerald-500">F</span>
              <span>rameWork</span>
            </div>
            <ul className="ml-4 text-lg font-normal">
              <li>Next.js</li>
              <li>React Native</li>
            </ul>
          </li>
          <li className="mt-4 flex items-center text-xl font-bold 2xl:ml-4 2xl:mt-0 ">
            <div className="w-1/2 2xl:w-auto">
              <span className="text-emerald-500">S</span>
              <span>tateManagement</span>
            </div>
            <ul className="ml-4 text-lg font-normal">
              <li>Redux</li>
              <li>Recoil</li>
              <li>React-query</li>
            </ul>
          </li>
          <li className="mt-4 flex items-center text-xl font-bold 2xl:ml-4 2xl:mt-0 ">
            <div className="w-1/2 2xl:w-auto">
              <span className="text-emerald-500">S</span>
              <span>tyle</span>
            </div>
            <ul className="ml-4 text-lg font-normal">
              <li>Styled-components</li>
              <li>Tailwind CSS</li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Stacks;
