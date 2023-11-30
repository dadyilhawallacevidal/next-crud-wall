import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '../components/Layout';
import Cliente from '@/core/Cliente';
import dynamic from 'next/dynamic';
import Tabela from '@/components/Tabela';
import Formulario from '@/components/Formulario';
import { useEffect, useState } from 'react';
import FormularioModal from '@/components/FormularioModal';
import ClienteRepositorio from '@/core/ClienteRepositorio';
import ColecaoCliente from '@/core/db/ColecaoCliente';
// import Botao from '@/components/Botao';
const Botao = dynamic(() => import('../components/Botao'), { ssr: false, loading: () => <p><b>Loading ...</b></p> })
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio());
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela');
  const [showDialog, setShowDialog] = useState("n");

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
      setClientes(clientes.sort((cliente) => cliente.nome));
      setShowDialog("n");
    });
  }

  function clienteSelecionado(cliente: Cliente) {
    setCliente(cliente);
    // setVisivel('form');
    setShowDialog('y');
  }


  async function clienteExcluido(cliente: Cliente) {
    await repo.excluir(cliente);
    obterTodos();
  }

  async function salvarCliente(cliente: Cliente) {
    setShowDialog('n');
    await repo.salvar(cliente);
    obterTodos();
  }
  function novoCliente() {
    setCliente(Cliente.vazio());
    // setVisivel('form');
    setShowDialog('y');
  }


  return (
    <div className={`
        flex h-screen justify-center items-center
        bg-gradient-to-r from-blue-500   to-purple-500
        `}>
      <Layout titulo="Cadastro Simples">
        {/* {visivel === 'tabela' ? (
          <>
            <div className="flex justify-end">
              <Botao cor="green" className='mb-4'onClick={() => novoCliente()}>Novo Cliente</Botao>
            </div>
            <Tabela clientes={clientes} clienteSelecionado={clienteSelecionado} clienteExcluido={clienteExcluido} />
          </>
        ) : 
        <Formulario 
          cliente={cliente} 
          clienteMudou={salvarCliente}
          cancelado={() => setVisivel('tabela')} 
          />

      } */}
        <div className="flex justify-end">
          <Botao cor="green" className='mb-4' onClick={() => novoCliente()}>Novo Cliente</Botao>
        </div>
        <Tabela clientes={clientes} clienteSelecionado={clienteSelecionado} clienteExcluido={clienteExcluido} />
        <FormularioModal
          showDialog={showDialog}
          closeDialog={() => setShowDialog('n')}
          titulo={cliente.nome !== "" ? "Editar Cliente" : "Cadastrar Cliente"}>

          <Formulario
            cliente={cliente}
            clienteMudou={salvarCliente}
            cancelado={() => setShowDialog('n')}
          />
        </FormularioModal>
      </Layout>
    </div>
  );
}
