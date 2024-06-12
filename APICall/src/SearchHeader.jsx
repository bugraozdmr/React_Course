import "bulma/css/bulma.css";

function SearchHeader({search}){
    const handleFormSubmit = (event) => {
        event.preventDefault();
        //debugger;
        // atama yapıyor
        search('can');
    }
    return (
      <>
        <form onSubmit={handleFormSubmit}>
        <span className="tag is-warning mt-2 px-2">Ne arıyorsunuz ?</span>
          <input
            className="input is-success mt-2 px-2"
            type="text"
            placeholder="Success input"
          />
        </form>
      </>
    );
}

{/* Burasi lazim */}
export default SearchHeader