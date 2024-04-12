import "./style.css";

const StatusLine = ({
  numOfTodos,
  onClickAll,
  onClickActive,
  onClickCompleted,
  onClickClearCompleted,
  currentView,
  mode,
}) => {
  return (
    <>
      <section className="status-line">
        <p>{numOfTodos} items left</p>
        <section className="search-types">
          <p
            className={mode}
            style={{
              color:
                currentView === "all"
                  ? " hsl(220, 98%, 61%)"
                  : "hsl(235, 19%, 35%)",
            }}
            onClick={onClickAll}
          >
            all
          </p>
          <p
            className={mode}
            style={{
              color:
                currentView === "active"
                  ? " hsl(220, 98%, 61%)"
                  : "hsl(235, 19%, 35%)",
            }}
            onClick={onClickActive}
          >
            active
          </p>
          <p
            className={mode}
            style={{
              color:
                currentView === "completed"
                  ? " hsl(220, 98%, 61%)"
                  : "hsl(235, 19%, 35%)",
            }}
            onClick={onClickCompleted}
          >
            completed
          </p>
        </section>
        <p className={mode} onClick={onClickClearCompleted}>
          clear completed
        </p>
      </section>
    </>
  );
};
export default StatusLine;
