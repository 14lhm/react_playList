import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import Main from './main';
import Footer from './footer';







class App extends React.Component {
    constructor(){
        super(...arguments);
        this.state={
            liststate:true,
            idnum:6,
            data:[
                {
                    id:1,
                    title:"空白格",
                    singer:"蔡健雅",
                    select:false,
                    like:false,
                },
                {
                    id:2,
                    title:"空白格1111",
                    singer:"蔡健雅1111",
                    select:false,
                    like:false,
                },
                {
                    id:3,
                    title:"空白格2222",
                    singer:"蔡健雅2222",
                    select:false,
                    like:false,
                },
                {
                    id:4,
                    title:"空白格3333",
                    singer:"蔡健雅3333",
                    select:false,
                    like:false,
                },
                {
                    id:5,
                    title:"空白格4444",
                    singer:"蔡健雅4444",
                    select:false,
                    like:false,
                },
                {
                    id:6,
                    title:"空白格5555",
                    singer:"蔡健雅5555",
                    select:false,
                    like:false,
                },
            ]
        };
        this.add=this.add.bind(this);
        this.ischeckall=this.ischeckall.bind(this);
        this.setcheckall=this.setcheckall.bind(this);
        this.checkone=this.checkone.bind(this);
        this.setlike=this.setlike.bind(this);
        this.remove=this.remove.bind(this);
        this.removeselect=this.removeselect.bind(this);
        this.tolike=this.tolike.bind(this);
        this.unlike=this.unlike.bind(this);
        this.turnpage=this.turnpage.bind(this)
    }
    add(title,singer){
        let data=this.state.data;
        console.log(this.state.idnum)
        let id=this.state.idnum+1;
        this.setState({
            idnum:id
        })

        data.unshift(
            {
                id:id,
                title:title,
                singer:singer,
                select:false,
                like:false,
            }
        )
        this.setState({
            data
        })
    }
    ischeckall(){
        let data=this.state.data;
        for(var i=0,len=data.length;i<len;i++){
            if(!data[i].select){
                return false;
            }
        }
        return true;
    }
    setcheckall(checked){
        let data=this.state.data;
        data.map((val)=>{
            val.select=checked;
            return val;
        })
        this.setState({
            data
        })

    }
    checkone(index,checked){
        let data=this.state.data;
        data.map((val,i)=>{
            if(val.id===index){
                data[i].select=checked;
            }
            return val;
        })
        
        this.setState({
            data
        })
    }
    setlike(index,islike){
        let data=this.state.data;
        data.map((val,i)=>{
            if(val.id===index){
            
                data[i].like=islike;
            }
            return val;
        })
        
        this.setState({
            data
        })
    }
    remove(i){
        let data=this.state.data.filter((val,index)=>{
            return i!==val.id;
        });
  
        this.setState({
            data
        })
    }
    removeselect(){
        let data=this.state.data.filter((val)=>!val.select);
        this.setState({
            data
        })
    }
    tolike(){
        let data=this.state.data.map((val)=>{
            if(val.select){
                val.like=true;
            }
            return val;
        });
        this.setState({
            data
        })
    }
    unlike(){
        let data=this.state.data.map((val)=>{
            if(val.select){
                val.like=false;
                val.select=false;
            }
            return val;
        });
        this.setState({
            data
        })
    }
    turnpage(state){
        this.setState({
            liststate:state,
        })
  
    }
    shouldComponentUpdate(nextprops,nextstate){
        
        if(!nextstate.liststate){
            let likedata=this.state.data.filter((val)=>val.like);
            if(!likedata.length){
                this.setState({
                    liststate:true,
                })
                return false
            }
        }
        return true;
    }
    render(){
        let data=this.state.data;
        let selectdata=this.state.data.filter((val)=>val.select);
        let likedata=this.state.data.filter((val)=>val.like);
        // if(likedata.length === 0 && !this.state.liststate){
        //     this.setState({
        //         liststate:true,
        //     })
        // }
        console.log(this.state.data)
        return (
            <div id="musicApp">
                <Header 
                    onadd={this.add}
                />
                <Main 
                    data={this.state.liststate?data:likedata}
                    checkall={this.ischeckall}
                    setcheck={this.setcheckall}
                    checkone={this.checkone}
                    islike={this.setlike}
                    remove={this.remove}
                />
                <Footer 
                    lengthall={data.length}
                    selectlength={selectdata.length}
                    likelength={likedata.length}
                    removeselect={this.removeselect}
                    liststateshow={this.state.liststate}
                    tolike={this.tolike}
                    unlike={this.unlike}
                    turnpage={this.turnpage}
                />
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

