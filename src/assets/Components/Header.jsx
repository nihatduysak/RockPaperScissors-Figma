export default function Header({ score }) {
    return(
        <div className="scoreBoard">
          <div className="rpsTitle">
            <h2>TAŞ </h2>
            <h2>KAĞIT</h2>
            <h2>MAKAS</h2>
          </div>
          <div className="score">
            <h4>SKOR</h4>
            <h2>{score}</h2>
          </div>
        </div>
    )
}