import Link from "next/link";
// import { useRouter } from "next/navigation";

export const generatePageLinks = (pageCount: number, router: any) => {
  // const router = useRouter()
  const links = [];

  for (let i = 0; i < pageCount; i++) {
    links.push(
      <button
        key={i}
        onClick={() => router.replace(`/${i + 1}`)}
        className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
        // onClick={() => handlePageChange(i)}
      >
        {i + 1}
      </button>
    );
  }

  return links;
};
const handlePageChange = (selected: any) => {
  const page = selected.selected + 1;
  console.log(1);
  // router.push(`/products?page=${page}`);
};
