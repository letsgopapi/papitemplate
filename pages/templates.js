import TemplateCard from '../components/TemplateCard';

const templates = [
  { id: 1, name: 'Cafe', desc: 'Coffee shop template', img: '/cafe.png' },
  { id: 2, name: 'Shop', desc: 'Ecommerce store', img: '/shop.png' },
];

export default function Templates() {
  return (
    <div className="p-8">
      <h1>Templates</h1>
      <div className="grid grid-cols-3 gap-4">
        {templates.map(t => (
          <TemplateCard key={t.id} name={t.name} desc={t.desc} img={t.img} />
        ))}
      </div>
    </div>
  );
}
