import { useState } from "react";
import "./statsCategory.css"
interface StatsCategoryProps {
  title: string;

 
  children: React.ReactNode;
}

function StatsCategory({ title, children }: StatsCategoryProps) {
  const [statsExpanded, setStatsExpanded] = useState(true)
  function expandStats(){
    setStatsExpanded(!statsExpanded)
  }
  return (
    <div onClick={(event) => {
      event.stopPropagation(); // Prevent event propagation
      expandStats();
    }} 
    className={`stat-category ${statsExpanded ? "expanded" : ""}`}>
      <h3 className="stat-category-title" >
        {title}
      </h3>
      {statsExpanded && <div className="stat-category-content">{children}</div>}
    </div>
  );
}

export default StatsCategory;