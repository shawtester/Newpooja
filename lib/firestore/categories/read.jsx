import { useEffect } from "react";
import useSWR from "swr";
import { db } from "@/lib/firebase";
import { collection, onSnapshot,getDocs } from "firebase/firestore";

// Fetcher function to fetch categories from Firestore
const fetchCategories = async () => {
  const categoriesRef = collection(db, "categories");
  const snapshot = await getDocs(categoriesRef);
  return snapshot.docs.map((doc) => doc.data());
};

export function useCategories() {
  const { data, error, mutate } = useSWR("categories", fetchCategories, {
    revalidateOnFocus: false,  // Disable revalidation when focusing
  });

  // Real-time listener with onSnapshot
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "categories"), (snapshot) => {
      const categories = snapshot.docs.map(doc => doc.data());
      mutate(categories, false); // Update the data in SWR cache
    });

    // Cleanup listener when component unmounts
    return () => unsubscribe();
  }, [mutate]);

  return {
    data,
    error,
    isLoading: !data && !error,  // Loading state
  };
}
