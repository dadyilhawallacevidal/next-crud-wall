import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '../components/Layout';
import Tabela from '../components/Tabela';
import Cliente from '@/core/Cliente';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const clientes = [
    new Cliente("Ana", 34, "1"),
    new Cliente("Bia", 45, "2"),
    new Cliente("Carlos", 23, "3"),
    new Cliente("Pedro", 54, "4"),
  ];
  return (
    <div className={`
        flex h-screen justify-center items-center
        bg-gradient-to-r from-blue-500   to-purple-500
        `}>
      <Layout titulo='Cadastro Simples'>
        <Tabela clientes={clientes}/>
      </Layout>
    </div>
  );
}
