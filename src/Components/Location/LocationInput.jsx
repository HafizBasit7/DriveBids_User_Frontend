import { useRef } from "react";
import { StandaloneSearchBox, LoadScript } from "@react-google-maps/api";
import {  TextField } from "@mui/material";
import colors from "../../Style/color";
import LocationLoader from "../Loader/locationloader";

export default function LocationInput ({loading, value, handleChange, placeholder, children}) {
    const inputRef = useRef();
    

    const handlePlaceChanged = () => {
        const [place] = inputRef.current.getPlaces();
        if(place) {
            const location = {
                name: place.formatted_address,
                coordinates: [
                    place.geometry.location.lng(),
                    place.geometry.location.lat()
                ],
            };
            handleChange(location);
        }
    };

    return (
        <LoadScript
            googleMapsApiKey="AIzaSyC2oZNWzhuw6yjImkFYSvZ3miShktBq0gI"
            libraries={["places"]}
            loadingElement={ <LocationLoader />}

        >
            <StandaloneSearchBox
            
                onLoad={ref => (inputRef.current = ref)}
                onPlacesChanged={handlePlaceChanged}
            >
                {children ? children : (
                    <TextField
                        disabled={loading}
                        fullWidth
                        label='Location'
                        placeholder={value || placeholder || 'Location'}
                        sx={{
                        "& .MuiOutlinedInput-root": {
                            height: 50,
                            borderRadius: 2,
                            "& fieldset": { borderColor: "#ccc" },
                            "&:hover fieldset": { borderColor: "#2F61BF" },
                            "&.Mui-focused fieldset": { borderColor: "#2F61BF" },
                        },
                        "& .MuiInputLabel-root": { color: "#888" }, 
                        "& .MuiInputLabel-root.Mui-focused": { color: colors.buttoncolor }, 
                        }}
                    />
                )}
            </StandaloneSearchBox>
        </LoadScript>
    );
    
}