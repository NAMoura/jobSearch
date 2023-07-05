import axios from "axios";
import { useState } from "react";
import { TrashIcon } from "@heroicons/react/24/outline"
import { toast } from "react-hot-toast";

export default function DeletePost({ id }) {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      await axios.delete(
        `https://job-listing-test-both.onrender.com/posts/${id}`
      );
      console.log("Post deleted successfully");
      toast.success("Job was deleted!");
      window.location.reload();
    } catch (error) {
      console.error("Error deleting post:", error);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <button onClick={handleDelete} disabled={isDeleting}>
      <TrashIcon className="w-4 h-4 text-white"/>
    </button>
  );
}
