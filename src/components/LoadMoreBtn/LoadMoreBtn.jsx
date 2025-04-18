import styles from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onClick, totalPages, page }) => {
  return (
    <div>
      <span>
        Page {page} ... {totalPages}
      </span>
      <button onClick={onClick} className={styles.loadMoreBtn}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
