import './css/style.css';
import Card from './Card';

const content = [
  {
    id: 1, tagline: 'Сказочное заморское яство', title: 'Нямушка', taste: 'с фуа-гра', description: ['10 порций',
      'мышь в подарок'], text: 'Печень утки разварная с артишоками.', weight: '0,5', selected: false, disabled: false,
  },
  {
    id: 2, tagline: 'Сказочное заморское яство', title: 'Нямушка', taste: 'с рыбой', description: ['40 порций',
      '2 мышь в подарок'], text: 'Головы щучьи с чесноком да свежайшая сёмгушка.', weight: '2', selected: true, disabled: false,
  },
  {
    id: 3, tagline: 'Сказочное заморское яство', title: 'Нямушка', taste: 'с курой', description: ['100 порций',
      '5 мышей в подарок', 'заказчик доволен'], text: 'Филе из цыплят с трюфелями в бульоне.', weight: '5', selected: false, disabled: true,
  },
]

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="block">
          <h1 className="block__title">Ты сегодня покормил кота?</h1>
          <div className="block__cards">
            {content.map((card, index) => <Card key={index} card={card} />)}
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
