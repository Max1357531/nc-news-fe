import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <header>The MarketPlace</header>
      <nav>
        <Link to="/topics"><h3>Topics</h3></Link>
        <Link to="/articles"><h3>Articles</h3></Link>
        
      </nav>
    </div>
  );
};
