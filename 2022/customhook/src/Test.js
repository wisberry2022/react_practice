import useFetch from "./useFetch";

const Test = () => {
  // const [url, setUrl] = useFetch('https://practice04.herokuapp.com/test?day=0&hour=13&min=1&direct=0&scode=101');
  const [data] = useFetch('https://practice04.herokuapp.com/test?day=0&hour=13&min=1&direct=0&scode=101');

  return (
    <div>
      {console.log(data)}
      hello
    </div>
  )
}

export default Test;