import React , { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom"; 
import { useParams } from "react-router";
const histPath = localStorage.getItem("history");

function Detail () { 
    
    const location = useLocation();
    const navigate = useNavigate(); 
   // componentDidMount(){
      //  const location = useLocation();
      //  const navigate = useNavigate(); 
                 
       //          console.log("location",  location );
      //          if( location.state === undefined) {
       //             navigate('/');
        //        }
   //   }
// function
      useEffect(() => {

                console.log("location",  location );
               if( location.state === undefined || location.state === null) {
                   navigate('/');
              }

    //console.log("useNavigate",  navigate );
    //  const { location, history } = this.props;
    
  });
 
  if(location.state){
        return (
                <span>  { location.state.title } </span>
                ); 
    }else{
        return null;
    }
        
    
}

export default Detail;