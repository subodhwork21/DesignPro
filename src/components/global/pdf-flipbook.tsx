import { useRef } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function PdfFlipbook({
  isOpen,
  onOpenChange,
  children,
  title = "",
  description = "",
}: {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
  title?: string;
  description?: string;
}) {
  const openRef = useRef(null);

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogTrigger className="hidden" ref={openRef}>
        Open
      </DialogTrigger>
      <DialogContent className="w-screen max-w-none h-screen rounded-[0!important] border-none p-0">
        <DialogTitle className="hidden"></DialogTitle>
        {children}
      </DialogContent>
    </Dialog>
  );
}
