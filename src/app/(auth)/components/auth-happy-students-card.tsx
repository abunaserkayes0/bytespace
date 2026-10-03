import Image from "next/image";
import { Star } from "lucide-react";

export default function AuthHappyStudentsCard() {
  return (
    <div className="bg-accent w-[240px] font-satoshi rounded-2xl p-4 shadow-xl flex flex-col gap-2 hover:scale-[1.02] transition-transform duration-300">
      <div className="flex flex-col">
        <h4 className="text-sm text-left font-satoshi font-medium text-brand-dark">
          Happy Students
        </h4>
        <div className="flex items-center gap-1 mt-0.5">
          <span className="text-xs font-bold text-brand-dark">4.5</span>
          <span className="text-[10px] font-medium text-brand-dark/70">
            (240)
          </span>
          <Star
            className="w-3.5 h-3.5 text-primary ml-0.5"
            fill="currentColor"
          />
        </div>
      </div>

      <div className="flex items-center -space-x-2">
        {[33, 22, 12, 32, 11].map((img, index) => (
          <Image
            key={img}
            src={`https://i.pravatar.cc/100?img=${img}`}
            alt="student"
            width={32}
            height={32}
            className="w-8 h-8 rounded-full border-2 border-accent object-cover relative"
            style={{ zIndex: index }}
          />
        ))}
        <div className="w-8 h-8 rounded-full border-2 border-accent bg-brand-dark flex items-center justify-center relative text-[10px] font-bold text-white z-20">
          2K+
        </div>
      </div>
    </div>
  );
}
