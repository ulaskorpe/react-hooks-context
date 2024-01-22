import React  from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
 
 
import Swal from 'sweetalert2';
const Contact =({cards,deleteCard})=>{
   /// console.log(props.cards) ;
   const handleDeleteClick = (card) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this card!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
         
        deleteCard(card.id);
        Swal.fire('Deleted!', 'The card has been deleted.', 'success');
      }
    });
  };

    return(
        <div className="ui raised">
            {cards.map((card)=>{
           return(<div key={card.id} className="ui raised very padded text container segment" style={{marginTop:'10px'}}>
               <Link to={`/about/${card.title}`}>{card.title}</Link> 
                
                <br/>
                 {card.body}
                 <button className="ui primary right floated button"   onClick={() =>  handleDeleteClick(card)} >delete</button>
           </div>)

        })}
      
    
    </div>
    );
}

 
const mapStateToProps = (state)=>({
   cards : state.counter.cards 
});

// const mapDispatchToProps = (dispatch)=> {
  
//   return{
    
//     deleteCard : (id)=>{dispatch({type:'DELETE_CARD',id})}
//     }
//   };
const mapDispatchToProps = {
//  deleteCard
}

//export default  connect(mapStateToProps,mapDispatchToProps)(Contact);