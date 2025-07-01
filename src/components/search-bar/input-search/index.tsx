import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

interface InputSearchProps {
  fn?: any;
  value?: string;
  placeHolder?: string;
}

export function InputSearch({ value, placeHolder, fn }: InputSearchProps) {
  return (
    <div className="flex w-full max-w-sm items-center gap-2 relative">
      <Input
        type="text"
        placeholder={placeHolder}
        className="rounded-[8px] text-gray-500 bg-white font-normal text-[12px] min-w-[240px]"
        onChange={(e) => {
          e.preventDefault();
          fn(e.target.value);
        }}
      />
      <SearchIcon className="absolute right-2 top-[50%] translate-y-[-50%]" size={16} />
    </div>
  );
}
