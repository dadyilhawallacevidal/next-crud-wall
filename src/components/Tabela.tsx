import Cliente from "@/core/Cliente";
import { useEffect } from "react";

interface TabelaProps {
    clientes: Cliente[];
    
}

export default function Tabela(props : TabelaProps){  
    return(
        <table>
            <tr>
                <th>Código</th>
                <th>Nome</th>
                <th>Idade</th>
            </tr>
        </table>
    );
}


