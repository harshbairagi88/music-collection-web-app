import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";

function App() {
  const raw = [
    {
      song: "despacito",
      image:
        "https://imgs.search.brave.com/ytCnQa17FqJMbMQ494vK5vDqsW5bt8vBgKpSrH3UrpQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bm1lLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAxNy8wNy9k/ZXNwYWNpdG8tdmlk/ZW8tNjk2eDQ0Mi5q/cGc",
      artist: "Luis Fonsi",
      favt: false,
    },
    {
      song: "The Script",
      image:
        "https://imgs.search.brave.com/5NVo1TFVO3AMjCiZ65PO3Xm5rDkUkM4y0pJjLonX53I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/d2hhdC1zb25nLmNv/bS9fbmV4dC9pbWFn/ZT91cmw9aHR0cHM6/Ly9pLnNjZG4uY28v/aW1hZ2UvMTJlZWY5/NjgzODQxMzRkMmE0/MzQ4MDI0YzZmYjRm/MDk0NmNiMmRmNiZ3/PTM4NDAmcT03NQ",
      artist: " Irish pop rock band",
      favt: false,
    },
    {
      song: "unstopable",
      image:
        "https://imgs.search.brave.com/n4FDkdZRe2w09SBwp3dGKMQITVfvzO5FASiEt5tnIto/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jLnNh/YXZuY2RuLmNvbS81/NTIvVW5zdG9wcGFi/bGUtRW5nbGlzaC0y/MDE2LTUwMHg1MDAu/anBn",
      artist: "sia",
      favt: false,
    },
    {
      song: "waka waka",
      image:
        "https://imgs.search.brave.com/dxL92ZMSsXOQx87jOmUW4ooATcw9onpP77myKUMudSc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMud2lraWEubm9j/b29raWUubmV0L3No/YWtpcmEvaW1hZ2Vz/L2UvZWEvV2FrYV9X/YWthXyhUaGlzX1Rp/bWVfZm9yX0Fmcmlj/YSkuanBnL3Jldmlz/aW9uL2xhdGVzdC9z/Y2FsZS10by13aWR0/aC1kb3duLzIzMD9j/Yj0yMDE5MDQyNDAw/NTEzOQ.jpeg",
      artist: "shakira",
      favt: false,
    },
    {
      song: "Shake it Off",
      image:
        "https://imgs.search.brave.com/EL1v1NhIomepeJMcHBqlfoRP1-rzUCbEsWICVCDfsGo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vdGh1bWIv/Yy9jNC9UYXlsb3Jf/U3dpZnRfLV9TaGFr/ZV9JdF9PZmYucG5n/LzIyMHB4LVRheWxv/cl9Td2lmdF8tX1No/YWtlX0l0X09mZi5w/bmc",
      artist: "Taylor Swift",
      favt: false,
    },
    {
      song: "Shake it Off",
      image:
        "https://imgs.search.brave.com/EL1v1NhIomepeJMcHBqlfoRP1-rzUCbEsWICVCDfsGo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vdGh1bWIv/Yy9jNC9UYXlsb3Jf/U3dpZnRfLV9TaGFr/ZV9JdF9PZmYucG5n/LzIyMHB4LVRheWxv/cl9Td2lmdF8tX1No/YWtlX0l0X09mZi5w/bmc",
      artist: "Taylor Swift",
      favt: false,
    },
    {
      song: "Shake it Off",
      image:
        "https://imgs.search.brave.com/EL1v1NhIomepeJMcHBqlfoRP1-rzUCbEsWICVCDfsGo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vdGh1bWIv/Yy9jNC9UYXlsb3Jf/U3dpZnRfLV9TaGFr/ZV9JdF9PZmYucG5n/LzIyMHB4LVRheWxv/cl9Td2lmdF8tX1No/YWtlX0l0X09mZi5w/bmc",
      artist: "Taylor Swift",
      favt: false,
    },
   
   
    
   
  ];

  const [data, setData] = useState(raw);
  const handleClick = (rawIndex) =>{
    setData(
      data.map((item, index)=>{
        if(index === rawIndex){
          return {...item, favt : !item.favt}
        }
        return item;
    })
    )
  }

  return (
    <div className="w-full h-screen bg-zinc-200">
      <Navbar data={data} />
      <div className="flex gap-10 flex-wrap justify-center px-6 py-5">
        {data.map((item, index) => (
          <Card key={index} values={item} handleClick = {handleClick} index={index}/>
        ))}
      </div>
    </div>
  );
}

export default App;
