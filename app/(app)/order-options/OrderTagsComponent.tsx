import React, { useState } from "react";

type OrderTag = {
  id: string;
  name: string;
};

type Props = {
  tags: OrderTag[];
  onSelect: (tag: OrderTag) => void;
};

const OrderTags: React.FC<Props> = ({ tags, onSelect }) => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const handleTagSelect = (tag: OrderTag) => {
    setSelectedTag(tag.id);
    onSelect(tag);
  };

  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {tags.map((tag) => (
        <button
          key={tag.id}
          type="button"
          className={`rounded-full border px-3 py-1 text-sm transition ${
            selectedTag === tag.id
              ? "bg-blue-600 text-white"
              : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
          }`}
          onClick={() => handleTagSelect(tag)}
        >
          {tag.name}
        </button>
      ))}
    </div>
  );
};

export default OrderTags;
