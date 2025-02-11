import Link from "next/link";

const Breadcrumb = () => {
  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <h2 className="text-title-md2 font-semibold text-black dark:text-white">
        Show edit
      </h2>

      <nav>
        <ol className="flex items-center gap-2">
          <li>
            <Link className="font-medium" href="#">
              Show /
            </Link>
          </li>
          <li className="font-medium text-primary">Show edit</li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
