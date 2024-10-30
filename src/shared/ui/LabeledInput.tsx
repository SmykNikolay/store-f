import React from "react";

import { Input } from "@/shared/ui/input";

interface LabeledInputProps {
  id: string;
  placeholder?: string;
  text?: string;
}

const LabeledInput: React.FC<LabeledInputProps> = ({
  id,
  placeholder,
  text = "text",
}) => (
  <div className="flex gap-2 w-full">
    <strong className="w-full">{placeholder}</strong>
    {text === "text" ? (
      <Input
        type="number"
        id={id}
        placeholder={placeholder}
        className="w-full"
      />
    ) : (
      <span className="w-full">{text}</span>
    )}
  </div>
);

export default LabeledInput;
