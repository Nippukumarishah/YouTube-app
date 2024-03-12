export const API_KEY = 'AIzaSyAHl_sF5ho9_vWKpbs0IZX1xIjpUoXmbN8';

export const value_converter = (value) =>{
    if(value >= 1000000){
        return Math.floor(value/1000000) + "M";
    }
    else if(value >= 1000){
        return Math.floor(value/1000) + "K";
    }
    else{
        return value;
    }
}