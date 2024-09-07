import { CategoryCard } from "../components/category-card";

export function HomePage() {
  const categs = [{ id: 1, name: 'Saúde' }, { id: 2, name: 'Segurança' }, { id: 3, name: 'Cultura e Arte' }];

  return (
    <>
      <main>
        <section>
          <input type="text" />
          <img src="" alt="" />
        </section>
        <h3>Principais Serviços</h3>
        <section>
          {categs.map(categ => <CategoryCard {...categ}></CategoryCard>)}
        </section>
      </main>
    </>
  );
}