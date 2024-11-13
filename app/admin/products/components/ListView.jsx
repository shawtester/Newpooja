"use client";

import { useProducts } from "@/lib/firestore/products/read";
import { deleteProduct } from "@/lib/firestore/products/write";
import { Button, CircularProgress } from "@nextui-org/react";
import { Edit2, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

// Mocked category data (replace this with actual data fetching logic if needed)
const categoryMap = {
  "fJZRqz9iSXVQ6YJ3x12w": "Skin Treatment",
  "ckhPZiyZe5v2f8DUKKKR":"Hair Treatment",
  "OxMtZurqzi9zyGKrWGza":"Hair Colours",
  "prDsTOKVJVUOPw3ImM7t":"Makeup",
  "cCqEOI1tDhk7HdMKqncv":"Nails Treatment",

 
};

export default function ListView() {
  const [pageLimit, setPageLimit] = useState(10);
  const [lastSnapDocList, setLastSnapDocList] = useState([]);

  useEffect(() => {
    setLastSnapDocList([]);
  }, [pageLimit]);

  const {
    data: products,
    error,
    isLoading,
    lastSnapDoc,
  } = useProducts({
    pageLimit: pageLimit,
    lastSnapDoc:
      lastSnapDocList?.length === 0
        ? null
        : lastSnapDocList[lastSnapDocList?.length - 1],
  });

  const handleNextPage = () => {
    let newStack = [...lastSnapDocList];
    newStack.push(lastSnapDoc);
    setLastSnapDocList(newStack);
  };

  const handlePrePage = () => {
    let newStack = [...lastSnapDocList];
    newStack.pop();
    setLastSnapDocList(newStack);
  };

  if (isLoading) {
    return (
      <div>
        <CircularProgress />
      </div>
    );
  }
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="flex-1 flex flex-col gap-3 md:pr-5 md:px-0 px-5 rounded-xl w-full overflow-x-auto">
      <table className="border-separate border-spacing-y-3">
        <thead>
          <tr>
            <th className="font-semibold border-y bg-white px-3 py-2 border-l rounded-l-lg">SN</th>
            <th className="font-semibold border-y bg-white px-3 py-2">Image</th>
            <th className="font-semibold border-y bg-white px-3 py-2 text-left">Title</th>
            <th className="font-semibold border-y bg-white px-3 py-2 text-left">Price</th>
            <th className="font-semibold border-y bg-white px-3 py-2 text-left">Stock</th>
            <th className="font-semibold border-y bg-white px-3 py-2 text-left">Category</th>
            <th className="font-semibold border-y bg-white px-3 py-2 border-r rounded-r-lg text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((item, index) => {
            return (
              <Row
                index={index + lastSnapDocList?.length * pageLimit}
                item={item}
                key={item?.id}
              />
            );
          })}
        </tbody>
      </table>

      <div className="flex justify-between text-sm py-3">
        <Button
          isDisabled={isLoading || lastSnapDocList?.length === 0}
          onClick={handlePrePage}
          size="sm"
          variant="bordered"
        >
          Previous
        </Button>
        <select
          value={pageLimit}
          onChange={(e) => setPageLimit(e.target.value)}
          className="px-5 rounded-xl"
          name="perpage"
          id="perpage"
        >
          <option value={3}>3 Items</option>
          <option value={5}>5 Items</option>
          <option value={10}>10 Items</option>
          <option value={20}>20 Items</option>
          <option value={100}>100 Items</option>
        </select>
        <Button
          isDisabled={isLoading || products?.length === 0}
          onClick={handleNextPage}
          size="sm"
          variant="bordered"
        >
          Next
        </Button>
      </div>
    </div>
  );
}

function Row({ item, index }) {
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();

  const handleDelete = async () => {
    if (!confirm("Are you sure?")) return;

    setIsDeleting(true);
    try {
      await deleteProduct({ id: item?.id });
      toast.success("Successfully Deleted");
    } catch (error) {
      toast.error(error?.message);
    }
    setIsDeleting(false);
  };

  const handleUpdate = () => {
    router.push(`/admin/products/form?id=${item?.id}`);
  };

  const firstImage = item?.imageList && item?.imageList[0];
  const categoryName = categoryMap[item?.categoryId] || "Unknown Category";

  return (
    <tr>
      <td className="border-y bg-white px-3 py-2 border-l rounded-l-lg text-center">
        {index + 1}
      </td>
      <td className="border-y bg-white px-3 py-2 text-center">
        <div className="flex justify-center">
          {firstImage ? (
            <img className="h-10 w-10 object-cover" src={firstImage} alt="Product" />
          ) : (
            <span>No Image</span>
          )}
        </div>
      </td>
      <td className="border-y bg-white px-3 py-2 whitespace-nowrap">
        {item?.title}
      </td>
      <td className="border-y bg-white px-3 py-2">
        <div>
          <span className="font-bold text-green-600">₹{item?.priceStart}</span>
          <span className="mx-2">-</span>
          <span className="font-bold text-green-600">₹{item?.priceEnd}</span>
        </div>
      </td>
      <td className="border-y bg-white px-3 py-2">
        {item?.isInStock ? (
          <span className="text-green-500 font-semibold">In Stock</span>
        ) : (
          <span className="text-red-500 font-semibold">Out of Stock</span>
        )}
      </td>
      <td className="border-y bg-white px-3 py-2">{categoryName}</td>
      <td className="border-y bg-white px-3 py-2 border-r rounded-r-lg">
        <div className="flex gap-2 items-center">
          <Button onClick={handleUpdate} isDisabled={isDeleting} isIconOnly size="sm">
            <Edit2 size={13} />
          </Button>
          <Button
            onClick={handleDelete}
            isLoading={isDeleting}
            isDisabled={isDeleting}
            isIconOnly
            size="sm"
            color="danger"
          >
            <Trash2 size={13} />
          </Button>
        </div>
      </td>
    </tr>
  );
}
