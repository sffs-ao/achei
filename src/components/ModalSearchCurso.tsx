import { Search } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

interface ModalSearchModalProps {
    children: React.ReactNode;
}
export default function ModalSearchModal({children}: ModalSearchModalProps) {
    return (
        <Dialog>
            <DialogTrigger>{children}</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                <DialogTitle>Procurar cursos</DialogTitle>
                <DialogDescription>
                    <form action="" className="my-4">
                        <div className="flex items-center">
                            <Input  placeholder="Procurar" className="border-r-0 rounded-r-none focus-visible:ring-0 hover:ring-0 focus:ring-0  focus-visible:ring-offset-0"/>
                            <Button type="submit" className="bg-zinc-100 rounded-l-none"><Search className="text-zinc-800"/></Button>
                        </div>
                    </form>
                </DialogDescription>
                </DialogHeader>
            </DialogContent>
            </Dialog>

    )
}