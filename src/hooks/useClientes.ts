import Cliente from "@/core/Cliente";
import ClienteRepositorio from "@/core/ClienteRepositorio";
import ColecaoCliente from "@/core/db/ColecaoCliente";
import { useEffect, useState } from "react";

export default function useClientes() {
    const [cliente, setCliente] = useState<Cliente>(Cliente.vazio());
    const [clientes, setClientes] = useState<Cliente[]>([]);
    const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela');
    const [showDialog, setShowDialog] = useState("n");
    const [tipoInterface, setTipoInterface] = useState("semModal");

    const repo: ClienteRepositorio = new ColecaoCliente();
    useEffect(obterTodos, []);

    // const clientes = [
    //   new Cliente("Ana", 34, "1"),
    //   new Cliente("Bia", 45, "2"),
    //   new Cliente("Carlos", 23, "3"),
    //   new Cliente("Pedro", 54, "4"),
    // ];

    function obterTodos() {
        repo.obterTodos().then((clientes) => {
            setClientes(clientes);
            // setShowDialog("n");
            // setShowDialog("tabela");
            controleInterface("tabela");
        });
    }

    function mudarInterface() {
        setTipoInterface(tipoInterface === "semModal" ? "comModal" : "semModal");
    }

    function controleInterface(tabelaForm: string) {
        if (tipoInterface === "semModal") {
            tabelaForm === "form" ? setVisivel('form') : setVisivel("tabela");
            return;
        }
        tabelaForm === "form" ? setShowDialog('y') : setShowDialog('n');
    }

    function clienteSelecionado(cliente: Cliente) {
        setCliente(cliente);
        // setVisivel('form');
        // setShowDialog('y');
        controleInterface("form");
    }



    async function clienteExcluido(cliente: Cliente) {
        await repo.excluir(cliente);
        obterTodos();
    }

    async function salvarCliente(cliente: Cliente) {
        // setShowDialog('n');
        controleInterface("tabela");
        // setVisivel('tabela');
        await repo.salvar(cliente);
        obterTodos();
    }
    function novoCliente() {
        setCliente(Cliente.vazio());
        // setVisivel('form');
        // setShowDialog('y');
        controleInterface("form");
    }

    return {
        salvarCliente,
        novoCliente,
        excluirCliente : clienteExcluido,
        selecionarCliente : clienteSelecionado,
        obterTodos,
        cliente,
        visivel,
        setCliente,
        clientes,
        setVisivel,
        setClientes,
        tipoInterface,
        setTipoInterface,
        mudarInterface,
        showDialog,
        setShowDialog
    }
}