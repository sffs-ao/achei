import { Dialog, DialogContent, DialogFooter, DialogHeader } from "@/components/ui/dialog";
import { PencilRuler } from "lucide-react";
import DonutChart from "../Donot";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function ModalFinalized({
    openModal,
    setOpenModal,
    items,
    class_id
}: { openModal: boolean, setOpenModal: (value: boolean) => void, items: any[], class_id: string }) {

    const total_acertos = items.reduce((acc, item) => {
        if (item.status === 1) {
            return acc + 1;
        }
        return acc;
    }, 0);
    const total_erros = items.reduce((acc, item) => {
        if (item.status === 0) {
            return acc + 1;
        }
        return acc;
    }, 0);

    return (
        <Dialog open={openModal} onOpenChange={setOpenModal}>
            <DialogContent onInteractOutside={(e) => {
                e.preventDefault();
            }}
                onEscapeKeyDown={(e) => e.preventDefault()}
                className="max-w-[1920px] w-[70%]">
                <DialogHeader className="flex flex-col items-center justify-center">
                    <PencilRuler width={24} className="text-red-600" />
                    <h1 className="font-bold text-md text-center text-6xl max-md:text-2xl">Parabéns!</h1>
                </DialogHeader>
                <p className="text-center font-bold">Voce chegou ao fim do Quiz</p>
                <div className=" justify-center items-center w-full">
                    <DonutChart acertos={total_acertos} errados={total_erros} />
                </div>
                <DialogFooter>
                    <div className="flex gap-2 items-end justify-center w-full">
                        <Link to={`/portal/classroom/${class_id}`}><Button variant={"outline"}>Voltar</Button></Link>
                    </div>
                </DialogFooter>
            </DialogContent>

        </Dialog>
    )
}
