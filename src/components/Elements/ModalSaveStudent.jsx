import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { flashMessage, studentSchema, userSchema } from "../../utils/lib";
import * as Dialog  from "@radix-ui/react-dialog";

import { POST_INSTRUCTOR, POST_STUDENT } from "../../utils/API";

export const ModalSaveStudent = () => {
    const {formState,...form} = useForm({
      resolver: zodResolver(studentSchema),
      defaultValues:{
        birth_date: new Date(),
        id_type:"1"
      }
     
    });
    async function handleSubmitIntruct(data) {
      console.log("salvando ",data)
      try {
        const response = await POST_STUDENT(data)
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
            Cadastrar Aluno
          </button>
        </Dialog.Trigger>
  
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/30 z-40" />
          <Dialog.Content className="fixed top-1/2 left-1/2 z-50 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded shadow-lg w-full max-w-[600px]">
            <Dialog.Title className="text-lg font-semibold">Cadastro Novo Estudante</Dialog.Title>
            <Dialog.Close asChild>
              <button className="absolute top-2 text-2xl right-2 text-gray-600 hover:text-gray-900">
                <span aria-hidden="true">&times;</span>
              </button>
            </Dialog.Close>
            <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(handleSubmitIntruct)} className="mt-4 flex flex-col items-start w-full gap-2">
                <div className="w-full">
                  <label className="block">Nome:</label>
                  <input placeholder="Insira o nome completo" {...form.register("full_name")} type="text" className=" block w-full p-2 border border-gray-300 rounded " />
                        <div className="text-red-700">
                    {formState.errors.name && (
                      <span>{formState.errors.name.message}</span>
                    )}
                  </div>
                </div>
             <div className="w-full">
             <label className="block">E-mail:</label>
             <input  placeholder="Insira o email" type="email" {...form.register("email")} className=" block w-full p-2 border border-gray-300 rounded"  />
             <div className="text-red-700">
              {formState.errors.email && (
                <span>{formState.errors.email.message}</span>
              )}
            </div>
             </div>
             <div className="flex gap-2 items-center w-full">   
               
                <div className="w-full" >
                    <label className="block">Telefone</label>
                    <input placeholder="Insira o numero de telemovel" type="text" {...form.register("phone_number")} className=" block w-full p-2 border border-gray-300 rounded" required />
                    <div className="text-red-700">
                        {formState.errors.phone_number && (
                        <span>{formState.errors.phone_number.message}</span>
                        )}
                    </div>
                    </div>
                        <div className="w-full">    
                            <label className="block">Data de nascimento</label>
                            <input type="date" {...form.register("birth_date")} className=" block w-full p-2 border border-gray-300 rounded" required />
                            <div className="text-red-700">
                                {formState.errors.birth_date && (
                                <span>{formState.errors.birth_date.message}</span>
                                )}
                            </div>
                        </div>
                </div>

            <div className="flex gap-2 items-center w-full">      
                <div className="w-full" >
                    <label className="block">Tipo de identificação </label>
                        <select onChange={(e)=>form.setValue("id_type", e.target.value)} className=" block w-full p-2 border border-gray-300 rounded" required>
                            <option value="1">Bilhete de identidade</option>
                            <option value="2">Passaporte</option>
                        </select>
                </div>
                
                <div className="w-full " >
                    <label className="block">Numero de identificação</label>
                    <input placeholder="Informe o numero de indentificação" type="text" {...form.register("id_number")} className=" block w-full p-2 border border-gray-300 rounded" required />
                    <div className="text-red-700">
                        {formState.errors.id_number && (
                        <span>{formState.errors.id_number.message}</span>
                        )}
                    </div>
                </div>
            
            </div>

            <div className="w-full" >
              <label className="block">Endereço</label>
              <input placeholder="Informe o endereco" type="text" {...form.register("address")} className=" block w-full p-2 border border-gray-300 rounded" required />
              <div className="text-red-700">
                {formState.errors.address && (
                  <span>{formState.errors.address.message}</span>
                )}
            </div>
            </div>
            
            <div className="w-full" >
              <label className="block">Observações</label>
              <input placeholder="Observações do estudante" type="text" {...form.register("address")} className=" block w-full p-2 border border-gray-300 rounded" required />
              <div className="text-red-700">
                {formState.errors.address && (
                  <span>{formState.errors.address.message}</span>
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
   