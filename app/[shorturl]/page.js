import { redirect } from "next/navigation";
import clientPromise from "@/lib/mongodb";

export default async function Page({ params }) {
  try {
    const shorturl = params.shorturl; // Corrected params handling

    const client = await clientPromise;
    const db = client.db("snaplink"); // Updated DB name
    const collection = db.collection("urls");

    const doc = await collection.findOne({ shorturl });

    if (doc) {
      redirect(doc.url);
    } else {
      redirect(process.env.NEXT_PUBLIC_HOST || "/");
    }
  } catch (error) {
    console.error("Error fetching short URL:", error);
    redirect(process.env.NEXT_PUBLIC_HOST || "/"); // Redirect to home on error
  }

  return null; // No need to render anything since redirect happens
}
