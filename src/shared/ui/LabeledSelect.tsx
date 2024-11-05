import React from "react";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/shared/ui/select";

interface LabeledSelectProps {
  placeholder?: string;
  options: string[];
  value?: string;
  onChange?: (value: string) => void;
}

const LabeledSelect: React.FC<LabeledSelectProps> = ({
  placeholder,
  options,
  value,
  onChange,
}) => {
  return (
    <div className="flex gap-2 w-full">
      <strong className="w-full">{placeholder}</strong>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder={`Выберите ${placeholder?.toLowerCase()}`} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option} value={option}>
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default LabeledSelect;
