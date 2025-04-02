
import moment from "moment"
export const dateToPrettyString = (string) =>{
    const date = new Date(string)
    
    return (moment(date).format("DD-MM-YYYY"))
}