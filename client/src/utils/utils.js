
export function toCommas(value) {
    try{
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    catch(error){
        return value
    }
    
}
