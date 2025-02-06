"use client"
import { useState } from "react";
import Image from "next/image";

// Define the Review interface
interface Review {
  name: string;
  email: string;
  image: string;
  comment: string;
}

const ReviewPage = () => {
  // Initialize the demoReviews with the correct type
  const demoReviews: Review[] = [
    {
      name: "Alice Johnson",
      email: "alice@example.com",
      image: "/Default.jpg",
      comment: "This sofa is incredibly comfortable! The fabric feels premium, and it fits perfectly in my living room. Highly recommend!",
    },
    {
      name: "John Smith",
      email: "john@example.com",
      image: "/Default.jpg",
      comment: "The dining table is elegant and sturdy. Its spacious and looks amazing with our decor. A great purchase!",
    },
    {
      name: "Sara Williams",
      email: "sara@example.com",
      image: "/Default.jpg",
      comment: "I bought the bed frame and it was super easy to assemble. Its very sturdy, and the design looks modern and sleek.",
    },
  ];

  // Type the useState hooks with the Review interface
  const [reviews, setReviews] = useState<Review[]>(demoReviews); // Initialize with demoReviews
  const [newReview, setNewReview] = useState<Review>({
    name: "",
    email: "",
    image: "/Default.jpg",
    comment: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewReview((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    setReviews((prev) => [...prev, newReview]);
    setNewReview({ name: "", email: "", image: "/Default.jpg", comment: "" });
  };

  const handleDelete = (index: number) => {
    setReviews((prev) => prev.filter((_, i) => i !== index));
  };

  const handleEdit = (index: number) => {
    setNewReview(reviews[index]);
    handleDelete(index); // Remove the review to edit it
  };

  return (
    <div className="container mx-auto p-6 flex justify-center">
      <div className="w-full max-w-3xl">
        <h1 className="text-2xl font-bold mb-4 text-center">Customer Reviews</h1>

        {/* Review Submission Form */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold">Leave a Review</h2>
          <form className="space-y-4">
            <div>
              <label className="block">Name:</label>
              <input
                type="text"
                name="name"
                value={newReview.name}
                onChange={handleInputChange}
                className="w-full border px-4 py-2"
              />
            </div>
            <div>
              <label className="block">Email:</label>
              <input
                type="email"
                name="email"
                value={newReview.email}
                onChange={handleInputChange}
                className="w-full border px-4 py-2"
              />
            </div>
            <div>
              <label className="block">Comment:</label>
              <textarea
                name="comment"
                value={newReview.comment}
                onChange={handleInputChange}
                className="w-full border px-4 py-2"
                rows={4}
              />
            </div>
            <div>
              <button
                type="button"
                onClick={handleSubmit}
                className="bg-blue-600 text-white px-4 py-2 rounded"
              >
                Submit Review
              </button>
            </div>
          </form>
        </div>

        {/* Display Existing Reviews */}
        {reviews.length === 0 ? (
          <p>No reviews yet.</p>
        ) : (
          <div className="space-y-6">
            {reviews.map((review, index) => (
              <div key={index} className="flex space-x-4 border p-4 rounded-lg shadow-md">
                <Image
                  src={review.image}
                  alt={review.name}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">{review.name}</span>
                    <span className="text-sm text-gray-500">{review.email}</span>
                  </div>
                  <p className="mt-2">{review.comment}</p>
                </div>
                {/* Display Edit/Delete options only for new reviews */}
                {!demoReviews.includes(review) && (
                  <div className="flex flex-col items-center">
                    <button
                      onClick={() => handleEdit(index)}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(index)}
                      className="text-red-600 hover:text-red-800 mt-2"
                    >
                      Delete
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ReviewPage;
