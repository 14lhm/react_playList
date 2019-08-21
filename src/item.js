import React from "react";

export default class Item extends React.Component{
    
    render(){
        let data=this.props.data;
        return (
            <tr className={(data.select?"selected":"")+(data.like?" like":"")}>
                <td>
                    <input 
                        type="checkbox" 
                        checked={data.select} 
                        onChange={
                            (e)=>{
                                this.props.checkone(this.props.index,e.target.checked)
                            }
                        }
                    />
                </td>
                <td>{data.title}</td>
                <td>{data.singer}</td>
                <td>
                    <input 
                        type="checkbox" 
                        checked={data.like} 
                        onChange={
                            (e)=>{
                                this.props.islike(this.props.index,e.target.checked)
                            }
                        }
                    />
                </td>
                <td>
                    <a href="#" 
                        onClick={
                            ()=>{
                                this.props.remove(this.props.index)
                            }
                        }
                    >X</a>
                </td>
            </tr>
        )
    }
}