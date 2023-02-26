import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

function getRestaurents() {
  return prisma.restaurant.findMany();
}

export default async function Home() {
  const restaurants = await getRestaurents();

  return (
    <div>
      <h1>Restaurents</h1>
      {restaurants.map((i) => (
        <div className="card mb-3" key={i.id}>
          <div className="card-body">
            <p className="card-text">{i.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
