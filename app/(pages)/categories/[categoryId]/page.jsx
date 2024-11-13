import { getCategory } from "@/lib/firestore/categories/read_server";
import { getProductsByCategory } from "@/lib/firestore/products/read_server";
import Header from "@/app/components/Header";

// Helper function to convert Firestore Timestamp to a plain Date
const convertFirestoreData = (product) => {
  return {
    ...product,
    timestampCreate: product.timestampCreate?.toDate().toISOString(), // Convert Timestamp to ISO string
    timestampUpdate: product.timestampUpdate?.toDate().toISOString(),
    imageList: product.imageList || [], // Ensure imageList is an array
  };
};

export async function generateMetadata({ params }) {
  const { categoryId } = params;
  const category = await getCategory({ id: categoryId });

  return {
    title: `${category?.name} | Category`,
    openGraph: {
      images: [category?.imageURL],
    },
  };
}

export default async function Page({ params }) {
  const { categoryId } = params;

  // Fetch the category data
  const category = await getCategory({ id: categoryId });

  // Fetch products by category and convert Firestore data
  const products = await getProductsByCategory({ categoryId });
  const convertedProducts = products.map(convertFirestoreData); // Convert all products to plain data

  return (
    <>
      <Header />
      <main
        className="w-full flex flex-col items-center justify-start"
        style={{
          backgroundImage: "url('/Background.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh", // Allows the container to expand with content
          backgroundAttachment: "fixed",
        }}
      >
        {/* Category Title */}
        <h1
          className="text-4xl font-semibold text-black mt-16 md:mt-20 lg:mt-24 px-4 text-center"
          style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}
        >
          {category.name}
        </h1>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 max-w-screen-lg w-full">
          {convertedProducts.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gray-50 border border-gray-200"
            >
              {/* Image */}
              <div className="w-full h-56 bg-gray-100 relative overflow-hidden rounded-t-xl">
                {item?.imageList && item.imageList.length > 0 ? (
                  <img
                    src={item.imageList[0]} // Display first image from the list
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    alt={item?.title || "Product image"}
                  />
                ) : (
                  <div className="flex items-center justify-center h-full bg-gray-300 text-gray-600 text-sm">
                    No Image Available
                  </div>
                )}
              </div>

              {/* Product Details */}
              <div className="p-4 space-y-2">
                <h2 className="text-lg font-semibold text-gray-800 line-clamp-1">{item?.title}</h2>
                <p className="text-sm text-gray-600 line-clamp-2">{item?.shortDescription || "No description available"}</p>
                <div className="flex justify-between items-center mt-4 bg-gray-100 p-3 rounded-lg">
                  <div className="flex items-center">
                    <span className="text-lg font-semibold text-gray-600">Price Range: </span>
                    <span className="ml-2 text-lg font-bold text-green-600">₹{item?.priceStart}</span>
                    <span className="mx-2 text-lg text-gray-500">-</span>
                    <span className="text-lg font-bold text-green-600">₹{item?.priceEnd}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
