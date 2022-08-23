import Some from './some.js';

const Test = (props) => {
  const { list, age, name, onClick } = props;
  return (
    <div>
      <button onClick={onClick}>click</button>
      <h2>my {list} {age} 친구 {name} list
        <button onClick={
          () => (
            alert(list)
          )
        }>click</button>
      </h2>
      <Some list={list} name={name} age={age} />
      <ul>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo fuga nesciunt suscipit a autem, illum voluptatum exercitationem. Explicabo optio repellat sunt placeat vero aspernatur vel, quidem rem qui at provident.</li>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo fuga nesciunt suscipit a autem, illum voluptatum exercitationem. Explicabo optio repellat sunt placeat vero aspernatur vel, quidem rem qui at provident.</li>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo fuga nesciunt suscipit a autem, illum voluptatum exercitationem. Explicabo optio repellat sunt placeat vero aspernatur vel, quidem rem qui at provident.</li>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo fuga nesciunt suscipit a autem, illum voluptatum exercitationem. Explicabo optio repellat sunt placeat vero aspernatur vel, quidem rem qui at provident.</li>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo fuga nesciunt suscipit a autem, illum voluptatum exercitationem. Explicabo optio repellat sunt placeat vero aspernatur vel, quidem rem qui at provident.</li>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo fuga nesciunt suscipit a autem, illum voluptatum exercitationem. Explicabo optio repellat sunt placeat vero aspernatur vel, quidem rem qui at provident.</li>
      </ul>
    </div>
  )
}

export default Test;