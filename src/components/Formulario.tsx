import Cliente from "@/core/Cliente";
import Entrada from "./Entrada";
import { useState } from "react";
import Botao from "./Botao";

interface FormularioProps {
    cliente: Cliente;
    cancelado?: () => void;
    children?: any;
}
export default function Formulario(props: FormularioProps) {
    const id = props.cliente?.id ?? null;
    const [nome, setNome] = useState(props.cliente?.nome ?? '');
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0);
    return (
        <div>
            {
                id && (
                    <Entrada
                        texto="Código"
                        valor={id} tipo="text" 
                        somenteLeitura
                        className="mb-4"
                    />
                )
            }

            <Entrada texto="Nome" valor={nome} tipo="text"  valorMudou={setNome} className="mb-4"/>
            <Entrada texto="Idade" valor={idade} tipo="number" valorMudou={setIdade} />
            <div className="flex justify-end mt-7">
                <Botao cor="blue" className="mr-2">
                    {id ? 'Alterar' : 'Salvar'}
                </Botao>
                <Botao cor="gray" onClick={props.cancelado}>
                    Cancelar
                </Botao>
            </div>
        </div>
    );
}