import randColor from '../../function/randColor'

function Animal ({props}) {

return <>



<div >
     <div style={{
        backgroundColor : randColor()
        }} > 
        <img src={props.img} alt={props.animal}></img>
         <h1> {props.animal} - animal</h1>
     </div> 
</div>
    </>;
}

export default Animal;