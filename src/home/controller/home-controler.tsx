import {useState} from "react"
import React from "react";
import { HomeView } from "../view/home-user-view";
import getUserFromCookies from "../../shared/utils/get-user-from-cookies-util";





  export default function HomeController (){
     
    return ( 
       <HomeView user={getUserFromCookies()}/>  
    
    )
    }         
    
    

     