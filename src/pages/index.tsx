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
import BotaoSwitch from '@/components/BotaoSwitch';
import useClientes from '@/hooks/useClientes';
// import Botao from '@/components/Botao';
const Botao = dynamic(() => import('../components/Botao'), { ssr: false, loading: () => <p><b>Loading ...</b></p> })
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
    const {
        selecionarCliente,
        excluirCliente,
        novoCliente,
        obterTodos,
        visivel,
        tipoInterface,
        clientes,
        cliente,
        salvarCliente,
        setVisivel,
        mudarInterface,
        showDialog,
        setShowDialog

      } = useClientes();
selecionarCliente
  return (
    <div className={`
        flex h-screen justify-center items-center
        bg-gradient-to-r from-blue-500   to-purple-500
        `}>
      <Layout titulo="Cadastro Simples">

        {visivel === 'tabela' ? (
          <>
            <div className='flex justify-end mb-2'>
              <BotaoSwitch tipoInterface={tipoInterface} setInterface={mudarInterface} />
            </div>
            <div className="flex justify-end">
              <Botao cor="green" className='mb-4' onClick={() => novoCliente()}>Novo Cliente</Botao>
            </div>
            <Tabela clientes={clientes} clienteSelecionado={selecionarCliente} clienteExcluido={excluirCliente} />
          </>
        ) :
          <Formulario
            cliente={cliente}
            clienteMudou={salvarCliente}
            cancelado={() => setVisivel('tabela')}
          />

        }
        {/* <div className="flex justify-end">
          <Botao cor="green" className='mb-4' onClick={() => novoCliente()}>Novo Cliente</Botao>
        </div>
        <Tabela clientes={clientes} clienteSelecionado={clienteSelecionado} clienteExcluido={clienteExcluido} /> */}
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
