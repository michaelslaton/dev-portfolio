export default function lightUp(str,clss="light-up") {
  return str.split("").map((letter,i)=>{
    return (
      <div key={i} className={clss}>{letter}</div>
    )
  })
};