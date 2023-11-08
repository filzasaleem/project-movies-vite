

export const DropDownList = ({value,setCategory}) => {
  
    const handleSelectionChange = (e) => {
        console.log("drop down value:", e.target.value);
        setCategory(e.target.value)
        
      };
      
  return (
    <div>
       
        <label>Select an option:</label>
        <select value={value} onChange={handleSelectionChange}>
          <option value="">Select one...</option>
          <option value="popular">Popular</option>
          <option value="upcoming">Upcoming</option>
          <option value="top_rated">Top rated</option>
        </select>
       
   
    </div>
  )
}
