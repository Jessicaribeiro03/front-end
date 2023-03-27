import React from "react";
import { Icons } from "../home/view/style";

export class IconsFolder extends React.Component{
    render(){
        return(
            <div>
            <Icons>           
                
                 <button id="editButton" data-fa-symbol="edit" className="fa-solid fa-pencil fa-fw fa-rotate-270">
                 <svg><use xlinkHref="#"></use></svg>
                 </button>
                 </Icons>
                 <Icons>
                    <i data-fa-symbol="delete" className="fa-solid fa-trash fa-fw"></i>
                        <svg><use xlinkHref="#delete"></use></svg>
                        </Icons>

                     
                        </div>
        )
    }}