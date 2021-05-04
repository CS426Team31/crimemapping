//Dependancies needed for the Search component
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

//The component is started off as a hook function which is a new method to 
//declare a function, the panTo variable is passed in from the App.js file.  
const Search = ({panTo}) => {
    
  //These are variables that will be used later on in the component.
    const {
      ready, 
      value, 
      suggestions: {status, data}, 
      setValue, 
      clearSuggestions,
    } = usePlacesAutocomplete({

      requestoptions:{
        location: { lat: () => 39.529633, lng: () => -119.813805 },
        radius: 100*1000,
      },
    });
  
  
    return( 
      //the className 'search' can be found in the app.css file in order to change the 
      //position and shape of the search box
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
