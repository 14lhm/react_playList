import React from "react";

export default class Footer extends React.Component{
    render(){
        let selectlength=this.props.selectlength;
        let liststateshow=this.props.liststateshow;
        let likelength=this.props.likelength;
        console.log()
        return (
            <footer
                style={{display:this.props.lengthall?"block":"none"}}
            >
                <div className="info">
                    <span className="align-right">当前选中{selectlength}首歌曲</span>
                    <span>共{this.props.lengthall}首歌曲</span>
                </div>
                <input 
                    type="button" 
                    value="删除选中歌曲" 
                    style={{display:selectlength?"inline-block":"none"}}
                    onClick={()=>{this.props.removeselect()}}
                />
                <input 
                    type="button" 
                    value="收藏选中歌曲" 
                    style={{display:selectlength?"inline-block":"none"}}
                    onClick={
                        ()=>{
                            this.props.tolike()
                        }
                    }
                />
                <input 
                    type="button" 
                    value="取消收藏选中歌曲" 
                    style={{display:selectlength?"inline-block":"none"}}
                    onClick={
                        ()=>{
                            this.props.unlike()
                        }
                    }
                />
                <input 
                type="button" 
                value="查看收藏清单" 
                style={{display:(liststateshow&&likelength)?"inline-block":"none"}}
                onClick={
                    ()=>{
                        this.props.turnpage(false)
                    }
                    
                }
                />
                <input 
                type="button" 
                value="查看所有清单" 
                style={{display:!liststateshow?"inline-block":"none"}}
                onClick={
                    ()=>{
                        this.props.turnpage(true)
                    }
                }
                />
            </footer>
        )
    }
}