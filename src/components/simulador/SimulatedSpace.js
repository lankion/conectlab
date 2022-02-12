import style from './SimulatedSpace.module.css';
export default function SimulatedSpace(){
    const dragEvents ={
        onDragEnter: (e) =>{
            e.preventDefault();
            e.stopPropagation();
            console.log("onDragEnter");
        },
        onDragLeave: (e) =>{
            e.preventDefault();
            e.stopPropagation();
            console.log("onDragLeave");
        },
        onDragOver: (e) =>{
            e.preventDefault();
            e.stopPropagation();
            console.log("onDragOver");
        },
        onDrop: (e) =>{
            e.preventDefault();
            e.stopPropagation();
            console.log("onDrop");
            e.dataTransfer.getData("text");

        },
    };
    return(
        <div className={style.container} draggable="true"  {...dragEvents}>
            
        </div>
    );
}
