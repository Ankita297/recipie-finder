import React ,{useState } from "react"
import "./Paginate.css"
function Pagination({ data, RenderComponent,  pageLimit, dataLimit }) {
    const [pages] = useState(Math.round(data.length / dataLimit));
    const [currentPage, setCurrentPage] = useState(1);
  
    function goToNextPage() {
        
        setCurrentPage((page) => page + 1);
        
    }
  
    function goToPreviousPage() {
         
        setCurrentPage((page) => page - 1);
    }
  
    function changePage(event) {
        const pageNumber = Number(event.target.textContent);
        setCurrentPage(pageNumber);
          }
  
    const getPaginatedData = () => {
        const startIndex = currentPage * dataLimit - dataLimit;
        const endIndex = startIndex + dataLimit;
        return data.slice(startIndex, endIndex);
          };
  
    const getPaginationGroup = () => {
        let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
        return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
          };
  
    return   <div><div className="dataContainer">
              <div className="box">
        <div className="content">

    {getPaginatedData().map((d, idx) => (
       
    <RenderComponent key={idx} food={d}/>
      
    ))}
    </div></div>
  </div>
  <div className="pagination">
    <button
      onClick={goToPreviousPage}
      className={`prev ${currentPage === 1 ? 'disabled' : ''}`}
    >
      prev
    </button>

    {getPaginationGroup().map((item, index) => (
      <button
        key={index}
        onClick={changePage}
        className={`paginationItem ${currentPage === item ? 'active' : null}`}
      >
        <span>{item}</span>
      </button>
    ))}

    {/* next button */}
    <button
      onClick={goToNextPage}
      className={`next ${currentPage === pages ? 'disabled' : ''}`}
    >
      next
    </button>
  </div>
</div>

  }
  

  export default Pagination