//import { formatRelative } from "date-fns";   //this is used to format a date
import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
  } from "use-places-autocomplete"
import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption,
  } from "@reach/combobox"
  import "@reach/combobox/styles.css"


  
const Search = ({panTo}) => {
    const {
      ready, 
      value, 
      suggestions: {status, data}, 
      setValue, 
      clearSuggestions,
    } = usePlacesAutocomplete({
      requestoptions:{
        loacation: { lat: () => 39.529633, lng: () => -119.813805 },
        radius: 100*1000,
      },
    });
  
  
    return( 
      <div className="search">
      <Combobox 
         onSelect={async (address) => {
           setValue(address, false);
           clearSuggestions();
  
           try{
              const results = await getGeocode({address});
              const { lat, lng } = await getLatLng(results[0]);           
              panTo({lat,lng});
           } catch(error){
             console.log("error!")
           }
        
  
           console.log(address)
           }}
      >
        <ComboboxInput 
          value = {value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          disabled={!ready}
          placeholder="Enter a city"
           />
        <ComboboxPopover>
          <ComboboxList>
            {status === "OK" && data.map(({id, description}) =>(
              <ComboboxOption key={id} value={description} />
            ))}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
      </div>
    );
  }

export default Search