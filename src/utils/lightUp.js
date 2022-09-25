export default function lightUp(str,clss="light-up") {

  return str.split("").map((letter,i)=>{
    
    if (letter === " ") return (" ");
    else return ( <div key={i} className={clss}>{letter}</div> );

  })
  
};