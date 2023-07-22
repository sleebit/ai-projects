import "./index.css";

export default function StyledCard(props) {
  return (
    <div>
      <div>
        <div className="card" onClick={props.onClick}>
          <div className="content">
            <div className="back">
              <div className="back-content">{props.children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
