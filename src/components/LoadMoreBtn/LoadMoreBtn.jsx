import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onLoadMore }) => {
  return (
    <div className={css.wrapper}>
      <button className={css.button} type="button" onClick={() => onLoadMore()}>
        Load More
      </button>
    </div>
  );
};

export default LoadMoreBtn;
