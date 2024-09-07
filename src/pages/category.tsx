import { ServiceInfo } from "../components/service-info";

export function CagetoryPage() {
  const servs = [
    { name: 'Delegacia', phone: '190' },
    { name: 'Queixa', phone: '180' },
  ]

  return (
    <main>
      <h3>Nome Categoria</h3>
      <section>
        <ul>
          {servs.map(serv => <ServiceInfo {...serv} />)}
        </ul>
      </section>
    </main>
  );
}