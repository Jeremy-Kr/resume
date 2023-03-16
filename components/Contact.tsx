import Link from "next/link";

const Contact = () => {
  return (
    <section className="mx-auto mt-6 w-full px-2">
      <h2 className="mt-6 text-3xl font-bold">
        <span className="text-emerald-500">C</span>ontact
      </h2>
      <ul className="mt-2 pl-4 text-base">
        <li>
          <Link href="mailto:wjddlr905@gmail.com">
            <span className="text-emerald-500">E</span>mail
          </Link>
        </li>
        <li>
          <Link href="https://github.com/Jeremy-Kr">
            <span className="text-emerald-500">G</span>ithub
          </Link>
        </li>
        <li>
          <Link href="tel:010-4776-7060">
            <span className="text-emerald-500">P</span>hone
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default Contact;
