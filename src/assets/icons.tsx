import React from "react";
import { Icons } from "../home/view/style";


export class IconsFolder extends React.Component{
    render(){
        return(
            <div>
            <Icons>           
 
                    <i data-fa-symbol="edit" className="fa-solid fa-pencil fa-fw fa-rotate-270" data-toggle="modal" data-target="Modal"></i>
                    
                 </Icons>
                 <Icons>
                    <i data-fa-symbol="delete" className="fa-solid fa-trash fa-fw"></i>
                        </Icons>
                        </div>
        )
    }}