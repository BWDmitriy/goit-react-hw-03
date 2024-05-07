export default function SearchBox({ searchQuery, setSearchQuery }) {
 const handleChange = (event) => {
    setSearchQuery(event.target.value);
 };

 return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleChange}
      />
    </div>
 );
}
