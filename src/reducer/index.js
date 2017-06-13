/**
 * Created by Think on 2017/6/7.
 */
 var data = {};


export default function todos(state=data.rows,action){
    debugger
    switch (action.type){
        case "GETPRODUCTLIST":
            return state;
        case "SELECTONE":
            return state.map(todo =>{
                todo.id == action.id?todo:null;
            });
        default:
            return state;
    }
}