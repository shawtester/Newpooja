import { db } from "@/lib/firebase";
import { collection, deleteDoc, doc, setDoc, Timestamp, updateDoc } from "firebase/firestore";
import axios from "axios";

// Cloudinary API call to upload image
const uploadToCloudinary = async (image) => {
  const formData = new FormData();
  formData.append("file", image);
  formData.append("upload_preset", "NUTRIBOX"); // Replace with your Cloudinary preset
  formData.append("public_id", `collection_${Date.now()}`); // Unique public ID for the image

  try {
    // Upload image to Cloudinary
    const response = await axios.post(
      `https://api.cloudinary.com/v1_1/dzk0kk3gh/image/upload`, // Replace with your Cloudinary cloud name
      formData
    );
    return response.data.secure_url; // Return the secure URL of the uploaded image
  } catch (error) {
    throw new Error("Error uploading image to Cloudinary: " + error.message);
  }
};

export const createNewCollection = async ({ data, image }) => {
  if (!image) {
    throw new Error("Image is required");
  }
  if (!data?.title) {
    throw new Error("Title is required");
  }
  if (!data?.products || data?.products?.length === 0) {
    throw new Error("Products are required");
  }

  const newId = doc(collection(db, `ids`)).id;

  // Upload image to Cloudinary
  const imageURL = await uploadToCloudinary(image);

  // Create a new collection document in Firestore
  await setDoc(doc(db, `collections/${newId}`), {
    ...data,
    id: newId,
    imageURL: imageURL, // Store Cloudinary URL
    timestampCreate: Timestamp.now(),
  });
};

export const updateCollection = async ({ data, image }) => {
  if (!data?.title) {
    throw new Error("Title is required");
  }
  if (!data?.products || data?.products?.length === 0) {
    throw new Error("Products are required");
  }
  if (!data?.id) {
    throw new Error("ID is required");
  }

  const id = data?.id;

  let imageURL = data?.imageURL; // Keep the existing image URL if no new image is uploaded

  if (image) {
    // Upload new image to Cloudinary
    imageURL = await uploadToCloudinary(image);
  }

  // Update the collection document in Firestore
  await updateDoc(doc(db, `collections/${id}`), {
    ...data,
    imageURL: imageURL, // Store the updated Cloudinary image URL
    timestampUpdate: Timestamp.now(),
  });
};

export const deleteCollection = async ({ id }) => {
  if (!id) {
    throw new Error("ID is required");
  }
  await deleteDoc(doc(db, `collections/${id}`));
};
