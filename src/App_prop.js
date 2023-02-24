import './App.css';

function Food({ name, picture }) {
  return ( 
    <div>
      <h2>I like {name}</h2>
      <img src={picture} alt={name} />
    </div>
  );
}

function renderFood(dish) {
  return <Food name={dish.name} picture={dish.image} />;
}

const foodLike = [
  {
    name: 'kimchi',
    image:'https://cdn.pixabay.com/photo/2016/04/22/18/52/chicken-soup-1346310__340.jpg'
  },
  {
    name: 'ssal',
    image:'https://cdn.pixabay.com/photo/2019/02/15/03/28/rice-3997767__340.jpg'
  },
  {
    name: 'babsang',
    image:'https://cdn.pixabay.com/photo/2015/05/02/00/57/aluminous-749358__340.jpg'
  }
];

function App() {
  console.log(foodLike.map(renderFood));
  return (
    <div>
       {foodLike.map(renderFood)}
    </div>
  );
}

export default App;
