import { db } from "@/lib/firebase";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";

// Helper function to convert Firestore Timestamp to Date
const convertTimestampToDate = (timestamp) => {
  return timestamp ? timestamp.toDate() : null;  // Return null if timestamp is not present
};



export const getCategory = async ({ id }) => {
  try {
    const categoryRef = doc(db, "categories", id); // Get the category by ID
    const categorySnapshot = await getDoc(categoryRef);
    if (categorySnapshot.exists()) {
      return categorySnapshot.data(); // Return the category data
    } else {
      return null; // Return null if category doesn't exist
    }
  } catch (error) {
    console.error("Error fetching category:", error);
    return null; // Return null if there's an error
  }
};


// Get all categories
export const getCategories = async () => {
  const list = await getDocs(collection(db, "categories"));
  return list.docs.map((snap) => {
    const categoryData = snap.data();
    // Convert timestamp fields to Date objects
    return {
      ...categoryData,
      timestampCreate: convertTimestampToDate(categoryData.timestampCreate),
      timestampUpdate: convertTimestampToDate(categoryData.timestampUpdate),
      id: snap.id,  // Don't forget to include the document ID if necessary
    };
  });
};
