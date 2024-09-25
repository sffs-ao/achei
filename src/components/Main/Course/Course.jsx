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
import { Popover } from "@radix-ui/react-popover";

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
                        <ModalSaveInstructor />
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
                                    <td>Requisitos</td>
                                    <td>

                                        descricao
                                    </td>
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
