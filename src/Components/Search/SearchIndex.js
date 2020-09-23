import React,{Component} from 'react';
import {Input} from 'reactstrap';
 
 class SearchIndex extends Component {
  constructor(props) {
    super(props);  
  this.state = {
     things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards']
   }
      this.state = {
        results: []}
 }
 componentWillMount(){
  this.setState({
    things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards']
  })
  this.setState({
    results: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards']
  })
  //console.log(this.state.things)
}

 searchFunction=(textToFind)=> {
  this.setState({results: this.state.things.filter(item => item.includes(textToFind))
  })
 }

 render() {
   return(  
     <div>
       <Input onChange ={
         e=>{console.log(e.target.value)
         {this.searchFunction(e.target.value)}
         }
          }
          placeholder='Search Here' />
       <h3>Results:</h3>
       <div>
     {this.state.results.map((item,index) => <li key={index}>{item}</li> )}</div>
     </div>
   )
 }
}
export default SearchIndex;

