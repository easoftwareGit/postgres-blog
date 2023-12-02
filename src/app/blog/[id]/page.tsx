"use client"

import BackButton from "@/components/BackButton";
import ButtonAction from "@/components/ButtonAction";

const BlogDetailPage = () => {
  return (
    <div>
      <BackButton />
      <div className="mb-8">
        <h2 className="text-2xl font-bold my-4">Post One</h2>
        <ButtonAction />
        <p className="text-slate-700 mt-6">Post one content</p>
      </div>
    </div>
  );
};

export default BlogDetailPage;
