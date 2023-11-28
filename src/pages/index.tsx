import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '../components/Layout';
import Cliente from '@/core/Cliente';
import dynamic from 'next/dynamic';
import Tabela from '@/components/Tabela';
import Formulario from '@/components/Formulario';
import { useState } from 'react';
// import Botao from '@/components/Botao';
const Botao = dynamic(() => import('../components/Botao'), { ssr: false, loading: () => <p><b>Loading ...</b></p> })
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const clientes = [
    new Cliente("Ana", 34, "1"),
    new Cliente("Bia", 45, "2"),
    new Cliente("Carlos", 23, "3"),
    new Cliente("Pedro", 54, "4"),
  ];

  function clienteSelecionado(cliente: Cliente) {

  }
  function clienteExcluido(cliente: Cliente) {

  }

  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela');

  return (
    <div className={`
        flex h-screen justify-center items-center
        bg-gradient-to-r from-blue-500   to-purple-500
        `}>
      <Layout titulo="Cadastro Simples">
        {visivel === 'tabela' ? (
          <>
            <div className="flex justify-end">
              <Botao cor="green" className='mb-4'onClick={() => setVisivel('form')}>Novo Cliente</Botao>
            </div>
            <Tabela clientes={clientes} clienteSelecionado={clienteSelecionado} clienteExcluido={clienteExcluido} />
          </>
        ) : 
        <Formulario cliente={clientes[0]} cancelado={() => setVisivel('tabela')} />
      }
      </Layout>
    </div>
  );
}
