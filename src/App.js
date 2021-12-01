import React, {useState, useEffect} from "react";
import LoadingMask from './components/LoadingMask'
import Character from './components/Character'
import Subscription from './components/Subscription'

const App = () => {
  const [loadMask, setLoadMask] = useState(true);
  const [data, setData] = useState(null);
  const [sub, setSub] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("https://seriescharacters.com/api/howimetyourmother")
      .then((response) => response.json())
      .then((d) => {
        console.log(d);
        setData(d);
        setLoadMask(false)
        setTimeout(() => {
          setSub(true);
        }, 5000);        
      })
      .catch(error=>console(error));
      //.finally(()=>setLoadMask(false))
  };

  return (
    <div className="App">
      {loadMask && <LoadingMask />}
      {data && data.map((d, i) => <Character character={d} key={i} />)}
      {sub && <Subscription/>}
    </div>
  );
};

export default App;
