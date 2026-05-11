import Button from "./components/Button";

function Header() {
  return (
    <div className="header">
      <div className="header-1">
        <div className="header-heading">
          <h1>Habit Tracker</h1>
        </div>
        <div>1/1 done today</div>
      </div>
      <div className="header-2">
        <div style={{ color: "grey" }}>Apr 6 - Apr 12</div>
        <div className="header-btns">
          <Button>Prev</Button>
          <Button>Next</Button>
        </div>
      </div>
    </div>
  );
}

export default Header;
