import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { flashMessage, schemaClass, userSchema } from "../../utils/lib";
import * as Dialog  from "@radix-ui/react-dialog";
import { POST_INSTRUCTOR } from "../../utils/API";

export const ModalSaveClasse = () => {
    const {formState,...form} = useForm({
      resolver: zodResolver(schemaClass),
      defaultValues:{
        user_id: "1",
        course_id: "2"
      }
    });
    async function handleSubmitIntruct(data) {
      console.log("salvando ",data)
      try {
        const response = await POST_INSTRUCTOR(data)
        flashMessage("Cadastrado com sucesso")
        form.reset()
      } catch (error) {
            flashMessage("Nao foi possivel cadastrar","ERROR")
            console.log(error)
      }
       
        
    }
    console.log(formState.errors)
    return (
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Cadastrar Turma
          </button>
        </Dialog.Trigger>
  
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/30 z-40" />
          <Dialog.Content className="fixed top-1/2 left-1/2 z-50 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded shadow-lg w-full max-w-[600px]">
            <Dialog.Title className="text-lg font-semibold">Cadastro Nova Turma</Dialog.Title>
            <Dialog.Close asChild>
              <button className="absolute top-2 text-2xl right-2 text-gray-600 hover:text-gray-900">
                <span aria-hidden="true">&times;</span>
              </button>
            </Dialog.Close>
            <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(handleSubmitIntruct)} className="mt-4 flex flex-col items-start w-full gap-2">
                <div className="w-full">
                  <label className="block">Nome</label>
                  <input placeholder="Nome da turma" {...form.register("name")} type="text" className=" block w-full p-2 border border-gray-300 rounded " />
                        <div className="text-red-700">
                            {formState.errors.name && (
                                <span>{formState.errors.name.message}</span>
                                )}
                    </div>
                </div>
                
                <div className="w-full flex gap-2">
                <div className="w-full">
                  <label className="block">Inicio</label>
                  <input {...form.register("start_date")} type="date" className=" block w-full p-2 border border-gray-300 rounded " />
                        <div className="text-red-700">
                            {formState.errors.start_date && (
                                <span>{formState.errors.start_date.message}</span>
                                )}
                            </div>
                </div>
                <div className="w-full">
                        <label className="block">Término:</label>
                        <input type="date" {...form.register("end_date")} className=" block w-full p-2 border border-gray-300 rounded"  />
                        <div className="text-red-700">
                        {formState.errors.end_date && (
                            <span>{formState.errors.end_date.message}</span>
                        )}
                        </div>
                    </div>
             </div>
            
           
             <div className="w-full" >
              <label className="block">Curso: </label>
                <select onChange={(e)=>form.setValue("course_id", e.target.value)} className=" block w-full p-2 border border-gray-300 rounded" required>
                  <option value="1">Geologea</option>
                  <option value="2">Informatica</option>
                  <option value="3" >Power BI</option>
                </select>
            </div>
         
            <div className="w-full" >
              <label className="block">Responsavel: </label>
                <select onChange={(e)=>form.setValue("user_id", e.target.value)} className=" block w-full p-2 border border-gray-300 rounded" required>
                  <option value="1">Manuel Roberto</option>
                  <option value="2">Cardoso Silva</option>
                  <option value="3" >Moises Antonio</option>
                </select>
            </div>
            <div className="w-full">
                <label className="block">Limite</label>
                <input  {...form.register("vacancies")} type="number" className=" block w-full p-2 border border-gray-300 rounded"  />
                <div className="text-red-700">
                {formState.errors.vacancies && (
                    <span>{formState.errors.vacancies.message}</span>
                )}
                </div>
                    </div>
             <div className="w-full flex items-center justify-end gap-2">
              <Dialog.Close asChild>
                  <button className="px-4 py-2 ring-zinc-300 ring-1 rounded ">Cancelar</button>
              </Dialog.Close>
              <button type="submit" className="px-4 py-2 bg-green-700 text-white rounded hover:bg-green-600">
                  Salvar
                </button>
             </div>
            </form>
            </FormProvider>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    );
  };
   