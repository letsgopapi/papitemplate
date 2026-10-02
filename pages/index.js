import Head from 'next/head';
import DomainSearch from '../components/DomainSearch';

export default function Home() {
  return (
    <div>
      <Head><title>letsgopapi.com - Launch Your Business</title></Head>
      <main className="p-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Build Your Business Online in 60s</h1>
        <DomainSearch />
      </main>
    </div>
  );
}
