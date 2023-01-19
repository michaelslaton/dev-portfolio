import "./lightUp.css";

export default function lightUp(str, clss = "light-up", split = false) {
  if (split) {
    return str.split("").map((letter, i) => {
      if (letter === " ") return " ";
      else
        return (
          <div key={i} className={clss}>
            {letter}
          </div>
        );
    });
  } else {
    return <div className={clss}>{str}</div>;
  }
}
