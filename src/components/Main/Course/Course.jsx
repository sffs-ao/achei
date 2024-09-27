import React, { useEffect, useState } from "react";
import Button from "../../Elements/Button";
import * as Dialog from "@radix-ui/react-dialog";
import { FormProvider, useForm, useFormContext } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema } from "../../../utils/lib";
import { Previligies } from "../../Elements/Previligies";
import { ModalSaveInstructor } from "../../Elements/ModalSaveInstructor";
import { GET_PROFILES, IMAGE_URL } from "../../../utils/API";
import { Pencil, Trash2 } from "lucide-react";
import * as Popover from "@radix-ui/react-popover";
import { Link } from "react-router-dom";
import { ModalSaveCurse } from "../../Elements/ModalSaveCurse";

export default function CoursePage() {
    const [searchTerm, setSearachTerm] = useState("");

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };
    const [filteredUsers, setFilter] = useState([]);

    useEffect(() => {
        async function getUsers() {
            const response = await GET_PROFILES();
            console.log(response);
            setFilter(response);
        }
        getUsers();
    }, []);
    return (
        <section className="section-area">
            <div className="section-container">
                <div className="header-actions">
                    <h1>Cursos</h1>
                    <p>Página de gerenciamento de cursos.</p>
                    <div className="top-container">
                        <input
                            type="text"
                            placeholder="Pesquisar cursos..."
                            value={searchTerm}
                            onChange={handleSearch}
                            className="search-input"
                        />
                       <ModalSaveCurse />
                    </div>
                </div>
                <table className="table-content">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Nivel</th>
                            <th>Preço</th>
                            <th>Duração</th>
                            <th>Requisitos</th>
                            <th>Descrição</th>
                            <th>Observacoes</th>
                            <th colSpan={2}>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredUsers &&
                            filteredUsers.map((user) => (
                                <tr key={user.email} onClick={() => handleRowClick(user.id)}>
                                    <td>
                                        nome do curso
                                    </td>
                                    <td>nivel</td>
                                    <td>preco</td>
                                    <td>duracao</td>
                                    <td><PopoverReq><span>Requisitos</span></PopoverReq></td>
                                    <td><PopoverDescricao><span>Descricao bla bla bla</span></PopoverDescricao></td>
                                    <td>Observacoes</td>
                                    <td><button className="px-4 py-2 text-zinc-800 rounded border hover:bg-zinc-200"><Pencil /></button> <button className="px-4 py-2 text-zinc-800 rounded hover:bg-zinc-200 border"><Trash2 /></button></td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}


export const PopoverReq = ({ children }) => (
    <Popover.Root>
        <Popover.Trigger>{children}</Popover.Trigger>
        <Popover.Content className="bg-white shadow-sm border p-1 rounded-md" width="360px">
            <ul className="flex flex-col">
                <li className="p-1 text-[16px] font-semibold">Idade: 10 Anos</li>
                <li className="p-1 text-[16px] font-semibold">Escolaridade: 6ª Classe</li>
                <li className="p-1 text-[16px] font-semibold">Documento de Identidade: Cédula/Bilhete/Passaporte</li>
            </ul>
        </Popover.Content>
    </Popover.Root>
);


export const PopoverDescricao = ({ children }) => (
    <Popover.Root>
        <Popover.Trigger>{children}</Popover.Trigger>
        <Popover.Content className="bg-white shadow-sm border rounded-md max-w-96 p-4">
            <p className="font-normal text-zinc-900">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi consequuntur voluptatum voluptatem vitae atque quisquam placeat vel possimus neque ea iste eligendi quae voluptas, vero rem minus aut at doloremque!</p>
        </Popover.Content>
    </Popover.Root>
);
